import React from "react";
import { Link } from 'react-router-dom'
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import "./Navigation.css"

const Navigation = props => {
    return (
        <Navbar bg="dark" expand="lg" variant="dark">
            <Container>
                <Navbar.Brand><Link to="/">The Movie Source</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        <span id="blank-span"></span>
                        <Nav.Link><Link to="/top-rated">Top Rated</Link></Nav.Link>
                        <Nav.Link><Link to="/popular">Popular</Link></Nav.Link>
                        <Nav.Link><Link to="/in-theaters">In Theaters</Link></Nav.Link>
                        <Nav.Link><Link to="/upcoming">Upcoming</Link></Nav.Link>
                        <Form>
                            <Form.Group>
                                <Form.Control type="text" placeholder="🔎  Search" />
                            </Form.Group>
                        </Form>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation