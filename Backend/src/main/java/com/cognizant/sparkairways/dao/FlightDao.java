package com.cognizant.sparkairways.dao;

import java.io.Serializable;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.cognizant.sparkairways.model.ScheduleFlight;


@Repository
public interface FlightDao extends JpaRepository<ScheduleFlight, Serializable>{
	

	@Query(value="select * from sparkairways.flight_schedule where flight_id=?", nativeQuery = true)
	ScheduleFlight find(int flight_id);
	
}