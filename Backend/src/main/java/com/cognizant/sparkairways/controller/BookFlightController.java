package com.cognizant.sparkairways.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.cognizant.sparkairways.exception.InvalidAccountNumberException;
import com.cognizant.sparkairways.exception.SeatsNotAvailableException;
import com.cognizant.sparkairways.model.Bank;
import com.cognizant.sparkairways.model.BookingStatus;
import com.cognizant.sparkairways.model.ScheduleFlight;
import com.cognizant.sparkairways.service.BankService;
import com.cognizant.sparkairways.service.BookingFlightService;
import com.cognizant.sparkairways.service.UserService;

@CrossOrigin
@RestController
@RequestMapping("/sparkairways/user")
public class BookFlightController {
	
	@Autowired
	UserService userService;
	@Autowired
	BookingFlightService bookingFlightService;
	@Autowired
	BankService bankService;
	
//done	for business and economy seats
	@RequestMapping(method = RequestMethod.GET,value="/getFlightSeats/{flight_id}/{business_seats}/{economy_seats}")
	public ResponseEntity<ScheduleFlight> getFlightSeats(@PathVariable int flight_id,@PathVariable int business_seats,@PathVariable int economy_seats)
	throws SeatsNotAvailableException{
		
		return new ResponseEntity<ScheduleFlight>(userService.getFlightSeats(flight_id,business_seats,economy_seats),HttpStatus.OK);

    }
	
	@ExceptionHandler(value=SeatsNotAvailableException.class)
	  public ResponseEntity<String> seatsNotAvailableExceptionHandler(Exception ex) {
		  
		  return new ResponseEntity<String>(ex.getMessage(),HttpStatus.NOT_FOUND);
	  }
	
	
	
	
//booking flight
	
	@RequestMapping(method = RequestMethod.POST,value="/bookFlight/{flight_id}/{user_id}/{book_business_seats}/{book_economy_seats}/{account_no}/{amount}")
	 public ResponseEntity<Integer> bookFlight(@PathVariable("flight_id") int flight_id,@PathVariable("user_id") int user_id,@PathVariable("book_business_seats") int book_business_seats
			 ,@PathVariable("book_economy_seats") int book_economy_seats,@PathVariable("amount") int amount,@PathVariable("account_no") int account_no) {
		
		ScheduleFlight availableSeats=bookingFlightService.getAvailableSeats(flight_id);
		int updatedEconomySeats = availableSeats.getEconomy_seats()-book_economy_seats;
		int updatedBusinessSeats= availableSeats.getBusiness_seats()-book_business_seats;
		String source=availableSeats.getSource();
		String destination=availableSeats.getDestination();
		String airlne=availableSeats.getAirline();
		Bank fetchBalance=bankService.getBankDetails(account_no);
		int updatedBalance=fetchBalance.getBalance()-amount;
		
		 return new ResponseEntity<Integer>( bookingFlightService.bookFlight(flight_id,user_id,updatedEconomySeats,updatedBusinessSeats,book_business_seats,book_economy_seats,account_no,updatedBalance,amount,source,destination,airlne), HttpStatus.OK);
	    }
	
//done	cancel booking
	
	@RequestMapping(method = RequestMethod.DELETE,value="/cancelBooking")
	 public ResponseEntity<Boolean> deleteUser(@RequestBody BookingStatus bookedSeatToCancel) {
		Bank fetchBalance=bankService.getBankDetails(bookedSeatToCancel.getAccount_no());
		ScheduleFlight availableSeats=bookingFlightService.getAvailableSeats(bookedSeatToCancel.getFlight_id());
		int updatedEconomySeats = availableSeats.getEconomy_seats()+bookedSeatToCancel.getBooked_economy_seats();
		int updatedBusinessSeats= availableSeats.getBusiness_seats()+bookedSeatToCancel.getBooked_economy_seats();
		 return new ResponseEntity<Boolean>( bookingFlightService.cancelFlight(bookedSeatToCancel,fetchBalance.getBalance(),updatedEconomySeats,updatedBusinessSeats), HttpStatus.OK);
	       
	    }
	
	
//done	payment
	
	@RequestMapping(method = RequestMethod.GET,value="/payment/{account_no}/{bank_name}")
	public ResponseEntity<Bank> getBankDetails(@PathVariable("account_no") String account_no,@PathVariable("bank_name") String bank_name) throws InvalidAccountNumberException {
		
		if(userService.getBankDetails(account_no,bank_name)!=null) {
			return new ResponseEntity<Bank>(userService.getBankDetails(account_no,bank_name),HttpStatus.OK);
		}
		
		throw new InvalidAccountNumberException("Invalid Account Number or Bank Name");
		

    }
	
	@ExceptionHandler(value=InvalidAccountNumberException.class)
	  public ResponseEntity<String> invalidAccountNumberExceptionHandler(Exception ex) {
		  
		  return new ResponseEntity<String>(ex.getMessage(),HttpStatus.NOT_FOUND);
	  }
	
	
	
	
}

