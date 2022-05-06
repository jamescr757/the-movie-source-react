import React from "react";

import Navigation from "../layout/Navigation";
import "./HomePage.css";
import MovieCarousel from "./MovieCarousel";
import MoviePoster from "./MoviePoster";

const HomePage = () => {

    React.useEffect(() => {
        document.title = "The Movie Source";
    }, [])

    return (
        <>
            <Navigation />
            <div className="home-main-content p-4">
                <MoviePoster apiCall="popular" />
                <MovieCarousel />
                <MoviePoster apiCall="top_rated" />
            </div>
        </>
    )
}

export default HomePage;