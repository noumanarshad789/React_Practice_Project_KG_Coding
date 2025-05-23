import { useContext, useState } from "react";
import { MdAddTask } from "react-icons/md";
import { Context } from "../store/Context";

const AddTodo = () => {

  const {handleNewTodo} = useContext(Context)
  const [todoName, setTodoName] = useState()
  const [todoDate, setTodoDate] = useState()

  const addNewTodoItem = () => {
    handleNewTodo(todoName,todoDate)
    setTodoName("")
    setTodoDate("")
  }

  const handleNameChange = (e)=>{
    setTodoName(e.target.value)
  }
  const handleDateChange = (e)=>{
    setTodoDate(e.target.value)
  }

  return <div className="container text-start">
    <div className="row">
      <div className="col-6">
        <input type="text" className="w-100 p-2" value={todoName} onChange={handleNameChange} placeholder="Enter Your Todo" />
      </div>
      <div className="col-4">
        <input type="Date" value={todoDate} onChange={handleDateChange} className="w-100  p-2"  />
      </div>
      <div className="col-2">
        <button className="btn btn-success w-100" onClick={addNewTodoItem}><MdAddTask className="font-lg"/></button>
      </div>
    </div>
  </div>
}

export default AddTodo;