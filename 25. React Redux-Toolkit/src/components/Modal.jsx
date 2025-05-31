import React from "react";

const Modal = ({children}) => {
  return (
    <div class="card" style={{width: "70%", padding:"20px"}}>
      {children}
    </div>
  );
};

export default Modal;
