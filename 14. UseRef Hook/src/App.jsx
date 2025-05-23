import { useState } from "react"
import AddTodo from "./components/AddTodo"
import AppName from "./components/AppName"
import TodoItems from "./components/TodoItems"


function App() {

  const [todoItem, setTodoItem] = useState([])
  const handleNewTodo = (todoName, todoDate) => {
    //// Using of Spread Operator
    // const newTodoItem = [...todoItem, { name: todoName, dueDate: todoDate }]
    // console.log(todoName, todoDate)
    // setTodoItem(newTodoItem)

    // Functional Updates
    setTodoItem((curTodo)=>{
      const newTodoItem= [...curTodo,{ name: todoName, dueDate: todoDate }]
      return newTodoItem
    })
  }

  const handleDeleteTodo = (todoName) => {
    const deleteTodo = todoItem.filter(item => item.name !== todoName)
    setTodoItem(deleteTodo)
  }

  return <>
    <AppName></AppName>
    <AddTodo addNewTodo={handleNewTodo}></AddTodo>
    {todoItem.length<=0 && <h1 className="text-md text-center mt-5 text-bold">Enjoy today because no task is left.</h1>}
    <TodoItems todoItems={todoItem} deleteTodo={handleDeleteTodo} ></TodoItems>
  </>
}

export default App
