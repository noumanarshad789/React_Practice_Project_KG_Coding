import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./components/Sidebar";
import CreatePost from "./components/CreatePost";
import PostList from "./components/PostList";
import { useState } from "react";
import TodoContextProvider from "./store/TodoContext";
function App() {
  const [selectedTodo, setSelectedTodo] = useState("Home");

  return (
    <TodoContextProvider>
      <div className="app-component">
        <Sidebar
          selectedTodo={selectedTodo}
          setSelectedTodo={setSelectedTodo}
        ></Sidebar>
        <div className="content">
          <Header></Header>
          <main>
            {selectedTodo === "Home" ? (
              <PostList></PostList>
            ) : (
              <CreatePost></CreatePost>
            )}
          </main>
          <Footer></Footer>
        </div>
      </div>
    </TodoContextProvider>
  );
}

export default App;
