import { useReducer, useState } from "react";
import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItems from "./components/TodoItems";
import { Context } from "./store/Context";

const reducer = (state, { type, payload }) => {
  let newTodo = state;

  if (type === "NEW_ITEM") {
    newTodo = [...state, { name: payload.todoName, dueDate: payload.todoDate }];
  } else if (type === "DELETE_ITEM") {
    newTodo = state.filter((item) => item.name !== payload.todoName);
  }
  return newTodo;
};

function App() {
  // const [todoItem, setTodoItem] = useState([]);
  const [todoItem, dispatch] = useReducer(reducer, []);

  const handleNewTodo = (todoName, todoDate) => {
    // const newTodoItem = [...todoItem, { name: todoName, dueDate: todoDate }];
    // console.log(todoName, todoDate);
    // setTodoItem(newTodoItem);

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
    // const deleteTodo = todoItem.filter((item) => item.name !== todoName);
    // setTodoItem(deleteTodo);

    const deleteItemAction = {
      type: "DELETE_ITEM",
      payload: {
        todoName,
      },
    };
    dispatch(deleteItemAction);
  };

  // {todoItem.length <= 0 && (
  //         <h1 className="text-md text-center mt-5 text-bold">
  //           Enjoy today because no task is left.
  //         </h1>
  //       )}
  return (
    <>
      <Context.Provider value={{ todoItem, handleNewTodo, handleDeleteTodo }}>
        <AppName></AppName>
        <AddTodo></AddTodo>

        <TodoItems></TodoItems>
      </Context.Provider>
    </>
  );
}

export default App;
