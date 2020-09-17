import { Grid } from '@material-ui/core';
import React, { useContext, useEffect, useState } from 'react';
import { Card,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import fakeLocation from '../../fakeData/fakeLocation';
import TravelingLocation from '../TravelingLocation/TravelingLocation';
import './home.css'


const Home = () => {
    const[locations, setLocations] = useState(fakeLocation);
    const [selectedLocation, setSelectedLocation] = useState([]);
    const [loggedInUser, setLoggedInUser]=useContext(UserContext)
 // default value set of selected location
    useEffect(() => {
        setSelectedLocation(fakeLocation[0]);
      }, [])


// selecting location
    const handleSelectedLocation = (location) =>{
        if(location === "Cox'sBazar"){
            const newSelected = fakeLocation.find(loc => loc.name === location)
            setSelectedLocation(newSelected);
            const newLocation = {
                location: newSelected.name,
                fullDescription: newSelected.fullDescription
            }
            setLoggedInUser(newLocation);
        }
        if(location === "Sreemangal"){
            const newSelected = fakeLocation.find(loc => loc.name === location)
            setSelectedLocation(newSelected);
            const newLocation = {
                location: newSelected.name,
                fullDescription: newSelected.fullDescription
            }
            setLoggedInUser(newLocation);
        }
        if(location === "Sundarban"){
            const newSelected = fakeLocation.find(loc => loc.name === location)
            setSelectedLocation(newSelected);
            const newLocation = {
                location: newSelected.name,
                fullDescription: newSelected.fullDescription
            }
            setLoggedInUser(newLocation);
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
                        <Link to="/booking"><Button variant="warning">Booking →</Button></Link>
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