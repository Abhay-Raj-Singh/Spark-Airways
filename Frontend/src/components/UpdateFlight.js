import React, { useEffect, useState } from "react";
import { Button, Form, Input } from "reactstrap";
import axios from "axios";
import base_url from "../api/bootapi";
import { toast } from "react-toastify";
import { InputGroup, InputGroupText, InputGroupAddon } from "reactstrap";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
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

const UpdateFlight = () => {
  const classes = useStyles();

  useEffect(() => {
    document.title = "UpdateFlight";
  }, []);

  const [flight, setFlight] = useState({});

  const handleForm = (e) => {
    e.preventDefault();
  };

  const updateFlight = () => {
    axios
      .put(
        `${base_url}/sparkairways/admin/admin-home/update-flight-schedule/` +
          localStorage.getItem("idForFlightUpdate"),
        flight
      )
      .then(
        (response) => {
          console.log(response);
          toast.success("Flight updated");
        },
        (error) => {
          console.log(error);
          toast.error("Flight not updated.Something went wrong");
        }
      );
  };

  var name = flight.source;
  console.log(name);

  return (
    <div>
      <Form onSubmit={handleForm}>
        <Grid container spacing={3}>
          <Grid item xs={1}></Grid>
          <Grid item xs={10}>
            <Card
              className={classes.cardclass}
              style={{ backgroundColor: "#DDDDFF" }}
            >
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://live.staticflickr.com/65535/48764060802_f4d4f052a2_o.jpg"
                />
                <CardContent></CardContent>
              </CardActionArea>

              <Grid container spacing={3}>
                <Grid item xs={6}>
                  <InputGroup>
                    <InputGroupAddon addonType="prepend" style={{ width: 150 }}>
                      <InputGroupText
                        style={{ backgroundColor: "#5555FF", color: "white" }}
                      >
                        Airline Name
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      required="required"
                      placeholder="Enter airline here.."
                      id="airline"
                      onChange={(e) => {
                        setFlight({ ...flight, airline: e.target.value });
                      }}
                    />
                  </InputGroup>
                </Grid>
                <Grid item xs={6}>
                  <InputGroup>
                    <InputGroupAddon addonType="prepend" style={{ width: 150 }}>
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
                    <InputGroupAddon addonType="prepend" style={{ width: 150 }}>
                      <InputGroupText
                        style={{ backgroundColor: "#5555FF", color: "white" }}
                      >
                        Source
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      required="required"
                      placeholder="Enter source here.."
                      id="source"
                      onChange={(e) => {
                        setFlight({ ...flight, source: e.target.value });
                      }}
                    />
                  </InputGroup>
                </Grid>
                <Grid item xs={6}>
                  <InputGroup>
                    <InputGroupAddon addonType="prepend" style={{ width: 150 }}>
                      <InputGroupText
                        style={{ backgroundColor: "#5555FF", color: "white" }}
                      >
                        Destination
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      required="required"
                      placeholder="Enter destination here.."
                      id="destination"
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
                    <InputGroupAddon addonType="prepend" style={{ width: 150 }}>
                      <InputGroupText
                        style={{ backgroundColor: "#5555FF", color: "white" }}
                      >
                        Business Seats
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      required="required"
                      placeholder="Enter no. of seats.."
                      id="business_seat"
                      onChange={(e) => {
                        setFlight({
                          ...flight,
                          business_seats: e.target.value,
                        });
                      }}
                    />
                  </InputGroup>
                </Grid>
                <Grid item xs={6}>
                  <InputGroup>
                    <InputGroupAddon addonType="prepend" style={{ width: 150 }}>
                      <InputGroupText
                        style={{ backgroundColor: "#5555FF", color: "white" }}
                      >
                        Economy Seats
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      required="required"
                      placeholder="Enter no. of seats.."
                      id="economy_seatsn"
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
                    <InputGroupAddon addonType="prepend" style={{ width: 150 }}>
                      <InputGroupText
                        style={{ backgroundColor: "#5555FF", color: "white" }}
                      >
                        Business Cost (Rs)
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      required="required"
                      placeholder="Enter seat cost here in Rs."
                      id="business_seat_cost"
                      onChange={(e) => {
                        setFlight({
                          ...flight,
                          business_seat_cost: e.target.value,
                        });
                      }}
                    />
                  </InputGroup>
                </Grid>
                <Grid item xs={6}>
                  <InputGroup>
                    <InputGroupAddon addonType="prepend" style={{ width: 150 }}>
                      <InputGroupText
                        style={{ backgroundColor: "#5555FF", color: "white" }}
                      >
                        Economy Cost (Rs)
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      required="required"
                      placeholder="Enter seat cost here in Rs."
                      id="economy_seat_cost"
                      onChange={(e) => {
                        setFlight({
                          ...flight,
                          economy_seat_cost: e.target.value,
                        });
                      }}
                    />
                  </InputGroup>
                </Grid>
              </Grid>

              {/* -------------------------------------------------------------------------------------- */}

              <Grid container spacing={3}>
                <Grid item xs={6}>
                  <InputGroup>
                    <InputGroupAddon addonType="prepend" style={{ width: 150 }}>
                      <InputGroupText
                        style={{ backgroundColor: "#5555FF", color: "white" }}
                      >
                        Arrival Time
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      required="required"
                      placeholder="00:00:00"
                      id="arrival_time"
                      onChange={(e) => {
                        setFlight({ ...flight, arrival_time: e.target.value });
                      }}
                    />
                  </InputGroup>
                </Grid>
                <Grid item xs={6}>
                  <InputGroup>
                    <InputGroupAddon addonType="prepend" style={{ width: 150 }}>
                      <InputGroupText
                        style={{ backgroundColor: "#5555FF", color: "white" }}
                      >
                        Departure Time
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      required="required"
                      placeholder="00:00:00"
                      id="departure_time"
                      onChange={(e) => {
                        setFlight({
                          ...flight,
                          departure_time: e.target.value,
                        });
                      }}
                    />
                  </InputGroup>
                </Grid>
              </Grid>

              <Grid container spacing={3}>
                <Grid item xs={10}>
                  <InputGroup style={{ justifyContent: "center" }}>
                    <Button
                      type="submit"
                      color="success"
                      className="w-100"
                      onClick={() => {
                        updateFlight(flight.flight_id);
                      }}
                    >
                      Update News
                    </Button>
                  </InputGroup>
                </Grid>

                <Grid item xs={2}>
                  <InputGroup style={{ justifyContent: "center" }}>
                    <Button
                      type="reset"
                      color="warning"
                      className="w-100"
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

export default UpdateFlight;
