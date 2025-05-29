import React, { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { TodoContext } from "../store/TodoContext";
import NoPostMessage from "./NoPostMessage";
import Loader from "./Loader";
import { useLoaderData } from "react-router-dom";

const PostList = () => {
  // const { postList} = useContext(TodoContext);

  const postList = useLoaderData()  // This from react router dom in the place of above.

  return (
    <>
      {/* {<Loader />} */}
      {postList.length === 0 && <NoPostMessage postList={postList} />}
      {postList.map((post, index) => (
        <Post key={index} post={post} />
      ))}
    </>
  );
};


// This code comes from the TodoContext. This is basically the data fetching code of posts.
export const postLoader = () => {
  return fetch("https://dummyjson.com/posts")
    .then((res) => res.json())
    .then((data) => {
      return data.posts;
    });
};

export default PostList;
