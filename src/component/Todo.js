import React, { Component } from 'react'

export default class Todo extends Component {
    
    onDeleteTodo (id) {
        this.props.onDeleteTodo(id)
    }
    render() {
        let { id, title } = this.props.todo;
        return (
            <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
                <h6>{title}</h6>
                <div className="todo-icon">
                    <span className="mx-2 text-success">
                        <i className="fas fa-pen" />
                    </span>
                    <span className="mx-2 text-danger" onClick={() => {this.onDeleteTodo(id)}}>
                        <i className="fas fa-trash" />
                    </span>
                </div>
            </li>
        )
    }
}
