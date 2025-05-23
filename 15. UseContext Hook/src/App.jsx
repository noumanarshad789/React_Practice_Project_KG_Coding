import { useState } from "react";
import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItems from "./components/TodoItems";
import { Context } from "./store/Context";

function App() {
  const [todoItem, setTodoItem] = useState([]);
  const handleNewTodo = (todoName, todoDate) => {
    const newTodoItem = [...todoItem, { name: todoName, dueDate: todoDate }];
    console.log(todoName, todoDate);
    setTodoItem(newTodoItem);
  };

  const handleDeleteTodo = (todoName) => {
    const deleteTodo = todoItem.filter((item) => item.name !== todoName);
    setTodoItem(deleteTodo);
  };

  return (
    <>
      <Context.Provider value={{todoItem,handleNewTodo,handleDeleteTodo}}>
        <AppName></AppName>
        <AddTodo></AddTodo>
        {todoItem.length <= 0 && (
          <h1 className="text-md text-center mt-5 text-bold">
            Enjoy today because no task is left.
          </h1>
        )}
        <TodoItems></TodoItems>
      </Context.Provider>
    </>
  );
}

export default App;
