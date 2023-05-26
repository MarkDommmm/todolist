import * as types from "../contains//ActionType";

export const addTodo = (todo) => {
  // console.log(todo);
  return {
    type: types.ADD_TODO,
    payload: todo,
  };
};
export const deleteTodo = (id) => {
  // console.log(id);
  return {
    type: types.DELETE_TODO,
    payload: id,
  };
};
export const updateTodo = (id, title, complete) => {
  return {
    type: types.UPDATE_TODO,
    payload: { id, title, complete },
  };
};
