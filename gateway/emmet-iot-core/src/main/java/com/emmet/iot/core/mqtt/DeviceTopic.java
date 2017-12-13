package com.emmet.iot.core.mqtt;

public class DeviceTopic {
	private static final String UPDATE = "/update";
	private static final String STATUS = "/status";
	
	private String deviceId;
	
	public DeviceTopic(String deviceId) {
		this.deviceId = deviceId;
	}
	
	public String update() {
		return DevicesTopic.DEVICE_PREFIX + deviceId + UPDATE;	
	}
	
	public String status() {
		return DevicesTopic.DEVICE_PREFIX + deviceId + STATUS;	
	}	
	
}
