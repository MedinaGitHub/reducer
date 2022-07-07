import React, { useState, useReducer } from "react";
import { initialState, reducer ,ACTIONS } from "./reducer";

export default function useTodoList() {  
  const [text, setText] = useState("");
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleDelete = id => {
    dispatch({ type: ACTIONS.DELETE_TODO, payload: id });
  };

  const handleToggle = id => {
      dispatch({ type: ACTIONS.TOGGLE_TODO, payload:id})
  }

  const handleKeyUp = e => {
    if (e.keyCode === 13) {
      if (text === "") return;
      dispatch({
        type: ACTIONS.ADD_TODO,
        payload: {
          id: Math.random(),
          text,
          done: false
        }
      });
      setText("");
    }
  };

  return {
    handleKeyUp,
    handleDelete,
    handleToggle,
    state,
    text,
    setText
  }

}
