package com.cognizant.sparkairways.dao;

import java.io.Serializable;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.cognizant.sparkairways.model.User;


@Repository
public interface UserDao extends JpaRepository<User, Serializable>  {
	
	@Query(value ="select * from sparkairways.user where email=?", nativeQuery = true)
	User find(String email);
	
	@Query(value ="select * from sparkairways.user where user_id=?", nativeQuery = true)
	User findUserById(int user_id);
	
	
}