import React, { createContext, useContext, useReducer } from "react";

export const TodoContext = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const reducer = (currPostList, action) => {
    let newPostList = currPostList;

    if (action.type === "DELETE_POST") {
        newPostList = currPostList.filter((delPost) => delPost.postId !== action.payload.postId)
    }

  return newPostList;
};




const socialMediaPosts = [
  {
    postId: 1,
    userId: 101,
    postTitle: "Exploring the Future of AI in Everyday Life",
    postBody:
      "Artificial Intelligence is transforming how we interact with technology. From smart homes to healthcare, AI is becoming a crucial part of our daily routine. What are your thoughts on the future of AI?",
    reactions: 348,
    tags: ["AI", "Technology", "Innovation", "Future", "SmartLiving"],
  },
  {
    postId: 2,
    userId: 102,
    postTitle: "Top 5 Productivity Tools in 2025",
    postBody:
      "These tools helped me double my productivity this year. Highly recommend trying out Notion, Trello, and Focusmate. Which tools do you use?",
    reactions: 224,
    tags: ["Productivity", "Tools", "TimeManagement", "WorkTips"],
  },
  {
    postId: 3,
    userId: 103,
    postTitle: "10 Healthy Habits to Start Today",
    postBody:
      "Health is wealth. Here are 10 simple habits that changed my life: drink more water, sleep well, and move daily. Start small, stay consistent.",
    reactions: 402,
    tags: ["Health", "Lifestyle", "Wellness", "Habits", "Fitness"],
  },
];


const TodoContextProvider = ({ children }) => {
  const [postList, dispatch] = useReducer(reducer, socialMediaPosts);

  const addPost = () => {};

  const deletePost = (postId) => {
    dispatch({
        type:"DELETE_POST",
        payload:{
            postId
        }
    })
  };

  return (
    <TodoContext.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </TodoContext.Provider>
  );
};

// export const useTodoContext = useContext(TodoContext);

export default TodoContextProvider;
