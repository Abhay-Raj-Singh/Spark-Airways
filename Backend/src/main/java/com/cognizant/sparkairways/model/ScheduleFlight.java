package com.cognizant.sparkairways.model;

import java.sql.Time;
import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="`flight_schedule`")
public class ScheduleFlight {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "flight_id", updatable = false, nullable = false)
	private int flight_id;
	private String airline;
	private int business_seats;
	private int economy_seats;
	private int business_seat_cost;
	private int economy_seat_cost;
	private Time arrival_time;
	private Time departure_time;
	private String source;
	private String destination;
	private LocalDate date;
	public int getFlight_id() {
		return flight_id;
	}
	public void setFlight_id(int flight_id) {
		this.flight_id = flight_id;
	}
	public String getAirline() {
		return airline;
	}
	public void setAirline(String airline) {
		this.airline = airline;
	}
	public int getBusiness_seats() {
		return business_seats;
	}
	public void setBusiness_seats(int business_seats) {
		this.business_seats = business_seats;
	}
	public int getEconomy_seats() {
		return economy_seats;
	}
	public void setEconomy_seats(int economy_seats) {
		this.economy_seats = economy_seats;
	}
	public int getBusiness_seat_cost() {
		return business_seat_cost;
	}
	public void setBusiness_seat_cost(int business_seat_cost) {
		this.business_seat_cost = business_seat_cost;
	}
	public int getEconomy_seat_cost() {
		return economy_seat_cost;
	}
	public void setEconomy_seat_cost(int economy_seat_cost) {
		this.economy_seat_cost = economy_seat_cost;
	}
	public Time getArrival_time() {
		return arrival_time;
	}
	public void setArrival_time(Time arrival_time) {
		this.arrival_time = arrival_time;
	}
	public Time getDeparture_time() {
		return departure_time;
	}
	public void setDeparture_time(Time departure_time) {
		this.departure_time = departure_time;
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
	public LocalDate getDate() {
		return date;
	}
	public void setDate(LocalDate date) {
		this.date = date;
	}
	@Override
	public String toString() {
		return "ScheduleFlight [flight_id=" + flight_id + ", airline=" + airline + ", business_seats=" + business_seats
				+ ", economy_seats=" + economy_seats + ", business_seat_cost=" + business_seat_cost
				+ ", economy_seat_cost=" + economy_seat_cost + ", arrival_time=" + arrival_time + ", departure_time="
				+ departure_time + ", source=" + source + ", destination=" + destination + ", date=" + date + "]";
	}
	
	
	
}

