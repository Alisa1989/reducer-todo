import React from 'react';

const Todo = (props) =>{

    return(
        <div className= "taskContainer" 
        className={`item${props.todoItem.completed ? " completed" :""}`}
        onClick={() => props.toggleItem(props.todoItem.id, props.todoItem.completed)}
        >
            <span>{props.todoItem.item}</span>
        </div>
    );
};

export default Todo;
