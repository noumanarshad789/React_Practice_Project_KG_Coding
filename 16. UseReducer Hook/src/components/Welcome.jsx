import React, { useContext } from "react";
import { Context } from "../store/Context";

export const Welcome = () => {
  const {todoItem} = useContext(Context)
  
    return (
    <>
      {todoItem.length <= 0 && (
        <h1 className="text-md text-center mt-5 text-bold">
          Enjoy today because no task is left.
        </h1>
      )}
    </>
  );
};
