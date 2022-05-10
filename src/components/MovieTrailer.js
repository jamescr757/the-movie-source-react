const MovieTrailer = ({ movie, css }) => {
    return (
        <iframe
            width="360"
            height="202.5"
            className={css}
            src={`https://www.youtube.com/embed/${movie}`}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen={true}
        >
        </iframe>
    )
}

export default MovieTrailer;