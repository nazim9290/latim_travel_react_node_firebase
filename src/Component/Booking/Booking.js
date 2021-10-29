import React, { useEffect, useState } from 'react';

const Booking = () => {
    const [services,setServices]=useState([])

    useEffect(()=>{
        fetch("https://fathomless-earth-27248.herokuapp.com/tour")
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    return (
        <div>
            <h1>{services.length}</h1>
         {
             services.map(service=><div>
                     <h1>{service.name}</h1>
                </div>
             )
         }
        </div>
    );
};

export default Booking;