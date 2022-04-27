import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";

const BaseLayout = props => {
    return (
        <>
            <NavBar />
            {props.children}
            <Footer />
        </>
    )
}

export default BaseLayout