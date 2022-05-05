const movieTitleConverter = string => {
    return string.replace(/\s+/g, "+")
}

export default movieTitleConverter;