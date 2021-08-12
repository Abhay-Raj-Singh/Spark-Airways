package com.cognizant.sparkairways.dao;


	
	import java.io.Serializable;

	import org.springframework.data.jpa.repository.JpaRepository;
	import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.cognizant.sparkairways.model.NewsFeed;

@Repository
	public interface NewsFeedDao extends JpaRepository<NewsFeed,Serializable> {

		@Query
		(value="select * from sparkairways.news_feed where news_id =?", nativeQuery=true)
		NewsFeed findnewsfeed(int newsId);
	}


