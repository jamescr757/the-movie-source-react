const determineTitle = searchType => {
    switch (searchType) {
        case "top-rated":
            return "Top Rated";
        case "popular":
            return "Popular";
        case "in-theaters":
            return "In Theaters";
        case "upcoming":
            return "Upcoming";
        default:
            return "Search";
    }
}

export default determineTitle;