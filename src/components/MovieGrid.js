import React from "react";
import { useParams } from 'react-router-dom';
import "./MovieGrid.css";

const MovieGrid = props => {

    const { searchText } = useParams();

    return (
        <div className="card-container">
            <div>{props.api}</div>
            {searchText && <div>{searchText}</div>}
        </div>
    )
}

export default MovieGrid;