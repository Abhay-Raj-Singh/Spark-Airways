import axios from "axios";
import React from "react";
import { Button,Table  } from "reactstrap";
import base_url from "../api/bootapi";
import { toast } from "react-toastify";

const News = ({ news, update }) => {
  const deleteNews = (news_id) => {
    axios
      .delete(
        `${base_url}/sparkairways/admin/admin-home/delete-news/${news_id}`
      )
      .then(
        (response) => {
          console.log(response);
          toast.success("news deleted");
          update(news_id);
        },
        (error) => {
          console.log(error);
          toast.error("news not deleted.Something went wrong");
        }
      );
  };

  const updateNews = (news_id) => {
    axios
      .fet(`${base_url}/sparkairways/admin/admin-home/news-update/${news_id}`)
      .then(
        (response) => {
          console.log(response);
          toast.success("news updated");
          update(news_id);
        },
        (error) => {
          console.log(error);
          toast.error("news not updated.Something went wrong");
        }
      );
  };


  return (
    <Table style={{backgroundColor:'#DDDDFF'}}>
      {/* <thead>
        <tr>
          <th style={{width:200}}>Date</th>
          <th style={{width:800}}>News</th>
          <th style={{width:100}}></th>
          <th style={{width:100}}></th>
        </tr>
      </thead> */}
      <tbody>
        <tr>
          <td style={{width:200}}>{news.date}</td>
          <td style={{width:800}}>{news.news}</td>
          <td style={{width:100}}><Button color="warning" onClick={() => {updateNews(news.news_id);}} style={{width:'100%'}}>Update</Button></td>
          <td style={{width:100}}><Button color="danger" onClick={() => {deleteNews(news.news_id);}}  style={{width:'100%'}}>Delete</Button></td>
        </tr>
      </tbody>
    </Table>
  );
};

export default News;
