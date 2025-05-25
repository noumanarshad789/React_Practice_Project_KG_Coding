import React, { createContext, useReducer } from "react";

export const TodoContext = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const reducer = (currPostList, action) => {
  let newPostList = currPostList;

  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (delPost) => delPost.postId !== action.payload.postId
    );
  }
  else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currPostList]
  }

  return newPostList;
};

const TodoContextProvider = ({ children }) => {
  const [postList, dispatch] = useReducer(reducer, []);

  const addPost = (userId, postBody, postTitle, reactions, tags) => {
    dispatch({
      type: "ADD_POST",
      payload: {
        postId: (((1+Math.random())*0x10000)|0).toString(16).substring(1),
        userId: userId,
        postTitle: postTitle,
        postBody:postBody,
        reactions: reactions,
        tags: tags,
      },
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
    <TodoContext.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </TodoContext.Provider>
  );
};


export default TodoContextProvider;
