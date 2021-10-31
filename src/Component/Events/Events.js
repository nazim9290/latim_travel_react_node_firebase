import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import "./Events.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Events = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("https://fathomless-earth-27248.herokuapp.com/tour")
      .then((res) => res.json())
      .then((data) => setEvents(data));
  }, []);
  const fakerData = Array(events.length)
    .fill(0)
    .map((item, index) => {
      return {
        data: events[index],
      };
    });
  const CarouselDatas = fakerData.map((item, index) => item.data);
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="m-5">
      <h1>OUR NEXT EVENTS</h1>
      {events.length ? "" : <Spinner animation="border" variant="primary" />}
      <Carousel responsive={responsive} autoPlay infinite autoPlaySpeed={1000}>
        {CarouselDatas.map((CarouselData) => (
          <div key={CarouselData._id} className="mt-1">
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="140"
                image={CarouselData.img}
                alt={CarouselData.name}
              />
              <CardContent>
                <Typography
                  component={"span"}
                  gutterBottom
                  variant="h5"
                  component="div"
                >
                  {CarouselData.name}
                </Typography>
                <Typography
                  component={"span"}
                  variant="body2"
                  color="text.secondary"
                >
                  {CarouselData.description.slice(0, 100)}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">See More</Button>
              </CardActions>
            </Card>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Events;
