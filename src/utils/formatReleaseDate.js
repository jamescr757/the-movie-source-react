import moment from "moment";

const formatReleaseDate = date => {
    return moment(date).format("MMMM D, YYYY");
}

export default formatReleaseDate;