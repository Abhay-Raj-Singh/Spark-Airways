import React, { useEffect, useState } from "react";
import News from "./News";
import { Button, Table } from "reactstrap";
import base_url from "../api/bootapi";
import axios from "axios";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

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
          toast.success("🦄 All News Loading...", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          setnews(response.data);
        },
        (error) => {
          //for error
          console.log(error);
          toast.error("🦄 Error...", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
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

  let history = useHistory();

  const addNews = () => {
    history.push({
      pathname: "/addNews",
    });
  };

  return (
    <div className="my-4">
      <Button
        color="success"
        onClick={() => {
          addNews();
        }}
        style={{ width: "20%" }}
      >
        Add News
      </Button>
      <Table
        className="text-center my-4"
        style={{ backgroundColor: "#FFFFDD" }}
      >
        <thead>
          <tr>
            <th required style={{ width: 200 }}>
              Date
            </th>
            <th required style={{ width: 800 }}>
              News
            </th>
            <th style={{ width: 100 }}>Update</th>
            <th style={{ width: 100 }}>Delete</th>
          </tr>
        </thead>
      </Table>

      {news.length > 0 ? (
        news.map((item) => (
          <News key={item.news_id} news={item} update={updateNews} />
        ))
      ) : (
        <h3 className="text-center">No News Currently</h3>
      )}
    </div>
  );
};

export default AllNews;
