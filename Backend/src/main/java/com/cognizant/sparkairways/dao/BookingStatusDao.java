package com.cognizant.sparkairways.dao;

import java.io.Serializable;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.cognizant.sparkairways.model.BookingStatus;
@Repository
public interface BookingStatusDao extends JpaRepository<BookingStatus, Serializable> {
	
	
	@Query(value = "select * from sparkairways.booking_status where user_id=?", nativeQuery = true)
	List<BookingStatus> getBookingDetails(int user_id);
	
	

}
