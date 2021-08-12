package com.cognizant.sparkairways.service;

import java.time.LocalDate;
import java.util.List;

import org.springframework.stereotype.Service;

import com.cognizant.sparkairways.model.ScheduleFlight;
@Service
public interface ScheduleFlightService {
	
	List<ScheduleFlight> getFlightsInfo(String source, String destination, LocalDate date);

}
