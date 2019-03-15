import React, { Component } from 'react'
import Todo from './Todo';

export default class Todolist extends Component {
    mappingData = () =>this.props.Dataprops.map((value,key) => (
        <Todo title = {value.title} time = {value.time}/>
    ))
  render() {
    return (
        <div className="todolist">
      {this.mappingData()}
      
      </div>
      
    )
  }
}
