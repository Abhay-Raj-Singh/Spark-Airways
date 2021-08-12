package com.cognizant.sparkairways.service;

import org.springframework.stereotype.Service;

import com.cognizant.sparkairways.model.Bank;

@Service
public interface BankService {
	Bank getBankDetails(int account_no);

}
