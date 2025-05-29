import React, { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { TodoContext } from "../store/TodoContext";
import NoPostMessage from "./NoPostMessage";
import Loader from "./Loader";

const PostList = () => {
  const { postList, isAppLoading } = useContext(TodoContext);


  return (
    <>
      {isAppLoading && <Loader />}
      {!isAppLoading && postList.length === 0 && (
        <NoPostMessage postList={postList} />
      )}
      {!isAppLoading &&
        postList.map((post, index) => <Post key={index} post={post} />)}
    </>
  );
};

export default PostList;
