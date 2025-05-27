import React, { createContext, useReducer } from "react";

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
  } else if (action.type === "ADD_DUMY _POSTS") {
    newPostList = action.payload.posts;
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currPostList];
  }

  return newPostList;
};

const TodoContextProvider = ({ children }) => {
  const [postList, dispatch] = useReducer(reducer, []);

  const addPost = (userId, body, title, reactions, tags) => {
    dispatch({
      type: "ADD_POST",
      payload: {
        id: (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1),
        userId: userId,
        title: title,
        body: body,
        reactions: reactions,
        tags: tags,
      },
    });
  };
  const addDumyPosts = (posts) => {
    dispatch({
      type: "ADD_DUMY _POSTS",
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

  return (
    <TodoContext.Provider
      value={{ postList, addPost, deletePost, addDumyPosts }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
