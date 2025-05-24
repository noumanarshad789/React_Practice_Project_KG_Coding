import React, { createContext, useReducer } from "react";

const TodoContext = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const reducer = (currPostList,action)=>{
    return currPostList;
}


const TodoContextProvider = ({children}) => {

    const [postList, dispatch] =useReducer(reducer , [])

    const addPost = ()=>{}

    const deletePost =() => {}

    return(
    <TodoContext.Provider value={{postList, addPost, deletePost}}>
        {children}
    </TodoContext.Provider>
  )
};

export default TodoContextProvider;
