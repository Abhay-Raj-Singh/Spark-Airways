package com.cognizant.sparkairways.service;


	
	import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cognizant.sparkairways.dao.AdminFlightScheduleDao;
import com.cognizant.sparkairways.model.NewsFeed;
import com.cognizant.sparkairways.model.ScheduleFlight;

	@Service
	public class AdminFlightScheduleServiceImpl implements AdminFlightScheduleService  {
		
		@Autowired
		private AdminFlightScheduleDao flightScheduleDAO;
		
		@Override
		public List<ScheduleFlight> getAllFlightSchedules() 
		{
			System.out.println(flightScheduleDAO.findAll());
			return flightScheduleDAO.findAll();
			
		}

		@Override
		public ScheduleFlight addflightSchedule(ScheduleFlight flightSchedule) 
		{
			flightScheduleDAO.save(flightSchedule);
			return flightSchedule;
		}
		
			@Override
		public ScheduleFlight updateFlightScheduleById(ScheduleFlight flightSchedule, int flight_id) {
				ScheduleFlight updateflight = flightScheduleDAO.find(flight_id);
				if(updateflight!=null) {
					
					updateflight.setAirline(flightSchedule.getAirline());
					updateflight.setBusiness_seats(flightSchedule.getBusiness_seats());
					updateflight.setEconomy_seats(flightSchedule.getEconomy_seats());
					updateflight.setBusiness_seat_cost(flightSchedule.getBusiness_seat_cost());
					updateflight.setEconomy_seat_cost(flightSchedule.getEconomy_seat_cost());
					updateflight.setArrival_time(flightSchedule.getArrival_time());
					updateflight.setDeparture_time(flightSchedule.getDeparture_time());
					updateflight.setSource(flightSchedule.getSource());
					updateflight.setDestination(flightSchedule.getDestination());
					updateflight.setDate(flightSchedule.getDate());
					
				}
				return flightScheduleDAO.save(updateflight);
		}

		@Override
		public void deleteFlightScheduleById(Integer flightId){
			ScheduleFlight entity = flightScheduleDAO.find(flightId);
			flightScheduleDAO.delete(entity);
		}

	
	}


