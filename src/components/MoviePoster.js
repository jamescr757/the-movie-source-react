import React from "react";

import fetchMoviesCall from "../utils/fetchMovies";
import generateRandomIndex from "../utils/generateRandomIndex";

const MoviePoster = ({ apiCall }) => {

    const [movie, setMovie] = React.useState(null);

    const fetchAndSetMovie = async (pageNum) => {
        const movies = await fetchMoviesCall(pageNum, apiCall, false);
        console.log(movies);
        const randomIndex = generateRandomIndex(movies);
        setMovie(movies[randomIndex]);
    }

    React.useEffect(() => {
        fetchAndSetMovie(1);
    }, [])

    if (!movie) return <></>
    return (
        <div className="movie-poster">
            <img 
                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                alt={movie.title}
            />
        </div>
    )
}

export default MoviePoster