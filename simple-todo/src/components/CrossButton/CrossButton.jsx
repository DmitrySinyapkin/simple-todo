import React from "react";
import './CrossButton.css';

const CrossButton = ({icon}) => {
    return (
        <div className="cross">
            <div className="cross__btn">{icon}</div>
        </div>
    );
}

export default CrossButton;
