import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import { InputGroup, InputGroupText, InputGroupAddon, Input } from "reactstrap";
import { Button } from "reactstrap";
import { toast } from "react-toastify";

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

const Login = () => {

  useEffect(() => {
    document.title = "Admin Login";
  }, []);

  const [admin_name, setadmin_name] = useState("");
  const [password, setPassword] = useState("");
  const [admin, setAdmin] = useState();

  useEffect(() => {
    const loggedInUser = localStorage.getItem("admin");
    if (loggedInUser) {
      const foundAdmin = JSON.stringify(loggedInUser);
      setAdmin(foundAdmin);
      toast.success("🦄 Welcome Admin", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }, []);

  const classes = useStyles();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const admin = { admin_name, password };
    // send the username and password to the server
    const response = await axios.post(
      "http://localhost:9090/sparkairways/admin",
      admin
    );
    if (response !== null) {
      toast.success("🦄 Welcome Admin", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      toast.error("🦄 Invalid Admin", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    // set the state of the admin
    setAdmin(response.data);
    // store the admin in localStorage
    localStorage.setItem("admin", response.data.admin_name);
    console.log(response.data);
  };

  // if there's a admin show the message below
  const history = useHistory();
  if (admin) {
    history.push("/addFlight");
  }

  return (
    <div>
      <br />
      <br />
      <form className={classes.form} onSubmit={handleSubmit}>
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
                  image="https://i2.wp.com/airwaysmag.com/wp-content/uploads/2020/10/7562241548_d26da8c6d5_o.jpg?fit=4256%2C2832&ssl=1"
                />
              </CardActionArea>
              <br />

              <InputGroup>
                <InputGroupAddon className="mx-2" addonType="prepend" style={{ width: 120 }}>
                  <InputGroupText
                    style={{ backgroundColor: "#5555FF", color: "white" }}
                  >
                    Admin Name
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  value={admin_name}
                  className="mx-4 text-center"
                  required="required"
                  placeholder="Enter admin name here.."
                  onChange={({ target }) => setadmin_name(target.value)}
                  fullwidth="true"
                  id="admin_name"
                />
              </InputGroup>
              <br />

              <InputGroup>
                <InputGroupAddon  className="mx-2" addonType="prepend" style={{ width: 120 }}>
                  <InputGroupText className="text-center" 
                    style={{ backgroundColor: "#5555FF", color: "white",  }}
                  >
                    Password
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                className="mx-4 text-center"
                  type="password"
                  required="required"
                  value={password}
                  placeholder="Enter password here.."
                  onChange={({ target }) => setPassword(target.value)}
                  width="50%"
                  id="password"
                />
              </InputGroup>
              <br />

              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <InputGroup style={{ justifyContent: "center" }}>
                    <Button color="success" className="w-30" type="submit">
                      Admin Login
                    </Button>{" "}
                  </InputGroup>
                </Grid>
              </Grid>
            </Card>
          </Grid>
        </Grid>
      </form>
      <br />
    </div>
  );
};
export default Login;
