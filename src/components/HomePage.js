import React from "react";

import Navigation from "../layout/Navigation";

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