import React, { useContext } from 'react';
import { Form, Nav, Navbar, Button, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from '../../Images/Logo.png'
import './Header.css'
import { logOutHandler } from '../Login/LoginManager';

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    
    const userLogOutHandler = () => {
        logOutHandler()
            .then(res => {
                setLoggedInUser(res)
            })
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
                    {loggedInUser.name ? <Link className="nav-link" to="/login"><Button onClick={userLogOutHandler} variant="warning">Logout</Button>
                    </Link> : <Link className="nav-link" to="/login"><Button variant="warning">Login</Button></Link>
                    }
                </Nav>
            </Navbar>
        </div>
    );
};

export default Header;