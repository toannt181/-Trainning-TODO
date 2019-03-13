import React, { Component } from 'react'

export default class Search extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         todo: ''
      }
    }
    onChangeTodo(event) {
        let todo = event.target.value;
        this.setState({
            todo: todo
        })
        this.props.onChangeTodo(todo)
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
                            placeholder="search todos"
                            onChange={(event) => {this.onChangeTodo(event)}}
                        />
                    </div>
                </form>
            </div>
        )
    }
}
