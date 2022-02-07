import React, { useEffect, useRef, useState } from "react";
import './InputModal.css';

const InputModal = ({isOpen, startText, textHandler, closeHandler}) => {
    const [text, setText] = useState(startText);

    const textRef = useRef(null);

    useEffect(() => {
        textRef.current.focus();
        textRef.current.setSelectionRange(textRef.current.value.length, textRef.current.value.length);
    }, []);

    const handleChange = (e) => {
        setText(e.target.value);
    }

    const handleOkClick = (e) => {
        e.preventDefault();
        if (!text) return;
        textHandler(text);
        closeHandler();
    }

    const handleCancelClick = () => {
        closeHandler();
    }

    return (
        <div className={`input ${isOpen && 'input_open'}`}>
            <div className="input__wrapper">
                <textarea ref={textRef} value={text} onChange={handleChange} />
                <div className="input__buttons">
                    <ul>
                        <li className="input__button" onClick={handleOkClick}>OK</li>
                        <li className="input__button" onClick={handleCancelClick}>Cancel</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default InputModal;
