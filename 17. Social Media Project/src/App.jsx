import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="app-component">
      <Sidebar></Sidebar>
      <div className="content">
        <Header></Header>
        <main></main>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
