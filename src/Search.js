import React from "react";

const Search = ({onHandleSearch, searchValue}) => {
  return (<div className='todo-search'>
            <input type='text' placeholder='Search todos' value={searchValue} onChange={onHandleSearch} />
            <div>
              <input type='checkbox' id='show-completed' onChange={onHandleSearch}/>
              <label className='todo__show-completed-label' htmlFor='show-completed'>Show completed todos</label>
            </div>
          </div>)
}

export default Search;
