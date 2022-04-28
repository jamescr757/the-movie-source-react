import React from "react";

const HomePage = props => {

    React.useEffect(() => {
        document.title = "The Movie Source";
    }, [])

    return (
        <>
            <div>Home Page</div>
        </>
    )
}

export default HomePage;