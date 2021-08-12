package com.cognizant.sparkairways.service;

import org.springframework.stereotype.Service;

import com.cognizant.sparkairways.model.BookingStatus;
import com.cognizant.sparkairways.model.ScheduleFlight;
@Service
public interface BookingFlightService {
	
	
	int bookFlight(int flight_id, int user_id, int updatedEconomySeats, int updatedBusinessSeats, int book_business_seats, int book_economy_seats, int account_no, int bankBalance, int amount, String source, String destination, String airlne);

	Boolean cancelFlight(BookingStatus bookedSeatToCancel, int currentAccountBalance, int updatedEconomySeats, int updatedBusinessSeats);

	ScheduleFlight getAvailableSeats(int flight_id);

}
