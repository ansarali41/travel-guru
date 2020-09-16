import React from 'react';
import { Form, Nav, Navbar, Button, FormControl } from 'react-bootstrap';
import logo from '../../Images/Logo.png'
import './Header.css'

const Header = () => {
    return (
        <div className="header-container">
            <Navbar bg="white" variant="light">
                <Navbar.Brand href="/home"><img src={logo} alt="" /></Navbar.Brand>
                <Nav className="mr-auto">
                    <Form inline>
                        <FormControl type="text" placeholder="Search Your Destination" className="mr-sm-2" />
                    </Form>
                </Nav>
                <Nav>
                    <Nav.Link href="#new">News</Nav.Link>
                    <Nav.Link href="#destination">Destination</Nav.Link>
                    <Nav.Link href="#blog">Blog</Nav.Link>
                    <Nav.Link href="#features">Contact</Nav.Link>
                    <Nav.Link href="/login"><Button variant="warning">Login</Button></Nav.Link>
                </Nav>
            </Navbar>
        </div>
    );
};

export default Header;