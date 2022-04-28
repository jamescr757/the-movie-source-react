import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import "./MovieGrid.css";
import determineTitle from "../utils/docTitle";
import MovieCard from "./MovieCard";
import determineAPI from "../utils/apiType";
import timeExpired from "../utils/timeExpiration";

const MovieGrid = () => {

    const { apiType } = useParams();

    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1)
    
    const fetchMovies = async () => {
        console.log("calling api");
        const response = await fetch(`https://api.themoviedb.org/3/movie/${determineAPI(apiType)}?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=${page}`);
        const data = await response.json();
        setMovies(data.results.filter(movie => movie.original_language === "en"));
        sessionStorage.setItem(determineAPI(apiType), JSON.stringify({
            movies: data.results,
            time: Date.now()
        }))
    }

    useEffect(() => {
        document.title = `The Movie Source - ${determineTitle(apiType)}`;
        const apiKey = determineAPI(apiType);
        if (sessionStorage[apiKey] && !timeExpired(apiKey)) {
            console.log("pulling from storage");
            setMovies(JSON.parse(sessionStorage[apiKey]).movies)
        } else fetchMovies();
    }, [apiType])

    if (!movies) return (
        <div className="loader">
            <img src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif" />
        </div>
    )
    return (
        <div className="card-container">
            {movies.map((movie, index) => (
                <MovieCard 
                    key={index}
                    title={movie.title}
                    subtitle={`Rating: ${movie.vote_average}`}
                    image={movie.poster_path}
                />
            ))}
        </div>
    )
}

export default MovieGrid;