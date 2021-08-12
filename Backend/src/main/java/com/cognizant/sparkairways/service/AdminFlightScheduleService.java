package com.cognizant.sparkairways.service;


	
import java.util.List;

import com.cognizant.sparkairways.model.ScheduleFlight;


	  public interface AdminFlightScheduleService {

		public List<ScheduleFlight> getAllFlightSchedules();

		ScheduleFlight addflightSchedule(ScheduleFlight flightSchedule);

		ScheduleFlight updateFlightScheduleById(ScheduleFlight flightSchedule, int flight_id);
		
		void deleteFlightScheduleById(Integer flight_id);
	}


