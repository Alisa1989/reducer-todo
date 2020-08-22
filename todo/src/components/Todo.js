import React from 'react';

const Todo = (props) =>{

    return(
        <div className= "taskContainer" 
        className={`item${props.todoItem.completed ? " completed" :""}`}
        onClick={() => props.dispatch({type: "TOGGLE_COMPLETED" , payload: props.todoItem})}
        >
            <span>{props.todoItem.item}</span>
        </div>
    );
};

export default Todo;
