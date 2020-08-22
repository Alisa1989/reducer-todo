import React, {useState} from 'react';

const AddTodoForm = (props) => {
    const [newTodo, setNewTodo] = useState({item: "", completed: false, id: ""})

    const formSubmit = e => {
        e.preventDefault();
        // if (this.state.item.trim().length){
        //     this.props.addItem(this.state.item);
        // }

        //props.addItem(newTodo);
        props.dispatch({type: "ADD_TODO", payload: newTodo});
        setNewTodo({item: "", completed: false, id: new Date()});
        console.log("submitted");
    }

    const changeHandler = e => {
        setNewTodo({
            ...newTodo,
            [e.target.name]: [e.target.value]
        })
    }

return(
    <form onSubmit={formSubmit}>
        <label>
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
    </form>
);
}

export default AddTodoForm;
//<button onClick={props.dispatch({type: "FILTER_TODOS" })}>Clear Completed</button>

//<button onClick={props.clearCompleted}>Clear Completed</button>