package com.cognizant.sparkairways.dao;

import java.io.Serializable;
import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.cognizant.sparkairways.model.ScheduleFlight;

@Repository
public interface ScheduleFlightDao extends JpaRepository<ScheduleFlight, Serializable> {
	
		@Query(value = "select * from sparkairways.flight_schedule where source=? and destination=? and date=?", nativeQuery = true)
		List<ScheduleFlight> findFlights(String source, String destination, LocalDate date);
		
		@Query(value = "select * from sparkairways.flight_schedule where flight_id=?", nativeQuery = true)
		ScheduleFlight getAvailableSeats(int flight_id);
	
	}

