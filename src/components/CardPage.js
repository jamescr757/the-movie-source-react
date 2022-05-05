import React from "react";
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux"

import Navigation from "../layout/Navigation";
import MovieGrid from "./MovieGrid";
import hypenator from "../utils/hyphenator";
import { loadMovies } from "../actions/movieActions";

const CardPage = () => {

    // const [movies, setMovies] = React.useState(null);
    // const [userInput, setUserInput] = React.useState("");
    // const dispatch = useDispatch();
    // const navigate = useNavigate();

    

    // const handleSubmit = event => {
    //     event.preventDefault();
    //     fetchMovies(userInput);
    //     setUserInput("");
    // }

    return (
        <>
            <Navigation />
            <MovieGrid />
        </>
    )
}

export default CardPage