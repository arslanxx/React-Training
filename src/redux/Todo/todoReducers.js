import { CREATE_TODO, DELETE_TODO, DELETE_ALL, UPDATE_TODO } from "./todoTypes";

const initialState = {
  taskList: [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_TODO:
      return {
        ...state,
        taskList: [...state.taskList, ...action.payload],
      };
    case DELETE_ALL:
      return {
        ...state,
        taskList: [],
      };
    case DELETE_TODO:
      return {
        ...state,
        taskList: state.taskList.filter((elem, i) => i !== action.payload),
      };
    // case UPDATE_TODO:
    //   return {
    //     taskList: state.taskList.splice(action.payload, 1),
    //     newTodo: "",
    //   };
    default:
      return state;
  }
};

export default todoReducer;
