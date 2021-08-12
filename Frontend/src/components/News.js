import axios from "axios";
import React from "react";
import { Button, Table } from "reactstrap";
import base_url from "../api/bootapi";
import { toast } from "react-toastify";
import DeleteForeverTwoToneIcon from "@material-ui/icons/DeleteForeverTwoTone";
import UpdateIcon from "@material-ui/icons/Update";
import { useHistory } from "react-router-dom";

const News = ({ news, update }) => {
  const deleteNews = (news_id) => {
    axios
      .delete(
        `${base_url}/sparkairways/admin/admin-home/delete-news/${news_id}`
      )
      .then(
        (response) => {
          console.log(response);
          toast.success("🦄 News Deleted", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          update(news_id);
        },
        (error) => {
          console.log(error);
          toast.error("🦄 Something Wrong", {
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

  let history = useHistory();

  const updateNews = (news_id) => {
    localStorage.setItem("idForNewsUpdate", news_id);
    history.push({
      pathname: "/updateNews",
    });
  };

  return (
    <Table style={{ backgroundColor: "#DDDDFF" }}>
      <tbody>
        <tr className="text-center">
          <td style={{ width: 200 }}>{news.date}</td>
          <td style={{ width: 800 }}>{news.news}</td>
          <td style={{ width: 100 }}>
            <Button
              color="warning"
              onClick={() => {
                updateNews(news.news_id);
              }}
              style={{ width: "100%" }}
            >
              <UpdateIcon />
            </Button>
          </td>
          <td style={{ width: 100 }}>
            <Button
              color="danger"
              onClick={() => {
                deleteNews(news.news_id);
              }}
              style={{ width: "100%" }}
            >
              <DeleteForeverTwoToneIcon />
            </Button>
          </td>
        </tr>
      </tbody>
    </Table>
  );
};

export default News;
