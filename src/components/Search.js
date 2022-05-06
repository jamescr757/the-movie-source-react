import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux"
import Form from "react-bootstrap/Form";

import { loadMovies } from "../actions/movieActions";
import hypenator from "../utils/hyphenator";
import { fetchMoviesSearch } from "../utils/fetchMovies";

const Search = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [input, setInput] = useState("");

    const fetchMovies = async (input) => {
        const movies = await fetchMoviesSearch(input);
        dispatch(loadMovies(movies));
        navigate(`/search/${hypenator(input)}`);
    }

    const handleSubmit = event => {
        event.preventDefault();
        fetchMovies(input);
        setInput("");
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Control 
                    type="text" 
                    placeholder="🔎  Search" 
                    onChange={e => setInput(e.target.value)}
                    value={input}
                />
            </Form.Group>
        </Form>
    )
}

export default Search 