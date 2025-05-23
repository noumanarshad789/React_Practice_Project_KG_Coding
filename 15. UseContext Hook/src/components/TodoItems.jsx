import React, { useContext } from 'react'
import TodoItem from './TodoItem'
import { Context } from '../store/Context'

const TodoItems = ({ deleteTodo}) => {

  const {todoItem} = useContext(Context)

  return (
  <>
  {todoItem.map(item => <TodoItem todoDate={item.dueDate} todoName={item.name}></TodoItem>)}
   
  </>
  )
}

export default TodoItems


