import React from "react";
import { useNavigate } from 'react-router-dom'
import Navigation from "../layout/Navigation";
import hypenator from "../utils/hyphenator";

const HomePage = props => {

    const [userInput, setUserInput] = React.useState("");
    const navigate = useNavigate();

    const fetchMovies = async (input) => {
        const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1&include_adult=false&query=${input}`)
        const data = await response.json();
        const movies = data.results.filter(movie => movie.original_language === "en" && movie.vote_average && movie.poster_path);
        sessionStorage.setItem(hypenator(input), JSON.stringify({
            movies: movies,
            time: Date.now()
        }))
        navigate(`/search/${hypenator(input)}`);
    }

    const handleSubmit = event => {
        event.preventDefault();
        fetchMovies(userInput);
    }

    React.useEffect(() => {
        document.title = "The Movie Source";
    }, [])

    return (
        <>
            <Navigation 
                handleChange={e => setUserInput(e.target.value)}
                handleSubmit={handleSubmit} 
                userInput={userInput} 
            />
            <div>Home Page</div>
        </>
    )
}

export default HomePage;