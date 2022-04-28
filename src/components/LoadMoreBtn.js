import React from "react";
import Button from "react-bootstrap/Button";
import "./LoadMoreBtn.css";

const LoadMoreBtn = ({ handleClick }) => {
    return (
        <div className="load-more-btn">
            <Button 
                variant="primary"
                onClick={handleClick}
                size="lg">
                    Load More
            </Button>
        </div>
    )
}

export default LoadMoreBtn;