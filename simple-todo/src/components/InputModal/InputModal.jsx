import React, { useState } from "react";
import './InputModal.css';

const InputModal = ({isOpen, startText, textHandler, closeHandler}) => {
    const [text, setText] = useState(startText);

    const handleChange = (e) => {
        setText(e.target.value);
    }

    return (
        <div className={`input ${isOpen && 'input_open'}`}>
            <div className="input__wrapper">
                <textarea value={text} onChange={handleChange} />
                <div className="input__buttons">
                    <ul>
                        <li className="input__button" onClick={textHandler}>OK</li>
                        <li className="input__button" onClick={closeHandler}>Cancel</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default InputModal;
