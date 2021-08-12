package com.cognizant.sparkairways.controller;


	
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.cognizant.sparkairways.model.ScheduleFlight;
import com.cognizant.sparkairways.service.AdminFlightScheduleService;

@CrossOrigin
	@RestController
	public class AdminFlightScheduleController {
		
			@Autowired
			AdminFlightScheduleService flightScheduleService;
		
		 	@GetMapping("/sparkairways/admin/admin-home/get-all-flight-schedule")
		 	@ResponseBody
		 	public List<ScheduleFlight> getAllFlightSchedules() {
		 		return this.flightScheduleService.getAllFlightSchedules();
		    }
		 	 
		 	@PostMapping("/sparkairways/admin/admin-home/add-flight-schedule")
			@ResponseBody
			public ScheduleFlight addFlightSchedule(@RequestBody ScheduleFlight flightSchedule) 
			{
				return this.flightScheduleService.addflightSchedule(flightSchedule);
			}
		 
			@PutMapping("/sparkairways/admin/admin-home/update-flight-schedule/{flight_id}")
			@ResponseBody
			public ScheduleFlight updateFlightScheduleById(@RequestBody ScheduleFlight flightSchedule,@PathVariable("flight_id") int flight_id) 
			{
				return this.flightScheduleService.updateFlightScheduleById(flightSchedule, flight_id);
			}
		 
			@DeleteMapping("/sparkairways/admin/admin-home/delete-flight/{flight_id}")
			public ResponseEntity<HttpStatus> deleteFlightSchedule(@PathVariable  int flight_id) {
				try {
					this.flightScheduleService.deleteFlightScheduleById(flight_id);
					return new ResponseEntity<>(HttpStatus.OK);
				} catch (Exception e) {
					return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
				}
			}
	}


