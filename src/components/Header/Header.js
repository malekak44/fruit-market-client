import React from 'react';
import './Header.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import logo from '../../icons/logo.png';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../App';

const Header = () => {
    const [signedInUser] = useContext(UserContext);
    let loginStatus;
    if (signedInUser.name && signedInUser.image) {
        loginStatus = <img id="userImage" src={signedInUser.image} alt={signedInUser.name} />;
    } else {
        loginStatus = <Link to="/login" style={{ textDecoration: "none", color: "rgba(0, 0, 0, .55)" }}><button>Login</button></Link>;
    }
    return (
        <Navbar collapseOnSelect expand="lg">
            <Container>
                <Link to="/" style={{ textDecoration: "none" }}>
                    <Navbar.Brand>
                        <img id="logo" src={logo} alt="logo" />
                        Fruit Market
                    </Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    </Nav>
                    <Nav>
                        <Nav.Link>
                            <Link to="/" style={{ textDecoration: "none", color: "rgba(0, 0, 0, .55)" }}>Home</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="/orders" style={{ textDecoration: "none", color: "rgba(0, 0, 0, .55)" }}>Orders</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="/admin" style={{ textDecoration: "none", color: "rgba(0, 0, 0, .55)" }}>Admin</Link>
                        </Nav.Link>
                        <Nav.Link>Deals</Nav.Link>
                        <Nav.Link>
                            {loginStatus}
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;