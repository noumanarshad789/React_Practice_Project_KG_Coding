import React, { useContext } from 'react'
import Post from './Post'
import { TodoContext } from '../store/TodoContext'

const PostList = () => {

  // const {postList} = useTodoContext()
  const {postList} = useContext(TodoContext)

  return (
    <>
      {postList.map((post,index)=>(<Post key={index} post={post} />))}
    </>
  )
}

export default PostList