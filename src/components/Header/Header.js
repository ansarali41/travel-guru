import React, { useContext } from 'react';
import { Form, Nav, Navbar, Button, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from '../../Images/Logo.png'
import { logOutHandler } from '../Login/Login';
import './Header.css'
import * as firebase from "firebase/app";
import "firebase/auth";

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    // user logOut section
    const logOutHandler = () => {
        firebase.auth().signOut().then(function () {
            const loggedOutUser = {
                name: '',
                email: ''
            }
            console.log("Sign-out successful");
            setLoggedInUser(loggedOutUser)

        }).catch(function (error) {
            // An error happened.
        });
    }


    return (
        <div className="header-container">
            <Navbar bg="white" variant="light">
                <Navbar.Brand href=""><Link to="/home"><img src={logo} alt="" /></Link></Navbar.Brand>
                <Nav className="mr-auto">
                    <Form inline>
                        <FormControl type="text" placeholder="Search Your Destination" className="mr-sm-2" />
                    </Form>
                </Nav>
                <Nav>
                    <Nav.Link href=""><Link to="/home">Home</Link></Nav.Link>
                    <Nav.Link href="">Destination</Nav.Link>
                    <Nav.Link href="">Blog</Nav.Link>
                    <Nav.Link href="">Contact</Nav.Link>
                    {loggedInUser.name && <Nav.Link href="">{loggedInUser.name}</Nav.Link>}
                    {loggedInUser.name ? <Link to="/login"><Button onClick={logOutHandler} variant="warning">Logout</Button>
                    </Link> : <Link to="/login"><Button variant="warning">Login</Button></Link>
                    }

                </Nav>
            </Navbar>
        </div>
    );
};

export default Header;