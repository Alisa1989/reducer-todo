import React from 'react';

const Todo = (props) =>{

    return(
        <div
        className={`todo${props.todoItem.completed ? " completed" :""}`}
        onClick={() => props.dispatch({type: "TOGGLE_COMPLETED" , payload: props.todoItem})}
        >
            <span className={props.todoItem.completed ? "done-on" :"done-off"}> Done: </span>
            <span>{props.todoItem.item}</span>
        </div>
    );
};

export default Todo;
