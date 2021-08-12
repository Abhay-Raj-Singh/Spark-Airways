package com.cognizant.sparkairways.dao;


	
	import java.io.Serializable;

import org.springframework.data.jpa.repository.JpaRepository;
	import org.springframework.data.jpa.repository.Query;

import com.cognizant.sparkairways.model.Admin;
	//import org.springframework.data.repository.CrudRepository;


	public interface AdminDao extends JpaRepository<Admin, Serializable>{
		
		@Query(value="select * from sparkairways.admin where admin_name=? and password=?", nativeQuery = true)
		Admin isValidAdmin(String adminName, String password);
	}


