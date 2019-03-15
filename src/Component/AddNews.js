import React, { Component } from 'react'
import "./../CSS/Addtodo.css"
export default class AddNews extends Component {
  constructor (props) {
    super(props);
    this.state = {
      title:'',
      time:''
    }
  }
    isChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;

      console.log(name, value);
      
      this.setState({
        [name]:value
      })
    } 
  render() {
    return (
        <div className="addtodo">
        <form>
        <div className="form-group">
          <input type="text" name='title' placeholder="What do you need to do ?" onChange ={(event) =>this.isChange(event)} />
          <input type="reset" value="ADD" onClick ={(title,time) =>this.props.Add(this.state.title,this.state.time)} />
        </div>
        </form>
       
      </div>
      
    )
  }
}
