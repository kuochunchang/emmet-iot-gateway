package com.emmet.iot.core.mqtt;

import static org.hamcrest.CoreMatchers.equalTo;
import static org.junit.Assert.assertThat;

import org.junit.Test;

public class DevicesTopicTest {

	@Test
	public void test() {
		DevicesTopic topic = new DevicesTopic();
		assertThat(topic.device("foo").update(), equalTo("/devices/foo/update"));
		assertThat(topic.device("foo").status(), equalTo("/devices/foo/status"));

		
		assertThat(DevicesTopic.heartbeat(), equalTo("/devices/heartbeat"));
		
		
	}

}
