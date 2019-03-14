import React, { Component } from "react";
import TodoItem from "./TodoItem";
import TodoAddBox from "./TodoAddBox";
import Search from "./Search";

const TODO_LIST = [
  {
    id: 1,
    title: "React",
    createdAt: "Created 1/1/1970 @ 00:00:00",
    isCompleted: false
  },
  {
    id: 2,
    title: "React 1",
    createdAt: "Created 1/1/1970 @ 00:00:00",
    isCompleted: false
  },
  {
    id: 3,
    title: "React 2",
    createdAt: "Created 1/1/1970 @ 00:00:00",
    isCompleted: false
  }
];

const LOCALSTORAGE__ITEM = "todolist";

!localStorage.getItem(LOCALSTORAGE__ITEM) &&
  localStorage.setItem(LOCALSTORAGE__ITEM, JSON.stringify(TODO_LIST));

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: JSON.parse(localStorage.getItem(LOCALSTORAGE__ITEM)),
      todoTitle: "",
      isShowCompleted: false,
      searchValue: ""
    };
  }
  onChangeTitle = e => {
    this.setState({ todoTitle: e.target.value });
  };

  onAddNewItem = e => {
    const { todoList, todoTitle } = this.state;
    let today = new Date();
    const newTodoList = [
      ...todoList,
      {
        id: Date.now(),
        title: todoTitle,
        createdAt: `Created ${today.toLocaleDateString()} @ ${today.toLocaleTimeString()}`,
        isCompleted: false
      }
    ];
    this.setState({
      todoList: newTodoList,
      todoTitle: ""
    });
    localStorage.setItem(LOCALSTORAGE__ITEM, JSON.stringify(newTodoList));
  };

  onHandleCheckbox = item => {
    let { todoList } = this.state;
    let newTodoList = todoList.map(todoItem => {
      if (todoItem.id !== item.id) return todoItem;
      return {
        ...todoItem,
        isCompleted: !todoItem.isCompleted
      };
    });
    this.setState({
      todoList: newTodoList
    });
    localStorage.setItem(LOCALSTORAGE__ITEM, JSON.stringify(newTodoList));
  };

  onHandleSearch = event => {
    const { value, type, checked } = event.target;
    if (type === "checkbox") {
      this.setState({
        isShowCompleted: checked
      });
    } else {
      this.setState({
        searchValue: value
      });
    }
  };
  render() {
    const { todoList, todoTitle, isShowCompleted, searchValue } = this.state;

    return (
      <main className="todo-list">
        <Search
          onHandleSearch={this.onHandleSearch}
          searchValue={searchValue}
        />
        {!searchValue  // If search input value is empty, show all todos
          ? todoList.map(item => {
              if (isShowCompleted && !item.isCompleted) return undefined;
              return (
                <TodoItem
                  key={item.id}
                  item={item}
                  onHandleCheckbox={this.onHandleCheckbox}
                />
              );
            })
          : searchValue && isShowCompleted
          // if search input value is not empty and only completed todos are displayed, 
          //only search for todos marked as completed
          ? todoList.map(item => {
              if (item.title.indexOf(searchValue) > -1 && item.isCompleted) {
                return (
                  <TodoItem
                    key={item.id}
                    item={item}
                    onHandleCheckbox={this.onHandleCheckbox}
                  />
                );
              }
            })
          : todoList.map(item => {
              if (item.title.indexOf(searchValue) > -1) {
                return (
                  <TodoItem
                    key={item.id}
                    item={item}
                    onHandleCheckbox={this.onHandleCheckbox}
                  />
                );
              }
            })}

        <TodoAddBox
          todoTitle={todoTitle}
          onChangeTitle={this.onChangeTitle}
          onAddNewItem={this.onAddNewItem}
        />
      </main>
    );
  }
}

export default Main;
