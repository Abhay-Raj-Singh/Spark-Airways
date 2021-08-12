package com.cognizant.sparkairways.service;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cognizant.sparkairways.dao.ScheduleFlightDao;
import com.cognizant.sparkairways.model.ScheduleFlight;


@Service
public class ScheduleFlightServiceImpl implements ScheduleFlightService {
	
	@Autowired
	private ScheduleFlightDao scheduleFlightDao;

	@Override
	public List<ScheduleFlight> getFlightsInfo(String source, String destination, LocalDate date) {
		
			return scheduleFlightDao.findFlights(source,destination,date);
		 
	}

}

