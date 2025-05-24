import React, { useReducer } from 'react'
import { createContext } from 'react'

export const Context = createContext()
const reducer = (state, { type, payload }) => {
  let newTodo = state;

  if (type === "NEW_ITEM") {
    newTodo = [...state, { name: payload.todoName, dueDate: payload.todoDate }];
  } else if (type === "DELETE_ITEM") {
    newTodo = state.filter((item) => item.name !== payload.todoName);
  }
  return newTodo;
};

const TodoContext = ({children}) => {
  const [todoItem, dispatch] = useReducer(reducer, []);

  const handleNewTodo = (todoName, todoDate) => {
    const newItemAction = {
      type: "NEW_ITEM",
      payload: {
        todoName,
        todoDate,
      },
    };
    dispatch(newItemAction);
  };

  const handleDeleteTodo = (todoName) => {
    const deleteItemAction = {
      type: "DELETE_ITEM",
      payload: {
        todoName,
      },
    };
    dispatch(deleteItemAction);
  };

  return(
    <Context.Provider value={{ todoItem, handleNewTodo, handleDeleteTodo }}>
        {children}
    </Context.Provider>
  )
}

export default TodoContext