import React, { Component } from 'react'
import  "./../CSS/Search.css"
export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            template:''
            
        }
    }
    isChange = (event) => {
        this.setState ({
            template :event.target.value
        });
        this.props.getTextSearch (this.state.template);
    }
  render() {
    return (
        <div className="search">
        <div className="form-group">
          <input type="text" placeholder="Search todos" onChange = {(event) =>this.isChange(event)} /><br />
          <div className="form-inine">
            <input type="checkbox" name="search" id="search"  autoComplete="off"  />
            <label htmlFor="search">Show compeleted todos</label>
          </div>
        </div>
      </div>
      
    )
  }
}
