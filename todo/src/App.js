import React, { useState, useReducer } from 'react';
//import { initialState, reducer } from './reducers/reducer';

import AddTodoForm from './components/AddTodoForm';
import TodoList from './components/TodoList';
import './App.css';

const App = () => {
  const [todoList, setTodoList] = useState([{
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
  }]);
  //const [state, dispatch] = useReducer(reducer, initialState);

  const toggleItem = (itemId, completeState) => {
    console.log(itemId, completeState);
    setTodoList(
      todoList.map(item => {
        if (itemId === item.id) {
          return {
            ...item,
            completed: !item.completed
          };
        }
        return item;
      })
    )
  }

  const clearCompleted = (e) => {
    e.preventDefault();
    setTodoList(todoList.filter(item => !item.completed))
  }

  const addItem = newItem => {
    setTodoList([...todoList, newItem])
  }

  return (
    <div>
      <AddTodoForm addItem={addItem} clearCompleted={clearCompleted}/>
      <h1>Todo List</h1>
      <TodoList todoList={todoList} toggleItem={toggleItem}/>
    </div>
  );
};


export default App;
