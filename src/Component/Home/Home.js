import React from "react";
import Banner from "../Banner/Banner";
import Booking from "../Booking/Booking";
import Events from "../Events/Events";
import SpecialDiscount from "../SpesialDiscout/SpecialDiscount";

const Home = () => {
  return (
    <div>
      <Banner />
      <h3>Our Tour Event</h3>
      <Booking />
      <Events />
      <SpecialDiscount />
    </div>
  );
};

export default Home;
