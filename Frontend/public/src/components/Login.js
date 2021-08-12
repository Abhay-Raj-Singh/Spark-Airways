import React, { useState, useEffect } from "react";
import axios from "axios";
// import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import { InputGroup, InputGroupText, InputGroupAddon, Input } from "reactstrap";
import { Button } from "reactstrap";

const useStyles = makeStyles((theme) => ({
  cardclass: {
    padding: theme.spacing(2),
  },

  form: {
    marginTop: theme.spacing(10),
  },

  media: {
    height: 220,
  },
  root: {
    "& > *": {
      margin: theme.spacing(1),
      // width: '25ch',
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
  const [admin_name, setadmin_name] = useState("");
  const [password, setPassword] = useState("");
  const [admin, setAdmin] = useState();

  useEffect(() => {
    const loggedInAdmin = localStorage.getItem("admin");
    if (loggedInAdmin) {
      const foundAdmin = JSON.parse(loggedInAdmin);

      setAdmin(foundAdmin);
      // toast.success("flights has been added sucessfully");
    }
  }, []);

  const classes = useStyles();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const admin = { admin_name, password };
    // send the adminname and password to the server
    const response = await axios.post(
      "http://localhost:9090/sparkairways/admin",
      admin
    );
    // set the state of the admin
    setAdmin(response.data);
    // store the admin in localStorage
    localStorage.setItem("admin", response.data.admin_id);
    console.log(response.data);
    // window.location.reload(false);
  };

  // if there's a admin show the message below
  const history = useHistory();
  if (admin) {
    // toast.success("flights has been added sucessfully");
    history.push("/addFlight");
  }

  return (
    <div>
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
                <InputGroupAddon addonType="prepend" style={{ width: 200 }}>
                  <InputGroupText
                    style={{ backgroundColor: "#5555FF", color: "white" }}
                  >
                    Admin Name
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  value={admin_name}
                  placeholder="Enter Admin Name Here"
                  onChange={({ target }) => setadmin_name(target.value)}
                  fullwidth="true"
                  id="admin_id"
                />
              </InputGroup>
              <br />

              <InputGroup>
                <InputGroupAddon addonType="prepend" style={{ width: 200 }}>
                  <InputGroupText
                    style={{ backgroundColor: "#5555FF", color: "white" }}
                  >
                    Password
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  type="password"
                  value={password}
                  placeholder="Password"
                  onChange={({ target }) => setPassword(target.value)}
                  fullwidth="true"
                  id="password"
                />
              </InputGroup>
              <br />

              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <InputGroup style={{ justifyContent: "center" }}>
                    <Button color="success" className="w-100" type="submit">
                      {/* className={classes.submit} */}
                      Admin Login
                    </Button>{" "}
                  </InputGroup>
                </Grid>
              </Grid>
            </Card>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};
export default Login;
