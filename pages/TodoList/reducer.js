export const ACTIONS = {
  ADD_TODO: 'add_todo',
  TOGGLE_TODO: 'toggle_todo',
  DELETE_TODO: 'delete_todo'
}

/*
todos = [{ id
text
done}]
*/
export const initialState = {
  todos: []
};

export const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case ACTIONS.ADD_TODO:
      return {
        todos: [...state.todos, payload]
      };

    case ACTIONS.DELETE_TODO:
      return {
        ...state,// este operador spreed no tiene mucho sentido aquí por que todos es lo unico que existe
        todos: [...state.todos.filter(item => item.id !== payload)]
      };

    case ACTIONS.TOGGLE_TODO:
      const updatedTodos = state.todos.map((todo) => {
        if (todo.id === action.payload) {
          return { ...todo, done: !todo.done };
        }
        return todo;
      });

      return {
        ...state,
        todos: updatedTodos
      };

    default:
      throw new Error(`The Action ${type} doesn't exist as a option in the reducer`);
  }
};
