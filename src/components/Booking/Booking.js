import { Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { Link, useParams } from 'react-router-dom';
import fakeLocation from '../../fakeData/fakeLocation';
import './Booking.css'

const Booking = () => {
    const { Lname } = useParams();

    const [locationInfo, setLocationInfo] = useState([])
    const newLocation = fakeLocation.find(loc => loc.name === Lname);
    useEffect(() => {
        setLocationInfo(newLocation);
    },[])

    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <Grid container className="booking-container">

            <Grid item xs={12} sm={6} className="location-details">
                {locationInfo.name && <h1>{locationInfo.name}</h1>}
                {locationInfo.name && <p>{locationInfo.fullDescription}</p>}
                
            </Grid>
            <Grid item xs={12} sm={6} className="booking-start">
                <form onSubmit={handleSubmit(onSubmit)}>

                    <input name="example" defaultValue="Dhaka" ref={register({ required: true })} /> <br />
                    {errors.example && <span style={{ color: 'red' }}>This field is required</span>}
                    <br />


                    <input name="exampleRequired" defaultValue={locationInfo.name} ref={register({ required: true })} /> <br />
                    {errors.exampleRequired && <span style={{ color: 'red' }}>This field is required</span>}
                    <br />

                    <Link to={`/nearestHotel/${locationInfo.name}`}><input className="submit-btn" type="submit" value="Booking Start" /></Link>
                </form>

            </Grid>

        </Grid>
    );
};

export default Booking;