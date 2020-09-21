import React, { useContext } from 'react';
import { Form, Nav, Navbar, Button, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from '../../Images/Logo.png'
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
                    <Link className="nav-link" to="/home">Home</Link>
                    <Link className="nav-link" to="/progress">Destination</Link>
                    <Link className="nav-link" to="/progress">Blog</Link>
                    <Link className="nav-link" to="/progress">Contact</Link>
                    {loggedInUser.name && <Link className="nav-link" to="/">{loggedInUser.name}</Link>}
                    {loggedInUser.name ? <Link className="nav-link" to="/login"><Button onClick={logOutHandler} variant="warning">Logout</Button>
                    </Link> : <Link className="nav-link" to="/login"><Button variant="warning">Login</Button></Link>
                    }
                </Nav>
            </Navbar>
        </div>
    );
};

export default Header;