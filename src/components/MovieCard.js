import React from "react";
import Card from "react-bootstrap/Card";
import { useParams } from 'react-router-dom'

import determineSubtitle from "../utils/determineSubtitle";
import InfoModal from "./InfoModal";
import "./MovieCard.css";

const MovieCard = ({ movie }) => {

    const { apiType } = useParams();

    const [showModal, setShowModal] = React.useState(false);

    return (
        <>
            <Card className="movie-card rounded" onClick={() => setShowModal(true)}>
                <Card.Img variant="top" src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} />
                <Card.Body>
                    <Card.Title>{movie.title}</Card.Title>
                    <Card.Text>{determineSubtitle(apiType, movie)}</Card.Text>
                </Card.Body>
            </Card>
            <InfoModal 
                show={showModal}
                handleClose={() => setShowModal(false)}
                id={movie.id}
                title={movie.title}
                movie={movie}
            />
        </>
    )
}

export default MovieCard