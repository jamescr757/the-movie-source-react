import React from "react";
import Card from "react-bootstrap/Card";
import { useParams } from 'react-router-dom'
import determineSubtitle from "../utils/determineSubtitle";
import "./MovieCard.css";

const MovieCard = ({ movie }) => {

    const { apiType } = useParams();

    return (
        <Card className="movie-card rounded">
            <Card.Img variant="top" src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} />
            <Card.Body>
                <Card.Title>{movie.title}</Card.Title>
                <Card.Text>{determineSubtitle(apiType, movie)}</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default MovieCard