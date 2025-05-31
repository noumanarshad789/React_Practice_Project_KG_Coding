import React from "react";
import { useSelector } from "react-redux";

export const DisplayCounter = () => {

  const counter = useSelector(store => store.counter) // Through this we can performed subscription.
  return (
    <p className="lead mb-4">
      Display the COUNTER value : {counter}
    </p>
  );
};
