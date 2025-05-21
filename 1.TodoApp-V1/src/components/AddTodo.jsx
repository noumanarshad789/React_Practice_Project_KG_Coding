const AddTodo = () => {
  return <div className="container text-start">
    <div className="row">
      <div className="col-6">
        <input type="text" className="w-100 p-2" placeholder="Enter Your Todo" />
      </div>
      <div className="col-4">
        <input type="Date" className="w-100  p-2"  />
      </div>
      <div className="col-2">
        <button className="btn btn-success w-100" >Add</button>
      </div>
    </div>
  </div>
}

export default AddTodo;