import React from "react";
const TodoAddBox = ({todoTitle, onChangeTitle, onAddNewItem}) => (
  <div>
    <input type="text" value={todoTitle} onChange={onChangeTitle} placeholder='What do you need to do?' />
    <button onClick={onAddNewItem} disabled={!todoTitle.trim()}>Add Todo</button>
  </div>
);

export default TodoAddBox;
