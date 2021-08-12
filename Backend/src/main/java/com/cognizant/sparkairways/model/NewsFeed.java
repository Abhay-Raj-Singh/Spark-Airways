package com.cognizant.sparkairways.model;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name="news_feed")
public class NewsFeed {

	@Id

	@GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "news_id", updatable = false, nullable = false)
    private int news_id;
    
	private LocalDate date;	
    private String news;
    
	
	public int getNews_id() {
		return news_id;
	}
	public void setNews_id(int news_id) {
		this.news_id = news_id;
	}
	public LocalDate getDate() {
		return date;
	}
	public void setDate(LocalDate date) {
		this.date = date;
	}
	public String getNews() {
		return news;
	}
	public void setNews(String news) {
		this.news = news;
	}
	@Override
	public String toString() {
		return "NewsFeed [news_id=" + news_id + ", date=" + date + ", news=" + news + "]";
	}
	
}