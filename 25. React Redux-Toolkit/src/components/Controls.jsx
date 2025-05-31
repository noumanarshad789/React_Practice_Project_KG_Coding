import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { counterAction } from "../store/counter";
import { privacyAction } from "../store/privacy";

const Controls = () => {
  const dispatch = useDispatch();
  const inputElement = useRef();

  const handleIncrement = () => {
    dispatch(counterAction.increment());
  };

  const handleDecrement = () => {
    dispatch(counterAction.decrement());
  };

  const handleAddition = () => {
    dispatch(counterAction.add(inputElement.current.value));
    inputElement.current.value = "";
  };

  const handleSubtraction = () => {
    dispatch(counterAction.subtraction(inputElement.current.value));
    inputElement.current.value = "";
  };

  const handleToggle = () => {
    dispatch(privacyAction.toggle());
  };

  return (
    <>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button
          type="button"
          onClick={handleIncrement}
          className="btn btn-primary btn-lg px-4 gap-3"
        >
          +1
        </button>
        <button
          type="button"
          onClick={handleDecrement}
          className="btn btn-outline-secondary btn-lg px-4"
        >
          -1
        </button>
        <button
          type="button"
          onClick={handleToggle}
          className="btn btn-warning btn-lg px-4"
        >
          Private Counter
        </button>
      </div>

      {/* Second Controls */}
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mt-4">
        <input type="number" ref={inputElement} placeholder="Enter a number" />
        <button
          type="button"
          onClick={handleAddition}
          className="btn btn-success btn-lg px-4"
        >
          Add
        </button>
        <button
          type="button"
          onClick={handleSubtraction}
          className="btn btn-danger btn-lg px-4"
        >
          Subtration
        </button>
      </div>
    </>
  );
};

export default Controls;
