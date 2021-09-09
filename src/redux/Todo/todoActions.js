import { CREATE_TODO, DELETE_TODO, DELETE_ALL, UPDATE_TODO } from "./todoTypes";

export const createTodo = (newTodo) => {
  return {
    type: CREATE_TODO,
    payload: newTodo,
  };
};

export const deleteTodo = (index) => {
  return {
    type: DELETE_TODO,
    payload: index,
  };
};

export const deleteAllTodo = () => {
  return {
    type: DELETE_ALL,
  };
};

export const updateTodo = (updatedTodo) => {
  return {
    type: UPDATE_TODO,
    payload: updatedTodo,
  };
};
