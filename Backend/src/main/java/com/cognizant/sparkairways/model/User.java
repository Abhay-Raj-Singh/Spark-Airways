package com.cognizant.sparkairways.model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class User {
	
	@Id
    private int user_id;
	private String name;
	private String address;
	private int age;
	private String email;
	private String gender;
    private String password;
    private String phone;
    private String secretQuestion;
    private String answer;
		
    
    
    public int getUser_id() {
		return user_id;
	}



	public void setUser_id(int user_id) {
		this.user_id = user_id;
	}



	public String getName() {
		return name;
	}



	public void setName(String name) {
		this.name = name;
	}



	public String getAddress() {
		return address;
	}



	public void setAddress(String address) {
		this.address = address;
	}



	public int getAge() {
		return age;
	}



	public void setAge(int age) {
		this.age = age;
	}



	public String getEmail() {
		return email;
	}



	public void setEmail(String email) {
		this.email = email;
	}



	public String getGender() {
		return gender;
	}



	public void setGender(String gender) {
		this.gender = gender;
	}



	public String getPassword() {
		return password;
	}



	public void setPassword(String password) {
		this.password = password;
	}



	public String getPhone() {
		return phone;
	}



	public void setPhone(String phone) {
		this.phone = phone;
	}



	public String getSecretQuestion() {
		return secretQuestion;
	}



	public void setSecretQuestion(String secretQuestion) {
		this.secretQuestion = secretQuestion;
	}



	public String getAnswer() {
		return answer;
	}



	public void setAnswer(String answer) {
		this.answer = answer;
	}



	@Override
	public String toString() {
		return "User [user_id=" + user_id + ", name=" + name + ", address=" + address + ", age=" + age + ", email="
				+ email + ", gender=" + gender + ", password=" + password + ", phone=" + phone + ", secretQuestion="
				+ secretQuestion + ", answer=" + answer + "]";
	}



	
	
	
    

}
