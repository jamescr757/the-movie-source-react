import timeExpired from "./timeExpiration";
import hypenator from "./hyphenator";

const fetchCall = async (category, type, page, extra="") => {
    const response = await fetch(`https://api.themoviedb.org/3/${category}/${type}?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=${page}${extra}`)
    const data = await response.json();
    return data.results.filter(movie => movie.original_language === "en" && movie.vote_average && movie.poster_path)
}

const setMoviesInStorage = (movies, key) => {
    sessionStorage.setItem(key, JSON.stringify({
        movies: movies,
        time: Date.now()
    }))
    return movies;
}

const fetchMoviesCall = async (page, type, noSet=true) => {
    if (!noSet && sessionStorage[type] && !timeExpired(type)) return JSON.parse(sessionStorage[type]).movies
    const movies = await fetchCall("movie", type, page);
    return noSet ? movies : setMoviesInStorage(movies, type);
}

export const fetchMoviesSearch = async input => {
    const movies = await fetchCall("search", "movie", 1, `&include_adult=false&query=${input}`);
    return setMoviesInStorage(movies, hypenator(input))
}

export default fetchMoviesCall 