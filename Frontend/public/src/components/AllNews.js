import React, { useEffect, useState } from "react";
import News from "./News";
//import { Button } from "reactstrap";
import base_url from "../api/bootapi";
import axios from "axios";
import { toast } from "react-toastify";

const AllNews = () => {
  useEffect(() => {
    document.title = "All News";
  }, []);

  //function to call server:
  const getAllNewsFromServer = () => {
    axios
      .get(`${base_url}/sparkairways/admin/admin-home/get-all-news-feed`)
      .then(
        (response) => {
          console.log(response.data);
          toast.success("News has been loaded", {
            position: "bottom-center",
          });
          setnews(response.data);
        },
        (error) => {
          //for error
          console.log(error);
          toast.error("something went wrong", {
            position: "bottom-center",
          });
        }
      );
  };

  // calling loading flight function
  useEffect(() => {
    getAllNewsFromServer();
  }, []);

  const [news, setnews] = useState([]);

  const updateNews = (news_id) => {
    setnews(news.filter((c) => c.news_id !== news_id));
  };

  return (
    <div className="text-center my-4">
      <h1>All News</h1>
      <p>List of newsfeed are as follows</p>
      {news.length > 0
        ? news.map((item) => (
            <News
              key={item.news_id}
              news={item}
              update={updateNews}
            />
          ))
        : "No news"}
    </div>
  );
};

export default AllNews;
