const concatGenres = array => {
    return array.reduce((prev, acc) => prev + ` ${acc.name}`, "");
}

export default concatGenres 