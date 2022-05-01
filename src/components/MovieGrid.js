import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import MovieCard from "./MovieCard";
import LoadMoreBtn from "./LoadMoreBtn";
import determineTitle from "../utils/docTitle";
import determineAPI from "../utils/apiType";
import timeExpired from "../utils/timeExpiration";
import fetchMoviesCall from "../utils/fetchMovies";
import "./MovieGrid.css";

const MovieGrid = props => {

    const { apiType, searchInput } = useParams();

    const [movies, setMovies] = useState(null);
    const [page, setPage] = useState(1);
    
    const fetchAndSetMovies = async (pageNum) => {
        const data = await fetchMoviesCall(pageNum, determineAPI(apiType));
        setMovies(data.results.filter(movie => movie.original_language === "en" && movie.vote_average && movie.poster_path));
        sessionStorage.setItem(determineAPI(apiType), JSON.stringify({
            movies: data.results,
            time: Date.now()
        }))
    }

    const fetchMoreMovies = async (pageNum) => {
        const data = await fetchMoviesCall(pageNum, determineAPI(apiType));
        const newMovies = data.results.filter(movie => movie.original_language === "en" && movie.vote_average && movie.poster_path);
        setMovies(movies.concat(newMovies));
    }   

    const loadMoreMovies = () => {
        fetchMoreMovies(page + 1);
        setPage(page + 1);
    }

    useEffect(() => {
        document.title = `The Movie Source - ${determineTitle(apiType)}`;
        const apiKey = determineAPI(apiType);
        if (sessionStorage[apiKey] && !timeExpired(apiKey)) setMovies(JSON.parse(sessionStorage[apiKey]).movies)
        else if (apiKey !== "search") fetchAndSetMovies(page);
    }, [apiType])

    useEffect(() => {
        setMovies(props.movies)
    }, [props.movies])

    useEffect(() => {
        if (apiType === "search") setMovies(JSON.parse(sessionStorage[searchInput]).movies);
    }, [searchInput])

    useEffect(() => {
        if (!movies && apiType === "search") setMovies(JSON.parse(sessionStorage[searchInput]).movies)
    }, [])

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
                        <MovieCard key={index} movie={movie} />
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