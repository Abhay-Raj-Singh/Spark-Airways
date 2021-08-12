package com.cognizant.sparkairways.dao;


	import java.io.Serializable;

import org.springframework.data.jpa.repository.JpaRepository;
	import org.springframework.data.jpa.repository.Query;
	import org.springframework.stereotype.Repository;

import com.cognizant.sparkairways.model.ScheduleFlight;
import com.cognizant.sparkairways.service.flightSchedule;


	@Repository
	public interface AdminFlightScheduleDao  extends JpaRepository<ScheduleFlight, Serializable>{

		@Query(value="select * from sparkairways.flight_schedule where flight_id =?" , nativeQuery=true)
		ScheduleFlight find(Integer flightId);

	}


	
	


