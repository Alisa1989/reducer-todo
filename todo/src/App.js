import React, { useReducer } from 'react';
import { initialState, reducer } from './reducers/reducer';

import AddTodoForm from './components/AddTodoForm';
import TodoList from './components/TodoList';
import './App.css';

const App = () => {
  
  const [todoList, dispatch] = useReducer(reducer, initialState);
  // const [todoList, setTodoList] = useState([{
  //   item: 'Learn about reducers',
  //   completed: false,
  //   id: 3892987589
  // }]);

  // const toggleItem = (itemId, completeState) => {
  //   console.log(itemId, completeState);
  //   setTodoList(
  //     todoList.map(item => {
  //       if (itemId === item.id) {
  //         return {
  //           ...item,
  //           completed: !item.completed
  //         };
  //       }
  //       return item;
  //     })
  //   )
  // }

  // const clearCompleted = (e) => {
  //   e.preventDefault();
  //   setTodoList(todoList.filter(item => !item.completed))
  // }

  // const addItem = newItem => {
  //   setTodoList([...todoList, newItem])
  // }

  return (
    <div>
      <AddTodoForm dispatch={dispatch}/>
      <h1>Todo List</h1>
      <TodoList todoList={todoList} dispatch={dispatch}/>
    </div>
  );
};


export default App;

/* <AddTodoForm addItem={addItem} clearCompleted={clearCompleted}/>
<TodoList todoList={todoList} toggleItem={toggleItem}/> */
