import { useState } from "react";

const AddTodo = ({addNewTodo}) => {

  const [todoName, setTodoName] = useState()
  const [todoDate, setTodoDate] = useState()

  const addNewTodoItem = () => {
    addNewTodo(todoName,todoDate)
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
        <button className="btn btn-success w-100" onClick={addNewTodoItem}>Add</button>
      </div>
    </div>
  </div>
}

export default AddTodo;