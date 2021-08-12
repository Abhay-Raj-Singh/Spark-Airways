import axios from "axios";
import React from "react";
import {Button} from "reactstrap";
import base_url from "../api/bootapi";
import { toast } from "react-toastify";
import { Table  } from "reactstrap";

const Flight = ({ flight, update }) => {
  const deleteFlight = (flight_id) => {
    axios
      .delete(
        `${base_url}/sparkairways/admin/admin-home/delete-flight/${flight_id}`
      )
      .then(
        (response) => {
          console.log(response);
          toast.success("flights deleted");
          update(flight_id);
        },
        (error) => {
          console.log(error);
          toast.error("flights not deleted.Something went wrong");
        }
      );
  };

  return (
    <Table style={{backgroundColor:'#DDDDFF'}}>
      <tbody>
        <tr>
          <td style={{width:100}}>{flight.airline}</td>
          <td style={{width:100}}>{flight.date}</td>
          <td style={{width:100}}>{flight.source}</td>
          <td style={{width:100}}>{flight.destination}</td>
          <td style={{width:100}}>{flight.business_seat_cost}</td>
          <td style={{width:100}}>{flight.economy_seat_cost}</td>
          <td style={{width:100}}>{flight.arrival_time}</td>
          <td style={{width:100}}>{flight.departure_time}</td>
          
          <td style={{width:100}}><Button color="warning" style={{width:'100%'}}>Update</Button></td>
          <td style={{width:100}}><Button color="danger" onClick={() => {deleteFlight(flight.flight_id);}} style={{width:'100%'}}>Delete</Button></td>
        </tr>
      </tbody>
    </Table>
  );
};

export default Flight;
