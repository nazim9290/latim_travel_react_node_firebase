import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import { useHistory } from 'react-router';

const Booking = () => {
    const [services,setServices]=useState([])
    const history = useHistory()

    useEffect(()=>{
        fetch("https://fathomless-earth-27248.herokuapp.com/tour")
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])

    const bookingDetails=(id)=>{
        history.push(`/booking/${id}`)
    }
    return (
        <div>
            <h1>{services.length}</h1>
            <div className="container">
                <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    {
             services.map(service=><Grid  key={service._id} item xs={6} md={4}>
              <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={service.img}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {service.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {service.description.slice(0,150)}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button onClick={()=>{bookingDetails(service.id)}} size="small">Learn More</Button>
      </CardActions>
    </Card>
     </Grid>
             )
         }
                </Grid>
            </div>
        
        </div>
    );
};

export default Booking;