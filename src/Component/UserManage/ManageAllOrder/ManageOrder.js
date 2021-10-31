import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Fab } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import "./Manage.css";
import axios from "axios";
import { Link } from "react-router-dom";

const ManageOrder = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("https://fathomless-earth-27248.herokuapp.com/tour")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  //delet api call
  const deleteService = (id) => {
    let result = window.confirm("Are you sure you want to delete?");
    if (result) {
      fetch(`https://fathomless-earth-27248.herokuapp.com/tour/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("deleted successfully");
            const remainingUsers = services.filter(
              (service) => service._id !== id
            );
            setServices(remainingUsers);
          }
        });
    }
  };

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));
  return (
    <div>
      <TableContainer component={"div"} className="list-container">
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Events Name</StyledTableCell>
              <StyledTableCell align="right">Destination</StyledTableCell>
              <StyledTableCell align="right">Price</StyledTableCell>
              <StyledTableCell align="right">Traveler</StyledTableCell>
              <StyledTableCell align="right">Duration</StyledTableCell>
              <StyledTableCell align="right">Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {services.map((service) => (
              <StyledTableRow key={service._id}>
                <StyledTableCell scope="row">{service.name}</StyledTableCell>
                <StyledTableCell align="right">
                  {service.address}
                </StyledTableCell>
                <StyledTableCell align="right">{service.price}</StyledTableCell>
                <StyledTableCell align="right">{service.id}</StyledTableCell>
                <StyledTableCell align="right">{service.stay}</StyledTableCell>
                <StyledTableCell align="right">
                  <Link to={`/update/${service._id}`}>
                    <Fab
                      component={"span"}
                      size="small"
                      color="secondary"
                      aria-label="edit"
                      title="edit"
                    >
                      <EditIcon />
                    </Fab>
                  </Link>
                  <Fab
                    component={"span"}
                    size="small"
                    sx={{ mr: 1, ml: 2 }}
                    color="secondary"
                    aria-label="delete"
                    title="delete"
                    onClick={() => {
                      deleteService(service._id);
                    }}
                  >
                    <DeleteIcon />
                  </Fab>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ManageOrder;
