import { Grid } from '@material-ui/core';
import React, { useState } from 'react';
import fakeLocation from '../../fakeData/fakeLocation';
import TravelingLocation from '../TravelingLocation/TravelingLocation';
import './home.css'


const Home = () => {
    const[locations, setLocations] = useState(fakeLocation);
 
    return (
        <div style={{ textAlign: 'center',color: 'orange'}}>
            <h3>Select Your Dream Destination</h3>
            <Grid container direction="row" justify="center" className="locations-container" >
            {
                locations.map(loc => <TravelingLocation location={loc} key={loc.id}></TravelingLocation>)
            }
            
        </Grid>
        </div>
        
    );
};

export default Home;