package com.cognizant.sparkairways.controller;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.cognizant.sparkairways.exception.FlightNotAvailableException;
import com.cognizant.sparkairways.exception.NoUserFoundException;
import com.cognizant.sparkairways.model.BookingStatus;
import com.cognizant.sparkairways.model.ScheduleFlight;
import com.cognizant.sparkairways.model.User;
import com.cognizant.sparkairways.service.ScheduleFlightService;
import com.cognizant.sparkairways.service.UserService;


@CrossOrigin
@RestController
@RequestMapping("/sparkairways/user")
public class UserController {
	
	@Autowired
	UserService userService;
	@Autowired
	ScheduleFlightService scheduleFlightService;
	
	
	
	
	@RequestMapping(method = RequestMethod.POST,value="/login")
	public ResponseEntity<User> validate(@RequestBody User login) throws NoUserFoundException {
		User status = userService.validateUserLogin(login.getEmail(), login.getPassword());
		
		if (status==null)
			throw new NoUserFoundException("Invalid Username or Password ");
		else
			
		return new ResponseEntity<User>( status, HttpStatus.OK);
	}
	

	@ExceptionHandler(value=NoUserFoundException.class)
	  public ResponseEntity<String> noUserFoundExceptionHandler(Exception ex) {
		  
		  return new ResponseEntity<String>(ex.getMessage(),HttpStatus.NOT_FOUND);
	  }
	
	@RequestMapping(method = RequestMethod.GET,value="/getUserById/{user_id}")
	public ResponseEntity<User> getUserById(@PathVariable("user_id") int user_id) {
		
		return new ResponseEntity<User>(userService.getUserById(user_id), HttpStatus.OK);
	}
	
	
	
	@RequestMapping(method = RequestMethod.GET,value="/getFlights/{source}/{destination}/{date}")
	public ResponseEntity<List<ScheduleFlight>> getFlights(@PathVariable("source") String source, @PathVariable("destination") String destination,
			@PathVariable("date") @DateTimeFormat(pattern = "yyyy-MM-dd") LocalDate date) throws FlightNotAvailableException{
		
		List<ScheduleFlight> getFlightInfo=scheduleFlightService.getFlightsInfo(source, destination,date);
		if(getFlightInfo.isEmpty()) {
			throw new FlightNotAvailableException("No Flight Available on:"+date);
		
		}
		return new ResponseEntity<List<ScheduleFlight>>(getFlightInfo,HttpStatus.OK);
	}
	
	@ExceptionHandler(value=FlightNotAvailableException.class)
	  public ResponseEntity<String> filghtNotAvailableExceptionHandler(Exception ex) {
		  
		  return new ResponseEntity<String>(ex.getMessage(),HttpStatus.NOT_FOUND);
	  }
	
	
	
	
	
	
		
	@RequestMapping(method = RequestMethod.PUT,value="/updateUser/{user_id}")
	public ResponseEntity<User> updateUser(@RequestBody User user,@PathVariable("user_id") int user_id) {
		
		return new ResponseEntity<User>(userService.updateUser(user,user_id), HttpStatus.OK);
	}
	
	
	@RequestMapping(method = RequestMethod.GET,value="/getBookingStatus/{user_id}")
	public ResponseEntity<List<BookingStatus>> getBookingStatus(@PathVariable("user_id") int user_id) {
		
		return new ResponseEntity<List<BookingStatus>>(userService.getBookingStatus(user_id), HttpStatus.OK);
	}
	
		
		
	}


