import React from 'react'
import TodoItem from './TodoItem'

const TodoItems = ({todoItems, deleteTodo}) => {
  return (
  <>
  {todoItems.map(item => <TodoItem todoDate={item.dueDate} todoName={item.name} deleteTodo={deleteTodo}></TodoItem>)}
   
  </>
  )
}

export default TodoItems


