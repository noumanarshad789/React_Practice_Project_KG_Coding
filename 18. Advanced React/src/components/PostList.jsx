// import React, { useContext } from 'react'
// import Post from './Post'
// import { TodoContext } from '../store/TodoContext'

// const PostList = () => {

//   // const {postList} = useTodoContext()
//   const {postList} = useContext(TodoContext)

//   return (
//     <>
//       {postList.map((post,index)=>(<Post key={index} post={post} />))}
//     </>
//   )
// }

// export default PostList

import React, { useContext } from "react";
import Post from "./Post";
import { TodoContext } from "../store/TodoContext";

const PostList = () => {
  const { postList, addDumyPosts } = useContext(TodoContext);

  const handleButtonClick = () => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      // .then(console.log)
      .then(data => addDumyPosts(data.posts));
      
  };

  if (postList.length === 0) {
    return (
      <div
        className="text-center p-5"
        style={{ backgroundColor: "#f9f9f9", borderRadius: "12px" }}
      >
        <h2 className="text-primary">No posts available</h2>
        <p className="lead">
          Why not create your first post and share something awesome?
        </p>
        <button
          type="button"
          className="btn btn-warning"
          onClick={handleButtonClick}
        >
          Click the Button to get data from API
        </button>
        <br />
        <img
          src="https://illustrations.popsy.co/gray/web-design.svg"
          alt="Create Post"
          style={{ maxWidth: "300px", marginTop: "20px" }}
        />
      </div>
    );
  }

  return (
    <>
      {postList.map((post, index) => (
        <Post key={index} post={post} />
      ))}
    </>
  );
};

export default PostList;
