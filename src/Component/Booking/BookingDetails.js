import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./Booking.css";

const BookingDetails = () => {
  const { id } = useParams();
  const [bookingid, setBookingid] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/tour/${id}`)
      .then((res) => res.json())
      .then((data) => setBookingid(data));
  }, []);

  return (
    <div>
      <div className="container">
        <div className="card travel-card my-5 shadow">
          <div className="card-header light-orange text-white fs-3 fw-bolder">
            {bookingid.name}
            <div className="custom-label deep-orange d-flex justify-content-center align-items-center fw-bold">
              Travel
            </div>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-md-4">
                <div className="baner mb-3">
                  <img
                    className="img-fluid"
                    src={bookingid.img}
                    alt={bookingid.name}
                  />
                </div>
                <div className="stops pl-2">
                  <p className="mb-1 text-start">
                    <strong>Overview : </strong>
                    {bookingid.description}
                  </p>
                  <p className="mb-1 text-start">
                    <strong> Stay : </strong>
                    {bookingid.stay}
                  </p>
                </div>
              </div>
              <div className="col-md-4 flex-column custom-package-flex">
                <div className="desc">
                  <p>
                    <strong className="text-center"> Inclusions: </strong>
                    <ul className="text-start">
                      <li>
                        <p>07 nights accommodation at hotel</p>
                      </li>
                      <li>
                        <p>Discover Banff Tour with Sulphur Mountain Gondola</p>
                      </li>
                      <li>
                        <p>Daily breakfast at restaurant in the hotel.</p>
                      </li>
                      <li>
                        <p>
                          Lake Louise & Columbia Icefields Tour with Ice
                          Explorer Ride
                        </p>
                      </li>
                      <li>
                        <p>
                          Inter-city transfers Calgary/Banff/Lake Louise/Jasper
                          on SIC basis.
                        </p>
                      </li>
                      <li>
                        <p>Discover Jasper Tour</p>
                      </li>
                      <li>
                        <p>Vancouver City Tour</p>
                      </li>
                    </ul>
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="d-flex flex-column justify-content-center align-items-center">
                  <div className="package-price text-center deep-orange">
                    <span>from</span>
                    <h3>
                      <span>{bookingid.price}</span> TK
                    </h3>
                  </div>
                  <div className="package-action text-center">
                    <button className="btn btn-outline-danger">BOOK NOW</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingDetails;
