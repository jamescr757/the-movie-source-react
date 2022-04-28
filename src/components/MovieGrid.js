import React from "react";
import { useParams } from 'react-router-dom';
import "./MovieGrid.css";
import determineTitle from "../utils/docTitle";

const MovieGrid = () => {

    const { apiType, searchText } = useParams();

    React.useEffect(() => {
        document.title = `The Movie Source - ${determineTitle(apiType)}`;
    }, [apiType])

    return (
        <div className="card-container">
            <div>{apiType}</div>
            {searchText && <div>{searchText}</div>}
        </div>
    )
}

export default MovieGrid;