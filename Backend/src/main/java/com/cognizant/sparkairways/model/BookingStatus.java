package com.cognizant.sparkairways.model;

import java.sql.Timestamp;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class BookingStatus {
	@Id
	private int pnr_no;
	private int user_id;
	private int flight_id;
	private int booked_business_seats;
	private int booked_economy_seats;
	private Timestamp time_stamp;
	private int amount;
	private int account_no;
	private String source;
	private String destination;
	private String airline;
	public int getPnr_no() {
		return pnr_no;
	}
	public void setPnr_no(int pnr_no) {
		this.pnr_no = pnr_no;
	}
	public int getUser_id() {
		return user_id;
	}
	public void setUser_id(int user_id) {
		this.user_id = user_id;
	}
	public int getFlight_id() {
		return flight_id;
	}
	public void setFlight_id(int flight_id) {
		this.flight_id = flight_id;
	}
	public int getBooked_business_seats() {
		return booked_business_seats;
	}
	public void setBooked_business_seats(int booked_business_seats) {
		this.booked_business_seats = booked_business_seats;
	}
	public int getBooked_economy_seats() {
		return booked_economy_seats;
	}
	public void setBooked_economy_seats(int booked_economy_seats) {
		this.booked_economy_seats = booked_economy_seats;
	}
	public Timestamp getTime_stamp() {
		return time_stamp;
	}
	public void setTime_stamp(Timestamp time_stamp) {
		this.time_stamp = time_stamp;
	}
	public int getAmount() {
		return amount;
	}
	public void setAmount(int amount) {
		this.amount = amount;
	}
	public int getAccount_no() {
		return account_no;
	}
	public void setAccount_no(int account_no) {
		this.account_no = account_no;
	}
	public String getSource() {
		return source;
	}
	public void setSource(String source) {
		this.source = source;
	}
	public String getDestination() {
		return destination;
	}
	public void setDestination(String destination) {
		this.destination = destination;
	}
	public String getAirline() {
		return airline;
	}
	public void setAirline(String airline) {
		this.airline = airline;
	}
	@Override
	public String toString() {
		return "BookingStatus [pnr_no=" + pnr_no + ", user_id=" + user_id + ", flight_id=" + flight_id
				+ ", booked_business_seats=" + booked_business_seats + ", booked_economy_seats=" + booked_economy_seats
				+ ", time_stamp=" + time_stamp + ", amount=" + amount + ", account_no=" + account_no + ", source="
				+ source + ", destination=" + destination + ", airline=" + airline + "]";
	}
	
	
	
	
	
	
}
