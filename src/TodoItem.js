import React from "react";

const TodoItem = ({ item, onHandleCheckbox }) => (
  <div className={item.isCompleted ? 'todo-item todo-item--completed' : "todo-item"}>
    <input type="checkbox" checked={item.isCompleted} onChange={() => onHandleCheckbox(item)} />
    <div>
      <div className="todo-item__title">{item.title}</div>
      <div className="todo-item__created-time">{item.createdAt}</div>
    </div>
  </div>
);

export default TodoItem;
