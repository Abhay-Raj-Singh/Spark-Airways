import React from "react";
import { Link } from "react-router-dom";
import { Navbar} from "reactstrap";
import Grid from '@material-ui/core/Grid';
import { Button } from 'reactstrap';


function Header({ name, title }) {
  const handleLogout = () => {
    localStorage.clear();
  };

  const loggedInUser = localStorage.getItem("admin");
  if (loggedInUser) {
    return (
      <div>
        <Navbar color="primary"  >
        <Grid className="mx-2" container spacing={3}>
        <Grid item xs={2}>

        </Grid>
        <Grid item xs={2}>
        <Button color="warning" outline style={{width:'100%'}}>
            <Link className="text-center mx-2 " tag="a" to="/addFlight" style={{color:"white"}} action="true">
              Add Flight
            </Link>
            </Button>
        </Grid>
        <Grid item xs={2}>
        <Button color="warning" outline style={{width:'100%'}}>
            <Link className="text-center mx-2" tag="a" to="/viewFlight" style={{color:"white"}} action="true">
              View Flights
            </Link>
            </Button>
        </Grid>
        <Grid item xs={2}>
        <Button color="warning" outline style={{width:'100%'}}>
            <Link className=" mx-2" tag="a" to="/addNews" style={{color:"white"}} action="true">
              Add News
            </Link>
            </Button>
        </Grid>
        <Grid item xs={2}>
           
        <Button color="warning" outline style={{width:'100%'}}>
            <Link className="mx-2" tag="a" to="/viewNews" style={{color:"white"}} action="true">
              View News
            </Link>
            </Button>
        </Grid>
        <Grid item xs={2}>
          
        <Button color="danger" outline style={{width:'100%'}}>
            <Link className="mx-2" tag="a" to="/" action="true" onClick={handleLogout} exact="true"  style={{color:"white"}} activestyle="true">
              Logout
            </Link>
            </Button>
      
        </Grid>
        </Grid>
        </Navbar>
      </div>
    );
  }else {
    return (
      <div>
      <Navbar color="primary">
        <h4 activestyle="true">
          <Link className="text-center mx-2 " tag="a" to="/" style={{color:"white"}} action="true">
            Admin Login
          </Link>
          </h4>
      </Navbar>
      </div>
    );
  };
};

export default Header;
