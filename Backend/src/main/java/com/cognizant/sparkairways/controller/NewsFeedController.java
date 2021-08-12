package com.cognizant.sparkairways.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

import com.cognizant.sparkairways.model.NewsFeed;
import com.cognizant.sparkairways.service.NewsFeedService;

@CrossOrigin
@Controller
public class NewsFeedController {
	
	@Autowired
	private NewsFeedService newsFeedService;
	
	@PostMapping("/sparkairways/admin/admin-home/add-news-feed")
	@ResponseBody
	public NewsFeed addNewsFeed(@RequestBody NewsFeed newsFeed) 
	{
		return this.newsFeedService.addNewsFeed(newsFeed);
	}
	
	@GetMapping("/sparkairways/admin/admin-home/get-all-news-feed")
	@ResponseBody
	public List<NewsFeed> getAllNewsFeed()
	{
		return this.newsFeedService.getAllNewsFeed();
	}
	
	@PutMapping("/sparkairways/admin/admin-home/news-update/{newsId}")
	@ResponseBody
	public NewsFeed updateNewsFeed(@RequestBody NewsFeed newsFeed,@PathVariable("newsId") int newsId) 
	{
		return this.newsFeedService.updateNewsFeed(newsFeed, newsId);
	}
	
	@DeleteMapping("/sparkairways/admin/admin-home/delete-news/{newsId}")
	public ResponseEntity<HttpStatus> deleteCourse(@PathVariable int newsId) {
		try {
			this.newsFeedService.deleteNews(newsId);
			return new ResponseEntity<>(HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
}
