import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import "./Addservice.css";

const AddNewService = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    axios
      .post("https://fathomless-earth-27248.herokuapp.com/tour", data)
      .then((response) => {
        console.log(response);
        if (response.data.insertedId) {
          alert("successfully added");
        }
        reset();
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="add-service">
      <h1>Add A Travel Service</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-container">
          <div className="form-input">
            <label>Tour Title:</label>
            <input
              type="text"
              {...register("name", { required: true })}
              placeholder="Tour Title"
            />
          </div>
          <div className="form-input">
            <label>Tour Destination:</label>
            <input
              type="text"
              {...register("address", { required: true })}
              placeholder="ex: Sajek velly"
            />
          </div>
          <div className="form-input">
            <label>Description</label>
            <textarea
              type="text"
              {...register("description", { required: true })}
              placeholder="sajek velly is most beautiful....."
            />
          </div>
          <div className="form-input">
            <label>Price:</label>
            <input
              type="number"
              {...register("price", { required: true })}
              placeholder="2000"
            />
          </div>
          <div className="form-input">
            <label>Image Url:</label>
            <input
              type="text"
              {...register("img", { required: true })}
              placeholder="your image url"
            />
          </div>
          <div className="form-input">
            <label>Tour Duration:</label>
            <input
              type="text"
              {...register("stay", { required: true })}
              placeholder="2 night 1 day"
            />
          </div>
          <input type="submit" />
        </div>
      </form>
    </div>
  );
};

export default AddNewService;
