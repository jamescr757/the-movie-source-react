import React from "react";
import Card from "react-bootstrap/Card";
import "./MovieCard.css";

const MovieCard = ({ image, title, subtitle }) => {
    return (
        <Card className="movie-card rounded">
            <Card.Img variant="top" src={`https://image.tmdb.org/t/p/original/${image}`} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{subtitle}</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default MovieCard