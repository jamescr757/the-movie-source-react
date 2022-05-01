import React from "react";
import Form from "react-bootstrap/Form";

const Search = ({ handleSubmit, handleChange, userInput }) => {
    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Control 
                    type="text" 
                    placeholder="🔎  Search" 
                    onChange={handleChange}
                    value={userInput}
                />
            </Form.Group>
        </Form>
    )
}

export default Search 