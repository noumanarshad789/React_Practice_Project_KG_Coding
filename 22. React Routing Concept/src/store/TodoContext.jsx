import React, { createContext, useEffect, useReducer, useState } from "react";

export const TodoContext = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
  addDumyPosts: () => {},
});

const reducer = (currPostList, action) => {
  let newPostList = currPostList;

  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (delPost) => delPost.id !== action.payload.postId
    );
  } else if (action.type === "ADD_DUMY_POSTS") {
    newPostList = action.payload.posts;
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currPostList];
  }

  return newPostList;
};

const TodoContextProvider = ({ children }) => {
  const [postList, dispatch] = useReducer(reducer, []);

  const [isAppLoading, setIsAppLoading] = useState(false);

  const addPost = (post) => {
    dispatch({
      type: "ADD_POST",
      payload: post
    });
  };
  const addDumyPosts = (posts) => {
    dispatch({
      type: "ADD_DUMY_POSTS",
      payload: { posts },
    });
  };

  const deletePost = (postId) => {
    dispatch({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };

  useEffect(() => {
    setIsAppLoading(true);
    // console.log(isAppLoading)

    const controller = new AbortController();
    const signal = controller.signal;

    fetch("https://dummyjson.com/posts", { signal })
      .then((res) => res.json())
      .then((data) => {
        addDumyPosts(data.posts);
        setIsAppLoading(false);
        // console.log(isAppLoading)
      });

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <TodoContext.Provider
      value={{ postList, addPost, deletePost, isAppLoading }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
