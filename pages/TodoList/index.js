import React, { useState, useReducer } from "react";
import { initialState, reducer ,ACTIONS } from "./reducer";
import useTodoList from './useTodoList'

const TodoList = () => {
  const { 
    handleKeyUp,
    handleDelete,
    handleToggle,
    state,
    text,
    setText
  } = useTodoList()

  return (
    <div className="App">
      <input
        type="text"
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="add todo..."
        onKeyUp={handleKeyUp}
      />

      {state?.todos.length === 0 ? (
        <p>Todo empty !!</p>
      ) : (
        state.todos.map(item => (
          <div style={style.list} key={item.id}>
            <p style={{ marginRight: 20,   textDecoration: item.done ? 'line-through' : '' }}>{item.text}</p>
            <input  type="checkbox" onClick={() => handleToggle(item.id)} id="cbox2" value="second_checkbox"/>
            <div style={style.del} onClick={() => handleDelete(item.id)}>
              x
            </div>
          </div>
        ))
      )}
    </div>
  );
};

const style = {
  list: { display: "flex", alignItems: "center", justifyContent: "center" },
  del: {
    width: 40,
    height: 40,
    borderRadius: 10,
    lineHeight: "40px",
    backgroundColor: "gold"
  }
};

export default TodoList;