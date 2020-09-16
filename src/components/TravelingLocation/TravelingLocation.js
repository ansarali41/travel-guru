import React from 'react';
import { Card } from 'react-bootstrap';
import './TravelingLocation.css'

const TravelingLocation = (props) => {
    const { name, photo } = props.location;

    return (
        <Card style={{ width: '18rem' }} className="img-container" onClick={() => props.handleSelectedLocation(name)}>
            <Card.Img variant="top" src={photo} />
            <div className="centered">
                <h3>{name}</h3>
            </div>
        </Card>
    );
};

export default TravelingLocation;