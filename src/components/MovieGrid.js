import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { Fade } from "react-awesome-reveal"

import MovieCard from "./MovieCard";
import LoadMoreBtn from "./LoadMoreBtn";
import determineTitle from "../utils/docTitle";
import determineAPI from "../utils/apiType";
import timeExpired from "../utils/timeExpiration";
import fetchMoviesCall from "../utils/fetchMovies";
import { addMoreMovies, loadMovies } from "../actions/movieActions";
import "./MovieGrid.css";

const MovieGrid = () => {

    const { apiType, searchInput } = useParams();

    const dispatch = useDispatch();
    const movies = useSelector(state => state.movies.movies);
    const [page, setPage] = useState(1);
    
    const fetchAndSetMovies = async (pageNum) => {
        const movies = await fetchMoviesCall(pageNum, determineAPI(apiType), false);
        dispatch(loadMovies(movies));
    }

    const fetchMoreMovies = async (pageNum) => {
        const movies = await fetchMoviesCall(pageNum, determineAPI(apiType));
        dispatch(addMoreMovies(movies));
    }   

    const loadMoreMovies = () => {
        fetchMoreMovies(page + 1);
        setPage(page + 1);
    }

    useEffect(() => {
        document.title = `The Movie Source - ${determineTitle(apiType)}`;
        const apiKey = determineAPI(apiType);
        if (sessionStorage[apiKey] && !timeExpired(apiKey)) dispatch(loadMovies(JSON.parse(sessionStorage[apiKey]).movies))
        else if (apiType !== "search") fetchAndSetMovies(page);
    }, [apiType])

    useEffect(() => {
        if (apiType === "search") dispatch(loadMovies(JSON.parse(sessionStorage[searchInput]).movies));
    }, [searchInput])

    if (!movies) return (
        <div className="loader">
            <img src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif" />
        </div>
    )
    return (
        <>
            <div className="card-container">
                {movies.length ? 
                    movies.map((movie, index) => (
                        <Fade cascade bottom key={index}>
                            <MovieCard key={index} movie={movie} />
                        </Fade>
                    ))
                    :
                    <h4>There are no results for that search.</h4>
                }
            </div>
            {page < 20 && apiType !== "search" && <LoadMoreBtn handleClick={loadMoreMovies} />}
        </>
    )
}

export default MovieGrid;