import React, { useContext, useRef } from "react";
import { TodoContext } from "../store/TodoContext";

const CreatePost = () => {
  const { addPost } = useContext(TodoContext);

  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const userId = userIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const reactions = reactionsElement.current.value;
    const tags = tagsElement.current.value.split(" ");

    addPost(userId, postBody, postTitle, reactions, tags);

    userIdElement.current.value=""
    postTitleElement.current.value=""
    postBodyElement.current.value=""
    reactionsElement.current.value=""
    tagsElement.current.value=""
  };

  return (
    <div>
      <form className="mt-5 create-post" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label for="userId" className="form-label">
            User Id
          </label>
          <input
            type="text"
            ref={userIdElement}
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
            ref={postTitleElement}
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
            ref={postBodyElement}
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
            ref={reactionsElement}
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
            ref={tagsElement}
            className="form-control"
            id="tags"
            placeholder="Please enter tags using space."
          />
        </div>
        <button type="submit" className="btn btn-primary w-100 ">
          Post
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
