import { MdDelete } from "react-icons/md";

const TodoItem = ({todoName, todoDate, deleteTodo}) => {

  const handleDeleteTodo = () => {
    deleteTodo(todoName)
  }

  return <div className="container text-start mt-3">
    <div className="row">
      <div className="col-6">
        {todoName}
      </div>
      <div className="col-4">
        {todoDate}
      </div>
      <div className="col-2">
        <button className="btn btn-danger w-100" onClick={handleDeleteTodo}><MdDelete className="text-md" /></button>
      </div>
    </div>
  </div>
}

export default TodoItem;