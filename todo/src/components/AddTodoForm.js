import React, {useState} from 'react';

const AddTodoForm = (props) => {
    const [newTodo, setNewTodo] = useState({item: "", completed: false, id: ""})

    const formSubmit = e => {
        e.preventDefault();
        
         if (newTodo.item[0].trim().length){
             props.dispatch({type: "ADD_TODO", payload: newTodo})};
        //props.dispatch({type: "ADD_TODO", payload: newTodo})
        setNewTodo({item: "", completed: false, id: new Date()});
        //props.addItem(newTodo);
        console.log("submitted");
    }

    const changeHandler = e => {
        setNewTodo({
            ...newTodo,
            [e.target.name]: [e.target.value]
        })
    }

    const clearCompleted = e =>{
        e.preventDefault();
        props.dispatch({type: "FILTER_TODOS" });
    }

return(
    <form onSubmit={formSubmit}>
        <label className="form__inputLabel">
            <input 
                id= "item"
                type= "text"
                name= "item"
                placeholder = " Add a new Todo item!"
                value= {newTodo.item}
                onChange={changeHandler}
            />
        </label>
        <button>Add item to list</button>
        <button onClick={clearCompleted}>Clear Completed</button>
    </form>
);
}

export default AddTodoForm;

//<button onClick={props.clearCompleted}>Clear Completed</button>