package com.cognizant.sparkairways.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cognizant.sparkairways.dao.BankDao;
import com.cognizant.sparkairways.model.Bank;
@Service
public class BankServiceImpl implements BankService {
	
	@Autowired
	BankDao bankDao;
	@Override
	public Bank getBankDetails(int account_no) {
		
		return bankDao.getBankDetails(account_no);
	}

}
