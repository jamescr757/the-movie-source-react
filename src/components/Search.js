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
        const data = await fetchMoviesSearch(input);
        const englishMovies = data.results.filter(movie => movie.original_language === "en" && movie.vote_average && movie.poster_path)
        dispatch(loadMovies(englishMovies));
        sessionStorage.setItem(hypenator(input), JSON.stringify({
            movies: englishMovies,
            time: Date.now()
        }))
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