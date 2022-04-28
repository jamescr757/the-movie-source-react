const determineTitle = searchType => {
    switch (searchType) {
        case "top-rated":
            return "Top Rated";
        case "popular":
            return "Popular";
        case "now-playing":
            return "Now Playing";
        case "upcoming":
            return "Upcoming";
        default:
            return "Search";
    }
}

export default determineTitle;