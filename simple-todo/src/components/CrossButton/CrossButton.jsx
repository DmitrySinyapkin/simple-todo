import React from "react";
import './CrossButton.css';

const CrossButton = ({icon, hidden, handler}) => {
    return (
        <div className={`cross ${hidden && 'hidden'}`}>
            <div className="cross__btn" onClick={handler}>{icon}</div>
        </div>
    );
}

export default CrossButton;
