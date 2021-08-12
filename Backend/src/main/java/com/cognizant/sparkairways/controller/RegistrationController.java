package com.cognizant.sparkairways.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.cognizant.sparkairways.exception.UserAlreadyExistsException;
import com.cognizant.sparkairways.model.User;
import com.cognizant.sparkairways.service.UserService;


@CrossOrigin
@RestController
@RequestMapping("/sparkairways/user")
public class RegistrationController {
	
	@Autowired
	UserService userService;
	
	@RequestMapping(method = RequestMethod.POST,value="/register")
	public ResponseEntity<User> validate(@RequestBody User register) throws UserAlreadyExistsException {
		
		return new ResponseEntity<User>(userService.registerUser(register), HttpStatus.OK);
	}
	
	@ExceptionHandler(value=UserAlreadyExistsException.class)
	  public ResponseEntity<String> UserAlreadyExistsExceptionHandler(Exception ex) {
		  
		  return new ResponseEntity<String>(ex.getMessage(),HttpStatus.NOT_FOUND);
	  }

}