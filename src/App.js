import React, { Component } from 'react';
import './App.css';
import Search from './Component/Search';
import Todolist from './Component/Todolist';
import AddNews from './Component/AddNews';
import DataTodo from './Component/Data.json'
class App extends Component {
  constructor(props) {
   super(props);
   this.state = {
    data : DataTodo,
    SearchText : ''
   }
  }
  getTextSearch = (data) => {
    this.setState ({
      SearchText:data
    })
  }
  getNewTodo = (title,time) => {
    var item = {};
    item.title =title;
    item.time =time;
    var items =this.state.data;
    // console.log(item);
    items.push(item) ;
    this.setState ({
      data:items
    })
  }
  render() {
    let ketqua = [];
    this.state.data.forEach((item) => {
      if(item.title.indexOf((this.state.SearchText)) !== -1) {
        ketqua.push(item);
      }
    })
      
    
    return (
      <div className="App">
            <div className="todoapp">
                <Search 
                getTextSearch = {(data) => this.getTextSearch(data)}
                />
                <Todolist Dataprops={ketqua}/>
                <AddNews Add = {(title,time) =>this.getNewTodo(title,time)}/>
            </div>
      </div>
    );
  }
}

export default App;
