import { Grid } from '@material-ui/core';
import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import './Booking.css'

const Booking = () => {
    const [loggedInUser] = useContext(UserContext);

    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <Grid container  className="booking-container">

            <Grid item xs={12} sm={6} className="location-details">
                <h1>{loggedInUser.location}</h1>
                <p>{loggedInUser.fullDescription}</p>
            </Grid>
            <Grid item xs={12} sm={6} className="booking-start">
                <form onSubmit={handleSubmit(onSubmit)}>
               
                <input name="example" defaultValue="Dhaka" ref={register({ required: true })} /> <br/>
                {errors.example && <span style={{color: 'red'}}>This field is required</span>}
                <br/>
                
                
                <input name="exampleRequired" defaultValue={loggedInUser.location} ref={register({ required: true })} /> <br/>
                {errors.exampleRequired && <span style={{color: 'red'}}>This field is required</span>}
                <br/>

                <Link to="/nearestHotel"><input className="submit-btn" type="submit" value="Booking Start" /></Link>
                </form>
                
            </Grid>
            
        </Grid>
      );
};

export default Booking;