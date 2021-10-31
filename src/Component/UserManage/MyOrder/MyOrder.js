import React, { useEffect, useState } from "react";
import useAuth from "./../../../hooks/useAuth";

const MyOrder = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);
  console.log(user.email);

  useEffect(() => {
    const url = "https://fathomless-earth-27248.herokuapp.com/order";
    console.log(url);
    fetch(url)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);
  return (
    <div>
      {orders.map((order) => (
        <div className="row my-2">
          <div className="col-md-4">
            <img
              src={order.bookingid.img}
              alt=""
              width="200px"
              height="150px"
            />
          </div>
          <div className="col-md-3">
            <h1>{order.bookingid.name}</h1>
          </div>
          <div className="col-md-2">
            <h1>{order.bookingid.price}</h1>
          </div>
          <div className="col-md-3">
            <button className="btn btn-primary">Pending</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyOrder;
