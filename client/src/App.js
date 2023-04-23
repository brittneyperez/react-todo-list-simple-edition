import './App.css';
import React, { useState } from 'react';

function App() {
  
  const [ newTodo, setNewTodo ] = useState("");
  /* Below array destructure syntax is equivalent to:
  const newTodoStateArr = useState("");
  const newTodo = newTodoStateArr[0];
  const setNewTodo = newTodoStateArr[1];
  */
  
  const [ todoList, setTodoList ] = useState([]);
  
  const changeTextInputHandler = (e) => {
    setNewTodo(e.target.value);
  }
  const handleNewTodoSubmit = (e) => {
    e.preventDefault();
    /*
    This code mutates data: todoList.push(newTodo).
    We want to create an array that stores the new item,
    and for that we need to use the spread opertator.
    */
    if (newTodo.length === 0) {
      return; // prevents submitting empty data
    }
    
    const todoItemContent = {
      text: newTodo,
      complete: false
    }
    
    // * setTodoList and pass in a brand new array containing all current todo items plus 1 more
    setTodoList([...todoList, todoItemContent]); // replace newTodo with todoItemContent
    setNewTodo("");
  }
  
  const handleToggleComplete = (idx) => {
    const updatedTodoList = todoList.map((todoItem, i) => {
      if (idx === i) {
        todoItem.complete = !todoItem.complete;
        /* ? To avoid mutating the todoItem directly, do this:
        const updatedTodoItem = { ...todoItem, complete: !todoItem.complete };
        return updatedTodoItem; */
      }
      return todoItem;
    });
    setTodoList(updatedTodoList);
  }
  
  const handleTodoItemDelete = (delIdx) => {
    const filteredTodoItems = todoList.filter((_todoItem, i) => { // even tho todoItem is unused, we need it to access the idx
      return i !== delIdx // if i is not the to be deleted item ? keep it : delete it if idx matches
    });
    setTodoList(filteredTodoItems);
  }
  
  return (
    <div className="App">
      <div className="container">
        <h2 className='my-4'>Core Assignment #10: Todo List (Simple Edition)</h2>
        
        <form onSubmit={(e) => { handleNewTodoSubmit(e) }} className='d-flex col-4 offset-4 my-4'>
          <input type="text" onChange={ changeTextInputHandler } value={ newTodo } placeholder='Enter your task'
          className='mx-auto form-control' style={{width:'250px'}} />
          <div>
            <button className="btn btn-info ms-1">Add</button>
          </div>
        </form>
        <hr />
        
        <h2>Todo List</h2>
        {todoList.map((todoItem, i) => { // make an array of the todoItems (the callback func, and the index)
          const todoClasses = [];
          if (todoItem.complete) {
            todoClasses.push("text-decoration-line-through")
          }
          return (
            <div key={i} className='mb-2 d-flex justify-content-center align-items-center'>
              <input checked={todoItem.complete} onChange={(e) => {handleToggleComplete(i);}} type="checkbox" className='me-5' />
              <span className={todoClasses.join(" ")}>{ todoItem.text }</span>
              <button className='btn btn-danger ms-5' onClick={(e) => {handleTodoItemDelete(i)}}>Delete</button>
            </div>
          );
        })}
      </div>
      
    </div>
  );
}

export default App;
