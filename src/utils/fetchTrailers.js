const fetchTrailers = async (title) => {
    const response = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=4&key=${process.env.REACT_APP_YOUTUBE_KEY}&q=${title}+trailer`);
    return await response.json();
}

export default fetchTrailers;