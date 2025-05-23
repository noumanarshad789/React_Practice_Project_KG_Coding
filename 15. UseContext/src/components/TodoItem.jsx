import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { Context } from "../store/Context";

const TodoItem = ({todoName, todoDate, deleteTodo}) => {

  const {handleDeleteTodo} = useContext(Context)

  const handleDelete = () => {
    handleDeleteTodo(todoName)
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
        <button className="btn btn-danger w-100" onClick={handleDelete}><MdDelete className="text-md" /></button>
      </div>
    </div>
  </div>
}

export default TodoItem;