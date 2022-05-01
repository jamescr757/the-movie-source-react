const fetchMovieDetails = async id => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`);
    return await response.json();
}

export default fetchMovieDetails