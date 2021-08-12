import React, { useEffect, useState } from "react";
import { Button, Form, Input } from "reactstrap";
import axios from "axios";
import base_url from "../api/bootapi";
import { toast } from "react-toastify";
import { InputGroup, InputGroupText, InputGroupAddon } from 'reactstrap';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

  form:{
    marginTop: theme.spacing(2),
  },
  cardclass:{
    padding: theme.spacing(2),
  },
  media: {
    height: 220,
  },
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
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

const AddFlight = () => {

  const classes = useStyles();

  useEffect(() => {
    document.title = "AddFlight";
  }, []);

  const [flight, setFlight] = useState({});
  //form handler function
  const handleForm = (e) => {
    console.log(flight);
    postDataToServer(flight);
    e.preventDefault();
  };

  // creating fuction to post data on server
  const postDataToServer = (data) => {
    axios
      .post(
        `${base_url}/sparkairways/admin/admin-home/add-flight-schedule`,
        data
      )
      .then(
        (response) => {
          console.log(response);
          toast.success("flights has been added sucessfully");
          setFlight({
            flight_id: "",
            airline: "",
            source: "",
            destination: "",
            business_seats: "",
            economy_seats: "",
            business_seat_cost: "",
            economy_seat_cost: "",
            arrival_time: "",
            departure_time: "",
            date: "",
          });
        },
        (error) => {
          console.log(error);
          toast.error("something went wrong");
        }
      );
  };

  return (
    // <Fragment>
    //   <h1 className="text-center my-4">Fill Airline Detail</h1>
      

      <div>
        <Form className={classes.form} onSubmit={handleForm}>
    <Grid container spacing={3}>
        <Grid item xs={1}>
        </Grid>
        <Grid item xs={10}>
            <Card className={classes.cardclass} style={{backgroundColor:'#DDDDFF'}}>

            <CardActionArea>
                <CardMedia className={classes.media} image="https://live.staticflickr.com/65535/48764060802_f4d4f052a2_o.jpg"/>
                <CardContent>
                    {/* <Typography gutterBottom variant="h5" component="h2" style={{textAlign:"center"}}>
                        ADD FLIGHT
                    </Typography> */}
                </CardContent>
            </CardActionArea>


            <Grid container spacing={3}>
            <Grid item xs={6}>
            <InputGroup>
            <InputGroupAddon addonType="prepend" style={{width:150}}>
            <InputGroupText style={{backgroundColor:'#5555FF', color:'white'}}>Airline Name</InputGroupText>
            </InputGroupAddon>
            <Input placeholder="SpiceJet" id="airline" 
              onChange={(e) => {
                setFlight({ ...flight, airline: e.target.value });
              }}
            />
        </InputGroup>
            </Grid>
            <Grid item xs={6}>
            <InputGroup>
            <InputGroupAddon addonType="prepend" style={{width:150}}>
            <InputGroupText style={{backgroundColor:'#5555FF', color:'white'}}>Date</InputGroupText>
            </InputGroupAddon>
            <Input placeholder="YYYY-MM-DD" id="date"
            onChange={(e) => {
              setFlight({ ...flight, date: e.target.value });
            }}
            />
        </InputGroup>
</Grid>
            </Grid>
  {/* ------------------------------------------------------ */}
            <Grid container spacing={3}>
            <Grid item xs={6}>
            <InputGroup>
            <InputGroupAddon addonType="prepend" style={{width:150}}>
            <InputGroupText style={{backgroundColor:'#5555FF', color:'white'}}>Source</InputGroupText>
            </InputGroupAddon>
            <Input placeholder="Bangalore" id="source"
            onChange={(e) => {
              setFlight({ ...flight, source: e.target.value });
            }}
            />
        </InputGroup>
            </Grid>
            <Grid item xs={6}>
            <InputGroup >
            <InputGroupAddon addonType="prepend" style={{width:150}}>
            <InputGroupText style={{backgroundColor:'#5555FF', color:'white'}}>Destination</InputGroupText>
            </InputGroupAddon>
            <Input placeholder="Mumbai" id="destination"
              onChange={(e) => {
                setFlight({ ...flight, destination: e.target.value });
              }}
            />
        </InputGroup>
            </Grid>
            </Grid>
{/* ---------------------------------------------------------------------------------- */}

        <Grid container spacing={3}>
            <Grid item xs={6}>
            <InputGroup>
            <InputGroupAddon addonType="prepend" style={{width:150}}>
            <InputGroupText style={{backgroundColor:'#5555FF', color:'white'}}>Business Seats</InputGroupText>
            </InputGroupAddon>
            <Input placeholder="170" id="business_seat"
            onChange={(e) => {
              setFlight({ ...flight, business_seats: e.target.value });
            }}
            />
        </InputGroup>
            </Grid>
            <Grid item xs={6}>
            <InputGroup >
            <InputGroupAddon addonType="prepend" style={{width:150}}>
            <InputGroupText style={{backgroundColor:'#5555FF', color:'white'}}>Economy Seats</InputGroupText>
            </InputGroupAddon>
            <Input placeholder="350" id="economy_seatsn"
            onChange={(e) => {
              setFlight({ ...flight, economy_seats: e.target.value });
            }}
            />
        </InputGroup>
            </Grid>
            </Grid>

{/* -------------------------------------------------------------------------------------- */}

<Grid container spacing={3}>
            <Grid item xs={6}>
            <InputGroup>
            <InputGroupAddon addonType="prepend" style={{width:150}}>
            <InputGroupText style={{backgroundColor:'#5555FF', color:'white'}}>Business Cost (Rs)</InputGroupText>
            </InputGroupAddon>
            <Input placeholder="4500" id="business_seat_cost"
            onChange={(e) => {
              setFlight({ ...flight, business_seat_cost: e.target.value });
            }}
            />
        </InputGroup>
            </Grid>
            <Grid item xs={6}>
            <InputGroup >
            <InputGroupAddon addonType="prepend" style={{width:150}}>
            <InputGroupText style={{backgroundColor:'#5555FF', color:'white'}}>Economy Cost (Rs)</InputGroupText>
            </InputGroupAddon>
            <Input placeholder="3200" id="economy_seat_cost"
            onChange={(e) => {
              setFlight({ ...flight, economy_seat_cost: e.target.value });
            }}
            />
        </InputGroup>
            </Grid>
            </Grid>

{/* -------------------------------------------------------------------------------------- */}

<Grid container spacing={3}>
            <Grid item xs={6}>
            <InputGroup>
            <InputGroupAddon addonType="prepend" style={{width:150}}>
            <InputGroupText style={{backgroundColor:'#5555FF', color:'white'}}>Arrival Time</InputGroupText>
            </InputGroupAddon>
            <Input placeholder="00:00:00" id="arrival_time"
            onChange={(e) => {
              setFlight({ ...flight, arrival_time: e.target.value });
            }}
            />
        </InputGroup>
            </Grid>
            <Grid item xs={6}>
            <InputGroup >
            <InputGroupAddon addonType="prepend" style={{width:150}}>
            <InputGroupText style={{backgroundColor:'#5555FF', color:'white'}}>Departure Time</InputGroupText>
            </InputGroupAddon>
            <Input placeholder="00:00:00" id="departure_time"
              onChange={(e) => {
                setFlight({ ...flight, departure_time: e.target.value });
              }}
            />
        </InputGroup>
            </Grid>
            </Grid>


       
<Grid container spacing={3}>
        <Grid item xs={10}>
        <InputGroup style={{justifyContent: 'center'}}>
            <Button type="submit" color="success" className="w-100">Add Flight</Button>{' '}
        </InputGroup>
        </Grid>
        
        <Grid item xs={2}>
        <InputGroup style={{justifyContent: 'center'}}>
            <Button type="reset" color="warning" className="w-100"
                onClick={() => {
                setFlight({
                  ...flight,
                  airline: "",
                  source: "",
                  destination: "",
                  business_seats: "",
                  economy_seats: "",
                  business_seat_cost: "",
                  economy_seat_cost: "",
                  arrival_time: "",
                  departure_time: "",
                  date: "",
              });
            }}
            >
            Clear
            </Button>{' '}
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

export default AddFlight;
