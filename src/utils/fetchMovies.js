const fetchMoviesCall = async (page, type) => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${type}?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=${page}`);
    return await response.json();
}

export default fetchMoviesCall 