import React, { Component } from 'react';
import TodoItem from './todo_item';

class ToDosList extends Component {
  render() {
    const {todos, selectedFilter, clearTodo, handleCheck} =  this.props;
    if(selectedFilter === "all") {
      return (
          <ul className="list-group my-5">
            <h3 className="text-center">Todo List</h3>
            {
              todos.map(todo => {
                return (
                  <TodoItem key={todo.id} name={todo.name} completed={todo.completed} clearTodo={() =>clearTodo(todo.id)} handleCheck={() => handleCheck(todo)}/>
              )})
            }
          </ul>
      );
    }
    else if(selectedFilter === "pending") {
      const newtodos = todos.filter(todo => todo.completed === false)
      return (
          <ul className="list-group my-5">
            <h3 className="text-center">Todo List</h3>
            {
              newtodos.map(todo => {
                return (
                  <TodoItem key={todo.id} name={todo.name} clearTodo={() =>clearTodo(todo.id)} handleCheck={() => handleCheck(todo)}/>
              )})
            }
          </ul>
      );
    }
    else if(selectedFilter === "completed") {
      const newtodos = todos.filter(todo => todo.completed === true)
      return (
          <ul className="list-group my-5">
            <h3 className="text-center">Todo List</h3>
            {
              newtodos.map(todo => {
                return (
                  <TodoItem key={todo.id} name={todo.name} clearTodo={() =>clearTodo(todo.id)} handleCheck={() => handleCheck(todo)}/>
              )})
            }
          </ul>
      );
    }
  }
}

export default ToDosList;
