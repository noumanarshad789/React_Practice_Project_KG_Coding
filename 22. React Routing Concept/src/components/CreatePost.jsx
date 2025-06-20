import React, { useContext, useRef } from "react";
import { TodoContext } from "../store/TodoContext";
import { Form, redirect, useNavigate } from "react-router-dom";

const CreatePost = () => {
  // const { addPost } = useContext(TodoContext);
  // const navigate = useNavigate();

  // const userIdElement = useRef();
  // const postTitleElement = useRef();
  // const postBodyElement = useRef();
  // const reactionsElement = useRef();
  // const tagsElement = useRef();

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   const userId = userIdElement.current.value;
  //   const postTitle = postTitleElement.current.value;
  //   const postBody = postBodyElement.current.value;
  //   const reactions = reactionsElement.current.value;
  //   const tags = tagsElement.current.value.split(" ");

  //   userIdElement.current.value = "";
  //   postTitleElement.current.value = "";
  //   postBodyElement.current.value = "";
  //   reactionsElement.current.value = "";
  //   tagsElement.current.value = "";

  //   fetch("https://dummyjson.com/posts/add", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({
  //       userId: userId,
  //       title: postTitle,
  //       body: postBody,
  //       reactions: reactions,
  //       tags: tags,
  //     }),
  //   })
  //     .then((res) => res.json())
  //     .then((post) => {
  //       addPost(post);
  //       navigate("/");
  //     });
  // };

  return (
    <div>
      <Form method="POST" className="mt-5 create-post" /*onSubmit={handleSubmit}*/>
        <div className="mb-3">
          <label for="userId" className="form-label">
            User Id
          </label>
          <input
            type="text"
            name="userId"
            className="form-control"
            id="userId"
            placeholder="Enter your User Id here..."
          />
        </div>
        <div className="mb-3">
          <label for="title" className="form-label">
            Post Title
          </label>
          <input
            type="text"
            name="title"
            className="form-control"
            id="title"
            placeholder="How are you feeling today..."
          />
        </div>
        <div className="mb-3">
          <label for="body" className="form-label">
            Post Content
          </label>
          <textarea
            className="form-control"
            name="body"
            id="body"
            placeholder="Tell us more about it..."
          />
        </div>
        <div className="mb-3">
          <label for="reactions" className="form-label">
            Number of Reactions
          </label>
          <input
            type="text"
            name="reactions"
            className="form-control"
            id="reactions"
            placeholder="How many people reacted to this post."
          />
        </div>
        <div className="mb-3">
          <label for="tags" className="form-label">
            Enter your Hashtags here
          </label>
          <input
            type="text"
            name="tags"
            className="form-control"
            id="tags"
            placeholder="Please enter tags using space."
          />
        </div>
        <button type="submit" className="btn btn-primary w-100 ">
          Post
        </button>
      </Form>
    </div>
  );
};


export const createPostAction = async(data) => {
  const formData = await data.request.formData()
  const postData = Object.fromEntries(formData)

  postData.tags = postData.tags.split(" ")

   fetch("https://dummyjson.com/posts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(postData),
    })
      .then((res) => res.json())
      .then((post) => {
        console.log(post)
      });
      return redirect("/")
}


export default CreatePost;
