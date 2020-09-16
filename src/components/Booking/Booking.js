import { Grid } from '@material-ui/core';
import React from 'react';
import { useForm } from "react-hook-form";
import './Booking.css'

const Booking = () => {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <Grid container className="booking-container">

            <Grid item xs={12} sm={6} className="location-details">
                <h1>Name:</h1>
                <p>full details</p>
            </Grid>
            <Grid item xs={12} sm={6} className="booking-info">
                <form onSubmit={handleSubmit(onSubmit)}>
                {/* register your input into the hook by invoking the "register" function */}
                <input name="example" defaultValue="Dhaka" ref={register({ required: true })} /><br/>
                
                {/* include validation with required or other standard HTML validation rules */}
                <input name="exampleRequired" defaultValue="Dhaka" ref={register({ required: true })} /> <br/>
                {/* errors will return when field validation fails  */}
                {errors.exampleRequired && <span style={{color: 'red'}}>This field is required</span>}
                <br/>

                <input type="submit" />
                </form>
            </Grid>
            
        </Grid>
      );
};

export default Booking;