import React, { useState, useEffect } from "react";
import Flight from "./Flight";
import base_url from "../api/bootapi";
import axios from "axios";
import { toast } from "react-toastify";
import { Button, Table } from "reactstrap";
import { useHistory } from "react-router-dom";

const AllFlights = () => {
  useEffect(() => {
    document.title = "All Flights";
  }, []);

  //function to call server:
  const getAllFlightsFromServer = () => {
    axios
      .get(`${base_url}/sparkairways/admin/admin-home/get-all-flight-schedule`)
      .then(
        (response) => {
          console.log(response.data);
          toast.success("🦄 All Flights Loading...", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          setFlights(response.data);
        },
        (error) => {
          //for error
          console.log(error);
          toast.error("🦄 Something Wrong...", {
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
    getAllFlightsFromServer();
  }, []);

  const [flights, setFlights] = useState([]);

  const updateFlights = (flight_id) => {
    setFlights(flights.filter((c) => c.flight_id !== flight_id));
  };

  let history = useHistory();

  const addFlight = () => {
    history.push({
      pathname: "/addFlight",
    });
  };

  return (
    <div className="my-4">
      <Button
        color="success"
        onClick={() => {
          addFlight();
        }}
        style={{ width: "20%" }}
      >
        Add Flight
      </Button>
      <Table
        className="text-center my-4"
        style={{ backgroundColor: "#FFFFDD", textAlign: "center" }}
      >
        <thead>
          <tr>
            <th style={{ width: 100 }}>Airline</th>
            <th style={{ width: 100 }}>Date</th>
            <th style={{ width: 100 }}>Source</th>
            <th style={{ width: 100 }}>Destination</th>
            <th style={{ width: 100 }}>Business(Rs)</th>
            <th style={{ width: 100 }}>Economy(Rs)</th>
            <th style={{ width: 100 }}>Arrival</th>
            <th style={{ width: 100 }}>Departure</th>
            <th style={{ width: 100 }}>Update</th>
            <th style={{ width: 100 }}>Delete</th>
          </tr>
        </thead>
      </Table>
      {flights.length > 0 ? (
        flights.map((item) => (
          <Flight key={item.flight_id} flight={item} update={updateFlights} />
        ))
      ) : (
        <h3 className="text-center">Currently, No Flights are Scheduled</h3>
      )}
    </div>
  );
};

export default AllFlights;
