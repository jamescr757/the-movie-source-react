const determineAPI = page => {
    switch (page) {
        case "top-rated":
            return "top_rated";
        case "now-playing":
            return "now_playing";
        default:
            return page;
    }
}

export default determineAPI;