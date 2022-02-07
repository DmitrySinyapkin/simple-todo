import React from "react";
import Task from "../Task/Task";

const TaskList = ({tasks, markDone, handleEditClick, deleteTask}) => {
    return (
        <div className="tasklist">
            {tasks.map((item, index) => <Task
                                      key={index}
                                      text={item.text}
                                      done={item.done}
                                      checkHandler={() => markDone(index)}
                                      changeHandler={() => handleEditClick(index, item.text)}
                                      deleteHandler={() => deleteTask(index)}
                                    />)
        }
        </div>
    );
}

export default TaskList;
