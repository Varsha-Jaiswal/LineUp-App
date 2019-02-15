import React, { Component } from 'react';
import AppFooter from './footer';
import AddToDo from './add_todo';
import ToDosList from './todos_list';

import uuid from "uuid";
class AppContainer extends Component {
  state = {
    todos: [],
    selectedFilter: "all"
  };
  handleChange =  e => {
    this.setState({
      todo: e.target.value
    });
  }
  handleSubmit = e => {
    e.preventDefault();
    if(this.state.todo.length > 0) {
      const newTodo = {
        id: uuid(),
        name: this.state.todo,
        completed: false
      }
      const updatedTodos = [...this.state.todos, newTodo];
      this.setState({
        todos: updatedTodos,
        todo: ''
      });
    }
  };
  clearList = (id) => {
    const currentFilter =id.target;
    if (currentFilter.id === "clear list") {
      this.setState({
        todos: []
      });
    }
  };
  clearTodo = (id) => {
    const updatedList = this.state.todos.filter(todo => todo.id !== id)
    this.setState({
      todos:updatedList
    })
  };
  changeFilter = (id) => {
    const currentFilter =id.target;
    if (currentFilter.id === "all") {
      this.setState({
        selectedFilter: "all"
      });
    }
    else if (currentFilter.id === "completed") {
      this.setState({
        selectedFilter: "completed"
      });
    }
    else if (currentFilter.id === "pending") {
      this.setState({
        selectedFilter: "pending"
      });
    }
    else if (currentFilter.id === "clear completed") {
      const newList = this.state.todos.filter(todo => todo.completed === false
      )
      this.setState({
        todos: newList
      });
    }
  };
  handleCheck = (todo) => {
    if(todo.completed===false) {
      todo.completed = true;
    }
    else {
      todo.completed = false;
    }
    const updatedTodos = this.state.todos.map(eachtodo => {
      if(eachtodo.id === todo.id){
        eachtodo = todo;
      }
      return eachtodo;
    });
    this.setState({
      todos:updatedTodos
    });
  };
  
  render() {
    return (
      <div className="container">
        <AddToDo todo={this.state.todo} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
        <ToDosList todos= {this.state.todos} selectedFilter={this.state.selectedFilter} clearTodo={this.clearTodo} handleCheck={this.handleCheck}/>
        <AppFooter  selectedFilter={this.state.selectedFilter} clearList={this.clearList} changeFilter={this.changeFilter}/>
      </div>
    );
  }
}

export default AppContainer;
