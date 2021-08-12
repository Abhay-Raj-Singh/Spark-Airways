import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "reactstrap";
import Grid from "@material-ui/core/Grid";
import { Button } from "reactstrap";
import SparkAirwaysLogo from "../spark-airways-logo.png";
import SparkAirwaysLogo1 from "../sparkairways1.gif";
import { useHistory } from "react-router-dom";

const Header = () => {
  const history = useHistory();

  function logout() {
    localStorage.clear();
    window.location.reload();
    history.push("/");
  }

  const loggedInUser = localStorage.getItem("admin");
  if (loggedInUser) {
    return (
      <div style={{ backgroundColor: "#BBBBFF" }}>
        <Navbar className="navbar navbar-expand-sm">
          <Grid className="mx-4">
            <img src={SparkAirwaysLogo1} width={50} height="45" alt="" />
            <img src={SparkAirwaysLogo} width={200} height="30" alt="" />
          </Grid>
          <Grid
            className="navbar-nav"
            style={{
              position: "absolute",
              right: "50px",
            }}
          >
            <Grid className="mx-2 my-2 nav-item">
              <Link className="mx-2" tag="a" to="/viewFlights" action="true">
                <Button color="primary" outline style={{ width: "100%" }}>
                  <b>View Flights</b>
                </Button>
              </Link>
            </Grid>

            <Grid className="mx-2 my-2 nav-item">
              <Link className="mx-2" tag="a" to="/viewNews" action="true">
                <Button color="primary" outline style={{ width: "100%" }}>
                  <b>View News</b>
                </Button>
              </Link>
            </Grid>

            <Grid className="mx-2 my-2 nav-item">
              <Link
                className="mx-2"
                tag="a"
                to="/"
                action="true"
                exact="true"
                activestyle="true"
              >
                <Button
                  color="danger"
                  onClick={logout}
                  outline
                  style={{ width: "100%" }}
                >
                  <b>Logout</b>
                </Button>
              </Link>
            </Grid>
          </Grid>
        </Navbar>
      </div>
    );
  } else {
    return (
      <div style={{ backgroundColor: "#BBBBFF" }}>
        <Navbar>
          <Grid className="mx-4">
            <img src={SparkAirwaysLogo1} width={50} height="45" alt="" />
            <img src={SparkAirwaysLogo} width={200} height="30" alt="" />
          </Grid>
          <Grid className="mx-4 my-2">
            <Link className="mx-2" tag="a" to="/" action="true">
              <Button color="primary" outline style={{ width: "100%" }}>
                <b>Admin Login</b>
              </Button>
            </Link>
          </Grid>
        </Navbar>
      </div>
    );
  }
};

export default Header;
