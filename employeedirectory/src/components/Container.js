import React from "react";
// This file exports both the Container component
function Container({ children }) {
    return (
        <div className="container">
            {children}
        </div>
    )

};

export default Container;