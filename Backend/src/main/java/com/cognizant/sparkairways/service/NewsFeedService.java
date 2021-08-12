package com.cognizant.sparkairways.service;


	import java.util.List;

import com.cognizant.sparkairways.model.NewsFeed;


	public interface NewsFeedService {
		
		public NewsFeed addNewsFeed(NewsFeed newsFeed);

		public List<NewsFeed> getAllNewsFeed();

		 public NewsFeed updateNewsFeed(NewsFeed newsFeed, int news_id);

		public void deleteNews(int news_id);
	}	
 
