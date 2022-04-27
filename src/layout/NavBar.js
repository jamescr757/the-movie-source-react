import React from "react";
import { Link } from 'react-router-dom'

const NavBar = props => {
    return (
        <ul>
            <Link to="/">
                <li>Home Page</li>
            </Link>
            <Link to="/top-rated"><li>Top Rated</li></Link>
            <Link to="/upcoming"><li>Upcoming</li></Link>
            <Link to="/in-theaters"><li>In Theaters</li></Link>
            <Link to="/popular"><li>Popular</li></Link>
            <Link to="/search/the-matrix"><li>Search</li></Link>
        </ul>
    )
}

export default NavBar