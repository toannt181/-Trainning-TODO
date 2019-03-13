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
  getTextSearch = (dl) => {
    this.setState ({
      SearchText:dl
    })
  }
  getNewTodo = (title,time) => {
    var item = {};
    item.title =title;
    item.time =time;
    var items =this.state.data;// item là 1 object của data
    // console.log(item);
    items.push(item) ;
    this.setState ({// xét lại todo khi đã thêm mới
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
                getTextSearch = {(dl) => this.getTextSearch(dl)}
                />
                <Todolist Dataprops={ketqua}/>
                <AddNews Add = {(title,time) =>this.getNewTodo(title,time)}/>
            </div>
      </div>
    );
  }
}

export default App;
