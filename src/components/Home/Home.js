import { Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { Card,Button } from 'react-bootstrap';
import fakeLocation from '../../fakeData/fakeLocation';
import TravelingLocation from '../TravelingLocation/TravelingLocation';
import './home.css'


const Home = () => {
    const[locations, setLocations] = useState(fakeLocation);
   
    const [selectedLocation, setSelectedLocation] = useState([])

    // default value set of selected location
    useEffect(()=> {
        setSelectedLocation(fakeLocation[0])
    },[])

    const handleSelectedLocation = (location) =>{
        if(location === "Cox'sBazar"){
            const newSelected = fakeLocation.find(loc => loc.name === location)
            setSelectedLocation(newSelected);
        }
        if(location === "Sreemangal"){
            const newSelected = fakeLocation.find(loc => loc.name === location)
            setSelectedLocation(newSelected);
        }
        if(location === "Sundarban"){
            const newSelected = fakeLocation.find(loc => loc.name === location)
            setSelectedLocation(newSelected);
        }
    } 
    return (
        <Grid container direction="row" justify="center" className="locations-container" >

            <Grid className="select-single-location">
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>{ selectedLocation.name}</Card.Title>
                        <Card.Text>
                            {selectedLocation.shortDescription}
                        </Card.Text>
                        <Card.Link href="/booking"><Button variant="warning">Booking →</Button></Card.Link>
                    </Card.Body>
                </Card>    
            </Grid>
            {
                locations.map(loc => <TravelingLocation handleSelectedLocation={handleSelectedLocation} location={loc} key={loc.id}></TravelingLocation>)
            }
            
        </Grid>
    );
};

export default Home;