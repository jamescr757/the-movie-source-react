import React from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";

const BaseLayout = props => {
    return (
        <>
            <Navigation {...props} />
            {props.children}
            <Footer />
        </>
    )
}

export default BaseLayout