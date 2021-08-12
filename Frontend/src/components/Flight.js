import axios from "axios";
import React from "react";
import { Button } from "reactstrap";
import base_url from "../api/bootapi";
import { toast } from "react-toastify";
import { Table } from "reactstrap";
import DeleteForeverTwoToneIcon from "@material-ui/icons/DeleteForeverTwoTone";
import UpdateIcon from "@material-ui/icons/Update";
import { useHistory } from "react-router-dom";

const Flight = ({ flight, update }) => {
  const deleteFlight = (flight_id) => {
    axios
      .delete(
        `${base_url}/sparkairways/admin/admin-home/delete-flight/${flight_id}`
      )
      .then(
        (response) => {
          console.log(response);
          toast.success("🦄 Flight Deleted", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          update(flight_id);
        },
        (error) => {
          console.log(error);
          toast.error("🦄 Something Wrong", {
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

  let history = useHistory();

  const updateFlight = (flight_id) => {
    localStorage.setItem("idForFlightUpdate", flight_id);
    history.push({
      pathname: "/updateFlight",
    });
  };

  return (
    <Table style={{ backgroundColor: "#DDDDFF" }}>
      <tbody>
        <tr className="text-center">
          <td className="text-center" style={{ width: 100 }}>
            {flight.airline}
          </td>
          <td className="text-center" style={{ width: 100 }}>
            {flight.date}
          </td>
          <td className="text-center" style={{ width: 100 }}>
            {flight.source}
          </td>
          <td className="text-center" style={{ width: 100 }}>
            {flight.destination}
          </td>
          <td className="text-center" style={{ width: 100 }}>
            {flight.business_seat_cost}
          </td>
          <td className="text-center" style={{ width: 100 }}>
            {flight.economy_seat_cost}
          </td>
          <td className="text-center" style={{ width: 100 }}>
            {flight.arrival_time}
          </td>
          <td className="text-center" style={{ width: 100 }}>
            {flight.departure_time}
          </td>
          <td style={{ width: 100 }}>
            <Button
              color="warning"
              onClick={() => {
                updateFlight(flight.flight_id);
              }}
              style={{ width: "80%" }}
            >
              <UpdateIcon />
            </Button>
          </td>
          <td style={{ width: 100 }}>
            <Button
              color="danger"
              onClick={() => {
                deleteFlight(flight.flight_id);
              }}
              style={{ width: "80%" }}
            >
              <DeleteForeverTwoToneIcon />
            </Button>
          </td>
        </tr>
      </tbody>
    </Table>
  );
};

export default Flight;
