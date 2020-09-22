import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import fakeHotel from '../../fakeData/fakeHotel';
import GoogleMap from '../GoogleMap/GoogleMap';
import Header from '../Header/Header';
import Hotel from '../Hotel/Hotel';
import './NearestHotel.css'

const NearestHotel = () => {
    const { place } = useParams();
    const threeHotels = fakeHotel.filter(singleHotel => singleHotel.category === place)
    const [hotels, setHotels] = useState(threeHotels)
    return (
        <div>
            <Header></Header>
            <div className="hotelsAndMap-container">
                <div className="place-name-container">
                    <p>252 stay Apr 13-17 3 guests</p>
                    <h2>Stay in {place}</h2>
                    {
                        hotels.map(singleHotel => <Hotel hotel={singleHotel} key={singleHotel.id}></Hotel>)
                    }
                </div>
                <div className="google-map-container" style={{ width: '100%' }}>
                    <GoogleMap></GoogleMap>
                </div>

            </div>
        </div>
    );
};

export default NearestHotel;