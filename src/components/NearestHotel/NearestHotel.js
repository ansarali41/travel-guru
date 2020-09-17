import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import fakeHotel from '../../fakeData/fakeHotel';
import Hotel from '../Hotel/Hotel';

const NearestHotel = () => {
    const { place } = useParams();

    const threeHotels = fakeHotel.filter(singleHotel => singleHotel.category === { place })
    console.log(threeHotels);
    const [hotels, setHotels] = useState(threeHotels)
    return (
        <div>
            <hr />
            <h2>name:{place}</h2>
            {/* {
                hotels.map(singleHotel => <Hotel hotel={singleHotel} key={singleHotel.id}></Hotel>)
            } */}
        </div>
    );
};

export default NearestHotel;