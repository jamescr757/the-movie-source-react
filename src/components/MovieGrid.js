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

const MovieGrid = props => {

    const { apiType, searchInput } = useParams();

    const movies = useSelector(state => state.movies.movies);
    const dispatch = useDispatch();

    const [page, setPage] = useState(1);
    
    const fetchAndSetMovies = async (pageNum) => {
        const data = await fetchMoviesCall(pageNum, determineAPI(apiType));
        const englishMovies = data.results.filter(movie => movie.original_language === "en" && movie.vote_average && movie.poster_path)
        dispatch(loadMovies(englishMovies));
        sessionStorage.setItem(determineAPI(apiType), JSON.stringify({
            movies: englishMovies,
            time: Date.now()
        }))
    }

    const fetchMoreMovies = async (pageNum) => {
        const data = await fetchMoviesCall(pageNum, determineAPI(apiType));
        const newMovies = data.results.filter(movie => movie.original_language === "en" && movie.vote_average && movie.poster_path);
        dispatch(addMoreMovies(newMovies));
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
        // else dispatch(loadMovies(JSON.parse(sessionStorage[searchInput]).movies))
    }, [apiType])

    // useEffect(() => {
    //     setMovies(props.movies)
    // }, [props.movies])

    useEffect(() => {
        if (apiType === "search") dispatch(loadMovies(JSON.parse(sessionStorage[searchInput]).movies));
    }, [searchInput])

    // useEffect(() => {
    //     if (!movies && apiType === "search") dispatch(loadMovies(JSON.parse(sessionStorage[searchInput]).movies))
    // }, [])

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
                        <Fade cascade bottom>
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