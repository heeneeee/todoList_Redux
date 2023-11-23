import uuid from "react-uuid";

const ADD_TODO = "todo/ADD_TODO";
const DELETE_TODO = "todo/DELETE_TODO";
const SWITCH_TODO = "todo/SWITCH_TODO";

export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload,
  };
};

export const deleteTodo = (payload) => {
  return {
    type: DELETE_TODO,
    payload,
  };
};

export const switchTodo = (payload) => {
  return {
    type: SWITCH_TODO,
    payload,
  };
};

const initialState = [
  {
    id: uuid(),
    title: "리액트 공부하기",
    body: "기초부터 꼼꼼히 학습",
    isDone: false,
  },
  {
    id: uuid(),
    title: "파이어베이스 공부하기",
    body: "공식문서 잘 보기",
    isDone: false,
  },
  {
    id: uuid(),
    title: "과제 제출",
    body: "팬레터함 과제 제출 완료",
    isDone: true,
  },
];

// 리듀서
const todos = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.payload];

    case "DELETE_TODO":
      const id = action.payload;
      const newTodos = state.filter((todo) => todo.id === id);
      return newTodos;

    case "SWITCH_TODO":
      return state.map((todo) => {
        if (todo.id === action.payload) {
          return { ...todo, idDone: !todo.isDone };
        } else {
          return todo;
        }
      });

    default:
      return state;
  }
};

export default todos;
