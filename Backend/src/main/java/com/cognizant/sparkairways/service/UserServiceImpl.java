package com.cognizant.sparkairways.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cognizant.sparkairways.dao.BankDao;
import com.cognizant.sparkairways.dao.BookingStatusDao;
import com.cognizant.sparkairways.dao.FlightDao;
import com.cognizant.sparkairways.dao.UserDao;
import com.cognizant.sparkairways.exception.SeatsNotAvailableException;
import com.cognizant.sparkairways.exception.UserAlreadyExistsException;
import com.cognizant.sparkairways.model.Bank;
import com.cognizant.sparkairways.model.BookingStatus;
import com.cognizant.sparkairways.model.ScheduleFlight;
import com.cognizant.sparkairways.model.User;


@Service
public class UserServiceImpl implements UserService {
	
	@Autowired
	private UserDao userDao;
	@Autowired
	private FlightDao flightDao;
	@Autowired
	private BankDao saBankDao;
	@Autowired
	private BookingStatusDao bookingStatusDao;
	
	
	@Override
	public User validateUserLogin(String email, String password) {
		User validUser = userDao.find(email);
		if (validUser != null) {
			if (validUser.getPassword().equals(password)) {
				return validUser;
			}
		}
		return null;
	}

	@Override
	public User registerUser(User register) throws UserAlreadyExistsException {
		 if((userDao.find(register.getEmail())) !=null) {
			 throw new UserAlreadyExistsException("User Already Present");
		 }  
		 
		
		return userDao.save(register);
	}

	

	@Override
	public Bank getBankDetails(String account_no, String bank_name) {
		// TODO Auto-generated method stub
		return saBankDao.getBankDetails(account_no,bank_name);
	}

	@Override
	public ScheduleFlight getFlightSeats(int flight_id, int business_seats, int economy_seats) throws SeatsNotAvailableException {
		ScheduleFlight flight = flightDao.find(flight_id);
		if(flight!=null) {
			if(business_seats==0 && economy_seats==0 ) {
				throw new SeatsNotAvailableException("You should add 1 seat for booking ");
			}
			if(flight.getBusiness_seats()>=business_seats && flight.getEconomy_seats()>= economy_seats ) {
				return flight;
			}
			
		}
		throw new SeatsNotAvailableException("Required Number Of Seats are Not Available ");
	}

	@Override
	public User updateUser(User user, int user_id) {
		User currentUser=userDao.findUserById(user_id);
		if((currentUser !=null)) {
			currentUser.setAddress(user.getAddress());
			currentUser.setAge(user.getAge());
			//currentUser.setAnswer(user.getAnswer());
			//currentUser.setEmail(user.getEmail());
			currentUser.setGender(user.getGender());
			currentUser.setName(user.getName());
			currentUser.setPassword(user.getPassword());
			currentUser.setPhone(user.getPhone());
			
			return userDao.save(currentUser);
			
		 } 
		
		 return null;
	}
	
	@Override
	public User getUserById(int user_id) {
		return userDao.findUserById(user_id);
	}

	@Override
	public List<BookingStatus> getBookingStatus(int user_id) {
		// TODO Auto-generated method stub
		return bookingStatusDao.getBookingDetails(user_id);
	}

	
	
	

}

