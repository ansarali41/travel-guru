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
                    <img className='rating-icon' src="https://i.ibb.co/wr5sV0G/star-1.png" alt=""/>{rating}({totalRate}) ${price}/night ${totalPrice}total
                </p>
            </div>
        </div>
    );
};


export default Hotel;