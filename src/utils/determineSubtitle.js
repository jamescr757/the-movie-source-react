import moment from "moment";

const determineSubtitle = (apiType, movie) => {
    if (apiType === "upcoming") {
        return `${moment(movie.release_date).format("MMMM Do")}`;    
    } 
    return `Rating: ${(movie.vote_average).toFixed(1)}`; 
}

export default determineSubtitle;