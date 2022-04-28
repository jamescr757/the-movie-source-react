import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import MovieCard from "./MovieCard";
import LoadMoreBtn from "./LoadMoreBtn";
import determineTitle from "../utils/docTitle";
import determineAPI from "../utils/apiType";
import timeExpired from "../utils/timeExpiration";
import "./MovieGrid.css";

const MovieGrid = props => {

    const { apiType } = useParams();

    const [movies, setMovies] = useState(null);
    const [page, setPage] = useState(1);

    // move to utility file?
    const fetchCall = async (pageNum) => {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${determineAPI(apiType)}?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=${pageNum}`);
        return await response.json();
    }
    
    const fetchAndSetMovies = async (pageNum) => {
        console.log("calling api");
        const data = await fetchCall(pageNum);
        setMovies(data.results.filter(movie => movie.original_language === "en" && movie.vote_average && movie.poster_path));
        sessionStorage.setItem(determineAPI(apiType), JSON.stringify({
            movies: data.results,
            time: Date.now()
        }))
    }

    const fetchMoreMovies = async (pageNum) => {
        const data = await fetchCall(pageNum);
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
        if (sessionStorage[apiKey] && !timeExpired(apiKey)) {
            console.log("pulling from storage");
            setMovies(JSON.parse(sessionStorage[apiKey]).movies)
        } else if (apiKey !== "search") fetchAndSetMovies(page);
    }, [apiType])

    useEffect(() => {
        setMovies(props.movies)
    }, [props.movies])

    useEffect(() => {
        if (!movies && apiType === "search") setMovies(JSON.parse(sessionStorage.search).movies)
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