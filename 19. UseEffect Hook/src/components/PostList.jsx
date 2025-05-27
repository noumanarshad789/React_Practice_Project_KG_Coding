import React, { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { TodoContext } from "../store/TodoContext";
import NoPostMessage from "./NoPostMessage";
import Loader from "./Loader";

const PostList = () => {
  const { postList, addDumyPosts } = useContext(TodoContext);
  const [isAppLoading, setIsAppLoading] = useState(false);

  useEffect(() => {
    setIsAppLoading(true);
    // console.log(isAppLoading)

    const controller = new AbortController();
    const signal = controller.signal;

    fetch("https://dummyjson.com/posts", {signal})
      .then((res) => res.json())
      .then((data) => {
        addDumyPosts(data.posts);
        setIsAppLoading(false);
        // console.log(isAppLoading)
      });

      return(
        () => {
          controller.abort();
        }
      )
  }, []);

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
