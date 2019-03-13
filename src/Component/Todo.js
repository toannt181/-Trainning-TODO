import React, { Component } from 'react'
import "./../CSS/Todo.css"
export default class Todo extends Component {
  render() {
    return (
        <div className="todo ">
        
        <input type="checkbox" name="todo" id="todo"/>
          <label htmlFor="todo" className="info">
              <h3>{this.props.title}</h3>
              <span>{this.props.time}</span>
          </label>
      
      
      </div>
    )
  }
}
