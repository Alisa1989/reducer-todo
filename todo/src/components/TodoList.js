import React from 'react';
import Todo from './Todo';

const TodoList = (props) => {
return(
    <div className= "todo-container">
        {props.todoList.map((i, key)=> 
        <Todo key={i.id} todoItem={i} dispatch={props.dispatch}/>
        )}
    </div>
);
}

export default TodoList;