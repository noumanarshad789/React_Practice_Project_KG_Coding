import AddTodo from "./components/AddTodo"
import AppName from "./components/AppName"
import TodoItems from "./components/TodoItems"


function App() {

  const todoItems=[
    { name : "Go to University",
      dueDate : "2-2-2025" 

    },
    { name : "Go to Saylani",
      dueDate : "2-2-2025" 

    }
]
  return <center>
    <AppName></AppName>
    <AddTodo></AddTodo>
    <TodoItems todoItems={todoItems}></TodoItems>
  </center>
}

export default App
