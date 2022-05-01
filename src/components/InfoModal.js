import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import fetchMovieDetails from "../utils/fetchMovieDetails";
import concatGenres from "../utils/concatGenres";
import convertRuntime from "../utils/convertRuntime";
import formatReleaseDate from "../utils/formatReleaseDate";
import "./InfoModal.css";

const InfoModal = ({ movie, show, handleClose }) => {

    const [displayInfo, setDisplayInfo] = React.useState(true)
    const [movieDetails, setMovieDetails] = React.useState(null)
    
    const showTrailers = () => {
        setDisplayInfo(false)
    }

    const showInfo = () => {
        setDisplayInfo(true)
    }

    const fetchAndSetMovieDetails = async () => {
        const data = await fetchMovieDetails(movie.id);
        setMovieDetails(data);
    }

    React.useEffect(() => {
        fetchAndSetMovieDetails();
    }, [])

    return (
        <Modal 
            show={show} 
            onHide={handleClose} 
            size="lg" 
            centered 
            scrollable={true}
        >
            <Modal.Header closeButton>
                <Modal.Title>{movie.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {movieDetails ? 
                    (displayInfo ?
                        <>
                            <img alt={movie.title} src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}/>
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
                        <>
                            <div>Movie Trailers</div>
                        </>
                    )
                    :
                    <div className="loader">
                        <img src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif" />
                    </div>
                }
            </Modal.Body>
            <Modal.Footer>
                {displayInfo ? 
                    <Button variant="success" onClick={showTrailers}>
                        Trailers
                    </Button>
                    :
                    <Button variant="primary" onClick={showInfo}>
                        Details
                    </Button>
                }
            </Modal.Footer>
        </Modal>
    );
}

export default InfoModal 