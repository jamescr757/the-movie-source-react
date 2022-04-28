import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import "./MovieGrid.css";
import determineTitle from "../utils/docTitle";
import MovieCard from "./MovieCard";
import determineAPI from "../utils/apiType";
import timeExpired from "../utils/timeExpiration";
import LoadMoreBtn from "./LoadMoreBtn";

const MovieGrid = () => {

    const { apiType } = useParams();

    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);

    const fetchCall = async (pageNum) => {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${determineAPI(apiType)}?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=${pageNum}`);
        return await response.json();
    }
    
    const fetchAndSetMovies = async (pageNum) => {
        console.log("calling api");
        const data = await fetchCall(pageNum);
        setMovies(data.results.filter(movie => movie.original_language === "en"));
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
        } else fetchAndSetMovies(page);
    }, [apiType])

    if (!movies) return (
        <div className="loader">
            <img src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif" />
        </div>
    )
    return (
        <>
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
            {page < 20 && <LoadMoreBtn handleClick={loadMoreMovies} />}
        </>
    )
}

export default MovieGrid;