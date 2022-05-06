import React from "react"
import Carousel from "react-bootstrap/Carousel"
import moment from "moment";

import fetchMoviesCall from "../utils/fetchMovies";

const MovieCarousel = () => {

    const [movies, setMovies] = React.useState([]);

    const fetchAndSetMovies = async (pageNum) => {
        const movies = await fetchMoviesCall(pageNum, "now_playing", false);
        setMovies(movies.slice(0, 10));
    }

    React.useEffect(() => {
        fetchAndSetMovies(1);
    }, [])

    return (
        <Carousel id="movie-carousel">
            {movies.map((movie, index) => (
                <Carousel.Item key={index}>
                    <img
                        className="d-block w-100"
                        src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                        alt={movie.title}
                    />
                </Carousel.Item>
            ))}
        </Carousel>
    )
}

export default MovieCarousel