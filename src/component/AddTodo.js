import React, { Component } from 'react'

export default class AddTodo extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         todo: ""
      }
      this.onAddTodo = this.onAddTodo.bind(this)
    }

    onTodoChange(event) {
        this.setState({
            todo: event.target.value
        })
    }

    onAddTodo() {
        const todo = this.state.todo;
        if(todo !== '') {
            this.props.onAddTodo(todo);
            this.setState({
                todo : ""
            })
        }
    }
    
    render() {
        return (
            <div className="card card-body my-3">
                <form>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text bg-primary text-white">
                                <i className="fas fa-book" />
                            </div>
                        </div>
                        <input
                            type="text"
                            className="form-control text-capitalize"
                            placeholder="add a todo item"
                            value={this.state.todo}
                            onChange={(event) => {this.onTodoChange(event)}}
                        />
                    </div>
                    <button
                        type="button"
                        className="btn btn-block btn-success mt-3 btn btn-block btn-primary mt-3"
                        onClick={this.onAddTodo}
                    >
                        Add Todo
            </button>
                </form>
            </div>
        )
    }
}
