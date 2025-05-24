import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItems from "./components/TodoItems";
import TodoContext from "./store/Context";
// import todoContext from "./store/Context";

function App() {
  return (
    <>
      <TodoContext>
        <AppName></AppName>
        <AddTodo></AddTodo>
        
        <TodoItems></TodoItems>
      </TodoContext>
    </>
  );
}

export default App;


// {todoItem.length <= 0 && (
//           <h1 className="text-md text-center mt-5 text-bold">
//             Enjoy today because no task is left.
//           </h1>
//         )}