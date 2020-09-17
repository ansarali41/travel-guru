import React, { useContext, useState } from 'react';
import { UserContext } from '../../App';
import fakeHotel from '../../fakeData/fakeHotel';
import Hotel from '../Hotel/Hotel';

const NearestHotel = () => {
    
    const [loggedInUser] = useContext(UserContext);
    const location = loggedInUser.location;

    // const threeHotels = fakeHotel.filter( fd => fd.category==={location})
    // const[hotels, setHotels] =useState(threeHotels)
    return (
        <div>
            <hr/>
            <h2>name:{loggedInUser.location}</h2>
            {
                fakeHotel.map(htl => <Hotel hotel={htl} key={htl.id}></Hotel>)
            } 
        </div>
    );
};

export default NearestHotel;