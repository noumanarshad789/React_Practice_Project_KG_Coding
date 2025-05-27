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
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        addDumyPosts(data.posts);
        setIsAppLoading(false);
      });
    // console.log(isAppLoading)
  }, []);

  // useEffect(() => {
  //   setIsAppLoading(true);
  //   fetch("https://dummyjson.com/posts")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       addDumyPosts(data.posts);
  //       setIsAppLoading(false); // ✅ Now it's placed correctly
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching posts:", error);
  //       setIsAppLoading(false); // ✅ Handle errors gracefully
  //     });
  // }, []);

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
