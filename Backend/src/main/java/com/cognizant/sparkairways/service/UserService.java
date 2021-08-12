package com.cognizant.sparkairways.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.cognizant.sparkairways.exception.SeatsNotAvailableException;
import com.cognizant.sparkairways.exception.UserAlreadyExistsException;
import com.cognizant.sparkairways.model.Bank;
import com.cognizant.sparkairways.model.BookingStatus;
import com.cognizant.sparkairways.model.ScheduleFlight;
import com.cognizant.sparkairways.model.User;
@Service
public interface UserService {
	
	User validateUserLogin(String email, String password);
	 
		User registerUser(User register) throws UserAlreadyExistsException;
		
		Bank getBankDetails(String account_no, String bank_name);
		
		ScheduleFlight getFlightSeats(int flight_id, int business_seats, int economy_seats) throws SeatsNotAvailableException;
		
		User updateUser(User user, int user_id);

		List<BookingStatus> getBookingStatus(int user_id);

		User getUserById(int user_id);

}
