import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "../AddNewService/Addservice.css";

const UpdateService = () => {
  const { id } = useParams();
  const [updateService, setUpdateService] = useState({});

  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .put(
        `https://fathomless-earth-27248.herokuapp.com/tour/${id}`,
        updateService
      )
      .then((response) => {
        console.log(response);
        if (response.data.insertedId) {
          alert("successfully added");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    fetch(`https://fathomless-earth-27248.herokuapp.com/tour/${id}`)
      .then((res) => res.json())
      .then((data) => setUpdateService(data));
  }, []);

  const handlerChange = (e) => {
    const newUpdate = { ...updateService, [e.target.name]: e.target.value };
    setUpdateService(newUpdate);
  };
  return (
    <div className="add-service">
      <h1>UPDATE SERVICE</h1>
      <form onSubmit={onSubmit}>
        <div className="form-container">
          <div className="form-input">
            <label>Tour Title:</label>
            <input
              type="text"
              name="name"
              placeholder="Tour Title"
              value={updateService.name || ""}
              onChange={handlerChange}
            />
          </div>
          <div className="form-input">
            <label>Tour Destination:</label>
            <input
              type="text"
              name="address"
              placeholder="ex: Sajek velly"
              value={updateService.address || ""}
              onChange={handlerChange}
            />
          </div>
          <div className="form-input">
            <label>Description</label>
            <textarea
              rows="4"
              cols="50"
              type="text"
              name="description"
              placeholder="sajek velly is most beautiful....."
              value={updateService.description || ""}
              onChange={handlerChange}
            />
          </div>
          <div className="form-input">
            <label>Price:</label>
            <input
              type="number"
              name="price"
              placeholder="2000"
              value={updateService.price || ""}
              onChange={handlerChange}
            />
          </div>
          <div className="form-input">
            <label>Image Url:</label>
            <input
              type="text"
              name="img"
              placeholder="your image url"
              value={updateService.img || ""}
              onChange={handlerChange}
            />
          </div>
          <div className="form-input">
            <label>Tour Duration:</label>
            <input
              type="text"
              name="stay"
              placeholder="2 night 1 day"
              value={updateService.stay || ""}
              onChange={handlerChange}
            />
          </div>
          <input type="submit" />
        </div>
      </form>
    </div>
  );
};

export default UpdateService;
