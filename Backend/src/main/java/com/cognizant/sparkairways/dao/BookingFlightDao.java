package com.cognizant.sparkairways.dao;

import java.text.SimpleDateFormat;
import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import com.cognizant.sparkairways.model.BookingStatus;


@Repository
public class BookingFlightDao{
	
	@Autowired
	JdbcTemplate jdbcTemplate;
	

	public Boolean cancelFlight(BookingStatus bookedSeatToCancel, int currentAccountBalance, int updatedEconomySeats, int updatedBusinessSeats) {
		String sql1="delete from sparkairways.booking_status where pnr_no = ?";
		int addedBalanceToBankOnCancellation=bookedSeatToCancel.getAmount()+currentAccountBalance;
		String sql2="update  sparkairways.bank set balance=?  where account_no=?";
		String sql3="update  sparkairways.flight_schedule set business_seats=? , economy_seats=? where flight_id=?;";
		try {
			jdbcTemplate.update(sql1,bookedSeatToCancel.getPnr_no());
			jdbcTemplate.update(sql2,addedBalanceToBankOnCancellation,bookedSeatToCancel.getAccount_no());
			jdbcTemplate.update(sql3,updatedBusinessSeats,updatedEconomySeats,bookedSeatToCancel.getFlight_id());
			
		} catch (DataIntegrityViolationException e) {
			// TODO: handle exception
			//throw new InvalidCompanyException("No Company Found");
		}
		
		return true;
	}


	@SuppressWarnings("deprecation")
	public int addFlightBooking(int flight_id, int user_id, int updatedEconomySeats, int updatedBusinessSeats, int book_business_seats, int book_economy_seats, int account_no, int bankBalance,int amount, String source, String destination, String airlne) {
	    String simpleDateFormat=new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(new Date());
		String sql1="update  sparkairways.flight_schedule set business_seats=? , economy_seats=? where flight_id=?;";
		String sql2="insert into sparkairways.booking_status (flight_id,user_id,booked_business_seats,booked_economy_seats,time_stamp,amount,account_no,source,destination,airline) values(?,?,?,?,?,?,?,?,?,?);" ;
		String sql3="select pnr_no from sparkairways.booking_status where user_id=? and flight_id=? and booked_business_seats=? and booked_economy_seats=? and time_stamp=? ;";
		String sql4="update  sparkairways.bank set balance=?  where account_no=?;";
		jdbcTemplate.update(sql1,updatedBusinessSeats,updatedEconomySeats,flight_id);
		jdbcTemplate.update(sql2,flight_id,user_id,book_business_seats,book_economy_seats,simpleDateFormat,amount,account_no,source,destination,airlne);
		int pnr=jdbcTemplate.queryForObject(sql3, new Object[] {user_id,flight_id,book_business_seats,book_economy_seats,simpleDateFormat}, Integer.class);
		jdbcTemplate.update(sql4,bankBalance,account_no);
		
		return pnr;
		
		
		
		
	
	}

}

