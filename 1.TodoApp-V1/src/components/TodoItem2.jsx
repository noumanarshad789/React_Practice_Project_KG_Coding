const TodoItem2 = () => {
    let todoName = "Go to College"
    let todoDate = "3/11/2024"

  return <div className="container text-start mt-3">
    <div className="row">
      <div className="col-6">
        {todoName}
      </div>
      <div className="col-4">
        {todoDate}
      </div>
      <div className="col-2">
        <button className="btn btn-danger w-100">Delete</button>
      </div>
    </div>
  </div>
}

export default TodoItem2;