package com.cognizant.sparkairways.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cognizant.sparkairways.dao.BookingFlightDao;
import com.cognizant.sparkairways.dao.ScheduleFlightDao;
import com.cognizant.sparkairways.model.BookingStatus;
import com.cognizant.sparkairways.model.ScheduleFlight;


@Service
public class BookingFlightServiceImpl implements BookingFlightService {
	
	@Autowired
	BookingFlightDao bookingFlightDao;
	@Autowired
	ScheduleFlightDao scheduleFlightDao;

	@Override
	public Boolean cancelFlight(BookingStatus bookedSeatToCancel,int currentAccountBalance, int updatedEconomySeats, int updatedBusinessSeats) {
		// TODO Auto-generated method stub
		return bookingFlightDao.cancelFlight(bookedSeatToCancel,currentAccountBalance,updatedEconomySeats,updatedBusinessSeats);
	}


	@Override
	public int bookFlight(int flight_id, int user_id, int updatedEconomySeats, int updatedBusinessSeats, int book_business_seats, int book_economy_seats,int account_no,int bankBalance,int amount, String source, String destination, String airlne) {
		// TODO Auto-generated method stub
		return bookingFlightDao.addFlightBooking(flight_id,user_id,updatedEconomySeats,updatedBusinessSeats,book_business_seats,book_economy_seats,account_no,bankBalance,amount,source,destination,airlne);
	}




	@Override
	public ScheduleFlight getAvailableSeats(int flight_id) {
		// TODO Auto-generated method stub
		return scheduleFlightDao.getAvailableSeats(flight_id);
	}

}
