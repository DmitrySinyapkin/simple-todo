import React from "react";
import './TaskList.css';
import Task from "../Task/Task";

const TaskList = ({tasks, filter, markDone, handleEditClick, deleteTask}) => {
    return (
        <div className="tasklist">
            {tasks.map((item, index) => <Task
                                      key={index}
                                      text={item.text}
                                      done={item.done}
                                      checkHandler={() => markDone(index)}
                                      changeHandler={() => handleEditClick(index, item.text)}
                                      deleteHandler={() => deleteTask(index)}
                                      filter={filter}
                                    />)
        }
        </div>
    );
}

export default TaskList;