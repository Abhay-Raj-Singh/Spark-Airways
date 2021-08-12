package com.cognizant.sparkairways.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

import com.cognizant.sparkairways.exception.AdminNotFoundException;
import com.cognizant.sparkairways.model.Admin;
import com.cognizant.sparkairways.service.AdminService;

@CrossOrigin
@Controller
public class AdminController {
	
	@Autowired
	AdminService adminService;
	
	@PostMapping("/sparkairways/admin")
	@ResponseBody
	public ResponseEntity<Admin> adminLogin(@RequestBody Admin admin) throws AdminNotFoundException{
		Admin isValidAdmin = adminService.adminLogin(admin);
		if(isValidAdmin==null) {
			throw new AdminNotFoundException("Invalid Admin Credentials");
		}
		return new ResponseEntity<Admin> (isValidAdmin, HttpStatus.OK);
	}
	
	@ExceptionHandler(value=AdminNotFoundException.class)
	public ResponseEntity<String> AdminNotFoundException(Exception e){
		return new ResponseEntity<String>(e.getMessage(), HttpStatus.NOT_FOUND);
	}
}
