import React from "react";
import { useParams } from 'react-router-dom'

const MovieGrid = props => {

    const { searchText } = useParams();

    return (
        <>
            <div>{props.api}</div>
            {searchText && <div>{searchText}</div>}
        </>
    )
}

export default MovieGrid;