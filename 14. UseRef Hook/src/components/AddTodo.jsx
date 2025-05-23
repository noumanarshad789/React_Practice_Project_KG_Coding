import { useRef, useState } from "react";

const AddTodo = ({ addNewTodo }) => {

  // const [todoName, setTodoName] = useState()
  // const [todoDate, setTodoDate] = useState()
  const todoNameElement = useRef()
  const todoDateElement = useRef()


  const addNewTodoItem = (e) => {
    // setTodoName("")
    // setTodoDate("")

    e.preventDefault()
    const todoName = todoNameElement.current.value
    const todoDate = todoNameElement.current.value

    todoNameElement.current.value = ""
    todoDateElement.current.value = ""
    addNewTodo(todoName, todoDate)
  }

  // const handleNameChange = (e) => {
  //   setTodoName(e.target.value)
  // }
  // const handleDateChange = (e) => {
  //   setTodoDate(e.target.value)
  // }

  return <div className="container text-start">
    <form onSubmit={addNewTodoItem} className="row">
      <div className="col-6">
        <input type="text"
          ref={todoNameElement}
          className="w-100 p-2"
          // value={todoName} 
          // onChange={handleNameChange} 
          placeholder="Enter Your Todo" />
      </div>
      <div className="col-4">
        <input type="Date"
          ref={todoDateElement}
          // value={todoDate} 
          // onChange={handleDateChange} 
          className="w-100  p-2" />
      </div>
      <div className="col-2">
        <button className="btn btn-success w-100">Add</button>
      </div>
    </form>
  </div>
}

export default AddTodo;