import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItems from "./components/TodoItems";
import { Welcome } from "./components/Welcome";
import TodoContext from "./store/Context";
// import todoContext from "./store/Context";

function App() {
  return (
    <>
      <TodoContext>
        <AppName></AppName>
        <AddTodo></AddTodo>
        <Welcome></Welcome>
        <TodoItems></TodoItems>
      </TodoContext>
    </>
  );
}

export default App;

