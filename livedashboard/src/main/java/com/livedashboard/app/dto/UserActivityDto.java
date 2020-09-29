package com.livedashboard.app.dto;

import java.sql.Timestamp;

public class UserActivityDto {

	String url;
	
	String browser;
	
	String os;
	
	String pageview;

	String service;
	
	Timestamp ts;
	
	String reponsedata;
	
	String resolution;
	
	String lat;
	
	String lng;
	
	String ip;
	
	String devicetype;
	
	String duration;
	
	String username;
	
	String projectname;
	
	String browserUrl;
	
	
	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}
	public String getService() {
		return service;
	}

	public void setService(String service) {
		this.service = service;
	}

	public Timestamp getTs() {
		return ts;
	}

	public void setTs(Timestamp ts) {
		this.ts = ts;
	}

	public String getReponsedata() {
		return reponsedata;
	}

	public void setReponsedata(String reponsedata) {
		this.reponsedata = reponsedata;
	}
	public String getBrowser() {
		return browser;
	}

	public void setBrowser(String browser) {
		this.browser = browser;
	}
	public String getOs() {
		return os;
	}

	public void setOs(String os) {
		this.os = os;
	}
	public String getPageview() {
		return pageview;
	}

	public void setPageview(String pageview) {
		this.pageview = pageview;
	}
	public String getResolution() {
		return resolution;
	}

	public void setResolution(String resolution) {
		this.resolution = resolution;
	}
	public String getLat() {
		return lat;
	}

	public void setLat(String lat) {
		this.lat = lat;
	}
	public String getLng() {
		return lng;
	}

	public void setLng(String lng) {
		this.lng = lng;
	}
	public String getIp() {
		return ip;
	}

	public void setIp(String ip) {
		this.ip = ip;
	}
	public String getDevicetype() {
		return devicetype;
	}

	public void setDevicetype(String devicetype) {
		this.devicetype = devicetype;
	}
	public String getDuration() {
		return duration;
	}

	public void setDuration(String duration) {
		this.duration = duration;
	}
	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}
	public String getProjectname() {
		return projectname;
	}

	public void setProjectname(String projectname) {
		this.projectname = projectname;
	}
	public String getBrowserUrl() {
		return browserUrl;
	}

	public void setBrowserUrl(String browserUrl) {
		this.browserUrl = browserUrl;
	}
	
}
