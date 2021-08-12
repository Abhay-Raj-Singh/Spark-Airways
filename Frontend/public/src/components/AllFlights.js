import React, { useState, useEffect } from "react";
import Flight from "./Flight";
//import { Button } from "reactstrap";
import base_url from "../api/bootapi";
import axios from "axios";
import { toast } from "react-toastify";

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
          toast.success("Flights has been loaded", {
            position: "bottom-center",
          });
          setFlights(response.data);
        },
        (error) => {
          //for error
          console.log(error);
          toast.error("something went wrong", {
            position: "bottom-center",
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

  return (
    <div className="text-center">
      <h1>All Flight</h1>
      <p>List of flights are as follows</p>
      {flights.length > 0
        ? flights.map((item) => (
            <Flight key={item.flight_id} flight={item} update={updateFlights} />
          ))
        : "No flights"}
    </div>
  );
};

export default AllFlights;
