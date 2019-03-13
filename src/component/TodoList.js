import React, { Component } from 'react'

export default class TodoList extends Component {
    render() {
        return (
            <ul className="list-group my-5">
                <h3 className="text-capitalize text-center">todo list</h3>
                {this.props.children}
            </ul>
        );
    }
}
