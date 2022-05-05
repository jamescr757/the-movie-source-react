import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

import fetchMovieDetails from "../utils/fetchMovieDetails";
import concatGenres from "../utils/concatGenres";
import convertRuntime from "../utils/convertRuntime";
import formatReleaseDate from "../utils/formatReleaseDate";
import movieTitleConverter from "../utils/movieTitleConverter";
import fetchTrailers from "../utils/fetchTrailers";
import "./InfoModal.css";
import MovieTrailer from "./MovieTrailer";

const InfoModal = ({ movie, id, title, show, handleClose }) => {

    const [displayInfo, setDisplayInfo] = React.useState(true)
    const [movieDetails, setMovieDetails] = React.useState(null)
    const [movieTrailers, setMovieTrailers] = React.useState([]);
    
    const showTrailers = async title => {
        const data = await fetchTrailers(movieTitleConverter(title));
        setMovieTrailers(data.items.map(movie => movie.id.videoId));
        setDisplayInfo(false);
    }

    const fetchAndSetMovieDetails = async () => {
        const data = await fetchMovieDetails(id);
        setMovieDetails(data);
    }

    React.useEffect(() => {
        fetchAndSetMovieDetails();
        if (!show) setDisplayInfo(true);
    }, [show])

    return (
        <Modal 
            show={show} 
            onHide={handleClose} 
            size="lg" 
            centered 
            scrollable={true}
        >
            <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {movieDetails ? 
                    (displayInfo ?
                        <>
                            <img alt={title} src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}/>
                            <div>
                                <p><span className="modal-label">Movie Title: </span>{movieDetails.title}</p>
                                <p><span className="modal-label">Release Date: </span>{formatReleaseDate(movieDetails.release_date)}</p>
                                <p><span className="modal-label">Rating: </span>{movieDetails.vote_average.toFixed(1)}</p>
                                <p><span className="modal-label">Genre: </span>{concatGenres(movieDetails.genres)}</p>
                                <p><span className="modal-label">Status: </span>{movieDetails.status}</p>
                                <p><span className="modal-label">Runtime: </span>{convertRuntime(movieDetails.runtime)}</p>
                                <p><span className="modal-label">Popularity: </span>{movieDetails.popularity.toFixed(1)}</p>
                                <hr />
                                <p><span className="modal-label">Overview: </span>{movieDetails.overview}</p>
                            </div>
                        </>
                        :
                        <div className="trailers-container">
                            <div className="d-flex">
                                <MovieTrailer key={movieTrailers[0]} movie={movieTrailers[0]} css="me-3" />
                                <MovieTrailer key={movieTrailers[1]} movie={movieTrailers[1]} />
                            </div>
                            <div className="d-flex">
                                <MovieTrailer key={movieTrailers[2]} movie={movieTrailers[2]} css="me-3" />
                                <MovieTrailer key={movieTrailers[3]} movie={movieTrailers[3]} />
                            </div>
                        </div>
                    )
                    :
                    <div className="loader">
                        <img src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif" />
                    </div>
                }
            </Modal.Body>
            <Modal.Footer>
                {displayInfo ? 
                    <Button variant="success" onClick={() => showTrailers(title)}>
                        Trailers
                    </Button>
                    :
                    <Button variant="primary" onClick={() => setDisplayInfo(true)}>
                        Details
                    </Button>
                }
            </Modal.Footer>
        </Modal>
    );
}

export default InfoModal 