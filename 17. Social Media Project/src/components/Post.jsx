import React, { useContext } from "react";
import { FaHeart } from "react-icons/fa";
import { TiDeleteOutline } from "react-icons/ti";
import { TodoContext } from "../store/TodoContext";

const Post = ({ post }) => {
  const { deletePost } = useContext(TodoContext);
  return (
    <div>
      <div className="card mt-3 mb-3 ms-5 me-5 " style={{ width: "35rem" }}>
        <div className="card-body">
          <h5 className="card-title">
            {post.postTitle}
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" onClick={()=>deletePost(post.postId)}>
              <TiDeleteOutline /> 
            </span>
          </h5>
          <p className="card-text">{post.postBody}</p>
          {post.tags.map((tag,index) => (
            <span key={index} className="badge text-bg-primary me-2">{tag}</span>
          ))}
          <div
            className="d-inline-flex align-items-center gap-1 rounded-pill px-3 py-1 bg-light border mt-2 shadow-sm"
            style={{ width: "fit-content" }}
          >
            <FaHeart color="red" />
            <span className="fw-bold">{post.reactions}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
