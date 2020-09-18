import React from 'react';
import './Hotel.css'

const Hotel = (props) => {
    const { name, photo, guest, bedrooms, beds, baths, details, rating, totalRate, price, totalPrice } = props.hotel;
    return (
        <div className="single-hotel-container">
            <div className="hotel-photo">
                <img src={photo} alt="" />
            </div>
            <div className="hotel-details">
                <h3>{name}</h3>
                <p>{guest}guests {bedrooms}bedrooms {beds}beds {baths}baths<br />   
                    {details} <br />
                    rating price totalPrice
                </p>
            </div>
        </div>
    );
};


export default Hotel;