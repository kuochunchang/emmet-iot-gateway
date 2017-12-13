package com.emmet.iot.mock;

import java.util.HashMap;
import java.util.Map;
import java.util.Random;

import javax.annotation.PostConstruct;
import javax.annotation.PreDestroy;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.eclipse.paho.client.mqttv3.MqttException;
import org.eclipse.paho.client.mqttv3.MqttMessage;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import com.emmet.iot.core.config.Constant;
import com.emmet.iot.core.model.DeviceCommand;
import com.emmet.iot.core.model.DeviceStatusNotification;
import com.emmet.iot.core.model.Heartbeat;
import com.emmet.iot.core.mqtt.DeviceTopic;
import com.emmet.iot.core.mqtt.DevicesTopic;
import com.emmet.iot.core.mqtt.MqttPubSubClient;
import com.emmet.iot.core.util.JsonHelper;

@Service
public class MockDevice extends MqttPubSubClient {
	private String deviceId = "device-0001";

	private String statusTopic;
	private String controlTopic;
	private String heartbeatTopic;

	@Value("${gateway.mqtt.broker-url}")
	private String brokerUrl;

	private boolean isShutdown = false;

	private Map<String, Object> channles = new HashMap<>();

	@Override
	public void mqttMessageArrived(String topic, MqttMessage msg) {
		log.info(this.deviceId + " received a new message!  topic: " + topic + " message: " + msg);

		if (topic.startsWith(Constant.DEVICE_COMMAND_TOPIC_PREFIX + deviceId)) {
			DeviceCommand cmd = JsonHelper.JsonStringToObject(new String(msg.getPayload()), DeviceCommand.class);
			if (cmd.getCommand().equals(DeviceCommand.NAME.REPORT_STATUS)) {

				publishStatus(getRabdomStatus());
			}

		}
		//
	}

	private static final Log log = LogFactory.getLog(MockDevice.class);

	@PostConstruct
	public void init() {

		this.setBrokerUrl(brokerUrl);
		DeviceTopic mqttTopic = new DevicesTopic().device(deviceId);

		this.controlTopic = Constant.DEVICE_COMMAND_TOPIC_PREFIX + deviceId;
		this.heartbeatTopic = DevicesTopic.heartbeat();
		this.statusTopic = mqttTopic.status();
		this.connect();

		log.info("Mock device created! id=" + this.deviceId + " @" + this);

	}

	public Map<String, Object> getChannles() {
		return channles;
	}

	@Override
	public void connect() {
		try {
			super.connect();

			subscribe(controlTopic);

			startHeartbeat();
			startRandomStatus();

		} catch (MqttException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

	@PreDestroy
	public void shutdown() {
		isShutdown = true;
		this.disconnect();
	}

	// -------------------------------------------------------------

	private DeviceStatusNotification getRabdomStatus() {
		DeviceStatusNotification status = new DeviceStatusNotification();
		status.setDeviceId(deviceId);
		status.setChannelValue("1", getRandomValue(0, 100).toString());
		status.setChannelValue("2", getRandomValue(0, 100).toString());

		return status;

	}

	private void publishStatus(DeviceStatusNotification deviceStatus) {
		publish(statusTopic, deviceStatus);
	}

	private Integer getRandomValue(int low, int high) {
		Random r = new Random();
		int Low = 10;
		int High = 100;
		return r.nextInt(High - Low) + Low;
	}

	private Thread startRandomStatus() {
		Thread t = new Thread(new Runnable() {

			@Override
			public void run() {
				while (!isShutdown) {
					try {
						publishStatus(getRabdomStatus());
						Thread.sleep(3000);
					} catch (InterruptedException e) {
						// TODO Auto-generated catch block
						e.printStackTrace();
					}
				}
				DeviceStatusNotification status = getRabdomStatus();
				status.setOnline(false);
				publishStatus(status);
			}

		});

		t.start();

		return t;
	}

	private Thread startHeartbeat() {
		Thread thread = new Thread(new Runnable() {
			int counter = 0;

			@Override
			public void run() {
				while (!isShutdown && MockDevice.this.isMqttConnected()) {
					try {

						Heartbeat heartBeat = new Heartbeat();
						heartBeat.setDeviceId(deviceId);
						heartBeat.setSequence(++counter);
						heartBeat.setTimestamp(System.currentTimeMillis());

						publish(heartbeatTopic, heartBeat);

						log.debug("Heartbeat published to topic: " + heartbeatTopic + "   " + heartBeat);
						Thread.sleep(2000);
					} catch (Exception e) {
						// TODO Auto-generated catch block
						e.printStackTrace();
					}
				}

			}
		});

		thread.start();

		return thread;

	}

}