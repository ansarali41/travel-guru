import React, { useState } from 'react';
import fakeHotel from '../../fakeData/fakeHotel';

const Hotel = (props) => {
    const {name,photo}=props.hotel;
    return (
        <div className="single-hotel-container">
            <div>
                <img src={photo} alt=""/>
            </div>
            <div>
                <h2>name:{name}</h2>
            </div>
        </div>
    );
};


export default Hotel;