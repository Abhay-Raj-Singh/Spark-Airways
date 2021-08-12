import React, { useEffect, useState } from "react";
import { Button, Form, Input } from "reactstrap";
import axios from "axios";
import base_url from "../api/bootapi";
import { toast } from "react-toastify";
import { InputGroup, InputGroupText, InputGroupAddon } from "reactstrap";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  cardclass: {
    padding: theme.spacing(2),
  },
  media: {
    height: 220,
  },
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const UpdateNews = () => {
  const classes = useStyles();

  useEffect(() => {
    document.title = "UpdateNews";
  }, []);

  const [news, setnews] = useState({});

  const handleForm = (e) => {
    e.preventDefault();
  };

  const updateNews = () => {
    axios
      .put(
        `${base_url}/sparkairways/admin/admin-home/news-update/` +
          localStorage.getItem("idForNewsUpdate"),
        news
      )
      .then(
        (response) => {
          console.log(response);
          toast.success("News Updated");
          setnews({ ...news, date: "", news: "" });
        },
        (error) => {
          console.log(error);
          toast.error("News not updated.Something went wrong");
        }
      );
  };

  return (
    <div>
      <br />
      <Form onSubmit={handleForm}>
        <Grid container spacing={3}>
          <Grid item xs={3}></Grid>
          <Grid item xs={6}>
            <Card
              className={classes.cardclass}
              style={{ backgroundColor: "#DDDDFF" }}
            >
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://wallpaperaccess.com/full/2112553.jpg"
                />
              </CardActionArea>
              <br />

              <InputGroup>
                <InputGroupAddon addonType="prepend" style={{ width: 100 }}>
                  <InputGroupText
                    style={{ backgroundColor: "#5555FF", color: "white" }}
                  >
                    Date
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  required="required"
                  placeholder="YYYY-MM-DD"
                  id="date"
                  onChange={(e) => {
                    setnews({ ...news, date: e.target.value });
                  }}
                />
              </InputGroup>
              <br />

              <InputGroup>
                <InputGroupAddon addonType="prepend" style={{ width: 100 }}>
                  <InputGroupText
                    style={{ backgroundColor: "#5555FF", color: "white" }}
                  >
                    News
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  required="required"
                  type="textarea"
                  name="text"
                  id="news"
                  placeholder="Enter news here"
                  style={{ height: 100 }}
                  onChange={(e) => {
                    setnews({ ...news, news: e.target.value });
                  }}
                />
              </InputGroup>
              <br />

              <Grid container spacing={3}>
                <Grid item xs={8}>
                  <InputGroup style={{ justifyContent: "center" }}>
                    <Button
                      type="submit"
                      color="success"
                      className="w-100"
                      onClick={() => {
                        updateNews(news.news_id);
                      }}
                    >
                      Update News
                    </Button>
                  </InputGroup>
                </Grid>

                <Grid item xs={4}>
                  <InputGroup style={{ justifyContent: "center" }}>
                    <Button
                      type="reset"
                      color="warning"
                      className="w-100"
                      onClick={() => {
                        setnews({ ...news, date: "", news: "" });
                      }}
                    >
                      Clear
                    </Button>{" "}
                  </InputGroup>
                </Grid>
              </Grid>
            </Card>
          </Grid>
        </Grid>
      </Form>
    </div>
  );
};

export default UpdateNews;
