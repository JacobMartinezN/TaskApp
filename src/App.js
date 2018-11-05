import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {todos} from "./todos.json"
import TodoForm from './components/TodoForm';

class App extends Component {

  constructor(){
    super()
    this.state = {
      todos
    }
    this.handleAddTodo = this.handleAddTodo.bind(this)
  }

  handleAddTodo(todo){
    this.setState({
      todos: [...this.state.todos, todo]
    })
  }
  render() {

    const todos = this.state.todos.map((todo , i) => {
      return(
        <div className="col-md-4">
          <div className="card mt-4">
            <div className="card-header">
              <h3>{todo.title}</h3>
              <span className="badge badge-pill badge-danger ml-2"> {todo.priority}</span>
            </div>
            <div className="card-body">
              <p>{todo.description}</p>
              <b>{todo.responsible}</b>
            </div>
          </div>
        </div>
      )
    })
    return (
      <div className="App">
        <nav className="navbar navbar-dark bg-dark">
                <a className="text-white">
                    Task
                </a>
                <span className="badge badge-pill badge-light">
                  { this.state.todos.length }
                </span>
            </nav>
        <img src={ logo } className="App-logo" alt="logo" />
        <TodoForm onAddTodo={this.handleAddTodo} />
        <div className="container">
          <div className="row mt-4">
          {todos}
          </div>
        </div>
        
      </div>

     
    );
  }
}

export default App;
