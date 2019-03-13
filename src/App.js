import React, { Component } from 'react';
import './App.css';
import Search from './component/Search';
import TodoList from './component/TodoList';
import AddTodo from './component/AddTodo';
import uuid from 'uuid';
import Todo from './component/Todo';

const list = [
  {
    id: uuid(),
    title: 'hoc react that thu vi 1'
  },
  {
    id: uuid(),
    title: 'hoc react that thu vi 2'
  },
  {
    id: uuid(),
    title: 'hoc react that thu vi 3'
  },
  {
    id: uuid(),
    title: 'hoc react that thu vi 4'
  }
];

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      items: list
    }
    this.onAddTodo = this.onAddTodo.bind(this);
    this.onDeleteTodo = this.onDeleteTodo.bind(this);
    this.onChangeTodo = this.onChangeTodo.bind(this);
  }

  onAddTodo(title) {
    const todo = {
      id: uuid(),
      title: title
    }
    this.setState({
      items: [...this.state.items, todo]
    })
  }

  onDeleteTodo(id) {
    this.setState({
      items: this.state.items.filter((todo) => {
        return todo.id !== id
      })
    })
  }

  onChangeTodo(title) {
    this.setState({
      items: this.state.items.filter((todo) => {
        return todo.title.toLowerCase().includes(title.toLowerCase())
      })
    })
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-4">
            <h3 className="text-capitalize text-center">todo input</h3>
            <Search onChangeTodo={this.onChangeTodo} />
            <TodoList>
              {
                this.state.items.map((todo) => {
                  return (
                    <Todo
                      key={todo.id}
                      todo={todo}
                      onDeleteTodo={this.onDeleteTodo}
                    />
                  )
                })
              }
            </TodoList>
            <AddTodo onAddTodo={this.onAddTodo} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
