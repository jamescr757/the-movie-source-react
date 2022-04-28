const timeIsValid = time => {
    return Date.now() > (time + 12 * 60 * 60 * 1000);
}

const timeExpired = apiType => {
    return timeIsValid(JSON.parse(sessionStorage[apiType]).time)
}

export default timeExpired;