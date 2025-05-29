import React from "react";

const NoPostMessage = () => {
  return (
    <div
      className="text-center p-5"
      style={{ backgroundColor: "#f9f9f9", borderRadius: "12px" }}
    >
      <h2 className="text-primary">No posts available</h2>
      <p className="lead">
        Why not create your first post and share something awesome?
      </p>
      <br />
      <img
        src="https://illustrations.popsy.co/gray/web-design.svg"
        alt="Create Post"
        style={{ maxWidth: "300px", marginTop: "20px" }}
      />
    </div>
  );
};

export default NoPostMessage;
