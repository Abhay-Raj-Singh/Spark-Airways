package com.cognizant.sparkairways.dao;

import java.io.Serializable;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.cognizant.sparkairways.model.Bank;

@Repository
public interface BankDao extends JpaRepository<Bank, Serializable> {

	@Query(value="select * from sparkairways.bank where account_no=? and bank_name=?", nativeQuery = true)
	Bank getBankDetails(String account_no, String bank_name);
	
	@Query(value = "select * from sparkairways.bank where account_no=?", nativeQuery = true)
	Bank getBankDetails(int account_no);
	
}
