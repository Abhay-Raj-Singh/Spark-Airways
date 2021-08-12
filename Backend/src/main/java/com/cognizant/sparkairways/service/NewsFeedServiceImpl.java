package com.cognizant.sparkairways.service;


	import java.util.List;

	import org.springframework.beans.factory.annotation.Autowired;
	import org.springframework.stereotype.Service;

import com.cognizant.sparkairways.dao.NewsFeedDao;
import com.cognizant.sparkairways.model.NewsFeed;


	@Service
	public class NewsFeedServiceImpl implements NewsFeedService {
		
		@Autowired 
		NewsFeedDao newsFeedDAO;

		@Override
		public NewsFeed addNewsFeed(NewsFeed newsFeed) {
			newsFeedDAO.save(newsFeed);
	        return newsFeed;
		}

		@Override
		public List<NewsFeed> getAllNewsFeed() {
			return newsFeedDAO.findAll();
		}

		@Override
		public NewsFeed updateNewsFeed(NewsFeed newsFeed, int news_id) {
			NewsFeed updateNews = newsFeedDAO.findnewsfeed(news_id);
			if(updateNews!=null) {
				updateNews.setNews(newsFeed.getNews());
				updateNews.setDate(newsFeed.getDate());
			}
			return newsFeedDAO.save(updateNews);
		}

		@Override
		public void deleteNews(int news_id) {
			 NewsFeed newsfeed = newsFeedDAO.getOne(news_id);
			 newsFeedDAO.delete(newsfeed);
		}
	}	

 