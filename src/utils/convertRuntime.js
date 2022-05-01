const numHrs = time => {
    if (time >= 180) return "3h ";
    if (time >= 120) return "2h ";
    if (time >= 60) return "1h ";
    return "";
}

const convertRuntime = time => {
    return `${numHrs(time)}${time % 60}m`;
}

export default convertRuntime