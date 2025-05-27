import React, { useContext } from "react";
import { FaHeart, FaThumbsDown } from "react-icons/fa";
import { TiDeleteOutline } from "react-icons/ti";
import { TodoContext } from "../store/TodoContext";

const Post = ({ post }) => {
  const { deletePost } = useContext(TodoContext);

  return (
    <div>
      <div className="card mt-3 mb-3 ms-5 me-5" style={{ width: "35rem" }}>
        <div className="card-body">
          <h5 className="card-title position-relative">
            {post.title}
            <span
              className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
              style={{ cursor: "pointer" }}
              onClick={() => deletePost(post.id)}
            >
              <TiDeleteOutline />
            </span>
          </h5>
          <p className="card-text">{post.body}</p>

          {/* Tags */}
          {post.tags.map((tag, index) => (
            <span key={index} className="badge text-bg-primary me-2">
              {tag}
            </span>
          ))}

          {/* Reactions */}
          <div className="d-flex gap-3 mt-3">
            <div className="d-inline-flex align-items-center gap-1 rounded-pill px-3 py-1 bg-light border shadow-sm">
              <FaHeart color="red" />
              <span className="fw-bold">{post.reactions.likes}</span>
            </div>
            <div className="d-inline-flex align-items-center gap-1 rounded-pill px-3 py-1 bg-light border shadow-sm">
              <FaThumbsDown color="gray" />
              <span className="fw-bold">{post.reactions.dislikes}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
