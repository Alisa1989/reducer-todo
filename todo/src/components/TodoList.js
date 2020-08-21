import React from 'react';
import Todo from './Todo';

const TodoList = (props) => {
return(
    <div className= "todo-container">
        {props.todoList.map((i, key)=> 
        <Todo key={i.id} todoItem={i} toggleItem={props.toggleItem}/>
        )}
    </div>
);
}

export default TodoList;