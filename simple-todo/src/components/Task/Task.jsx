import React from "react";
import './Task.css';
import CrossButton from "../CrossButton/CrossButton";

const Task = ({text, done, checkHandler, changeHandler, deleteHandler}) => {
    return (
        <div className="task">
            <div className="task__check">
                <input type="checkbox" className={done && 'hidden'} onClick={checkHandler}/>
            </div>
            <div className={`task__text ${done && 'done'}`}>{text}</div>
            <div className="task__btns">
                <CrossButton hidden={done} icon="&#9998;" handler={changeHandler} />
                <CrossButton icon="X" handler={deleteHandler} />
            </div>
        </div>
    );
}

export default Task;
