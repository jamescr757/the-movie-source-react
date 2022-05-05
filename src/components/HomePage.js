import React from "react";

import Navigation from "../layout/Navigation";
import "./HomePage.css";

const HomePage = () => {

    React.useEffect(() => {
        document.title = "The Movie Source";
    }, [])

    return (
        <>
            <Navigation />
            <div>Home Page</div>
        </>
    )
}

export default HomePage;