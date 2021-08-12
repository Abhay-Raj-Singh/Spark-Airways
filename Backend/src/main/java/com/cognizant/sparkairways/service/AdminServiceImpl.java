package com.cognizant.sparkairways.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cognizant.sparkairways.dao.AdminDao;
import com.cognizant.sparkairways.model.Admin;

@Service
public class AdminServiceImpl implements AdminService {
	
	@Autowired
	private AdminDao adminDAO;
	
	@Override
	public Admin adminLogin(Admin admin) {
		Admin validAdmin = adminDAO.isValidAdmin(admin.getAdmin_name(), admin.getPassword());
		if(validAdmin!=null) {
			return validAdmin;
		}
		return null;
	}
}
