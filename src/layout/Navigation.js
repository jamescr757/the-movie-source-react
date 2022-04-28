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
                <Navbar.Brand><Link to="/" id="brand-link">The Movie Source</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        <span id="blank-span"></span>
                        <Link role="button" className="nav-link" to="/top-rated">Top Rated</Link>
                        <Link className="nav-link" role="button" to="/popular">Popular</Link>
                        <Link className="nav-link" role="button" to="/in-theaters">In Theaters</Link>
                        <Link className="nav-link" role="button" to="/upcoming">Upcoming</Link>
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