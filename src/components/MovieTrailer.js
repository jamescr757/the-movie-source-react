const MovieTrailer = ({ movie, css }) => {
    return (
        <iframe
            width="360"
            height="202.5"
            className={css}
            src={`https://www.youtube.com/embed/${movie}`}
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"
        >
        </iframe>
    )
}

export default MovieTrailer;