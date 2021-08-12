package com.cognizant.sparkairways.model;


public class Passenger {
	private String passenger_name;
	private int passenger_age;
	public String getPassenger_name() {
		return passenger_name;
	}
	public void setPassenger_name(String passenger_name) {
		this.passenger_name = passenger_name;
	}
	public int getPassenger_age() {
		return passenger_age;
	}
	public void setPassenger_age(int passenger_age) {
		this.passenger_age = passenger_age;
	}
	@Override
	public String toString() {
		return "Passenger [passenger_name=" + passenger_name + ", passenger_age=" + passenger_age + "]";
	}
	
	
	

}
