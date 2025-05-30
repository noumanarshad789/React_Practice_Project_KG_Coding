const redux = require("redux");

const INITIAL_VALUE = {
  counter: 0,
};

// Step # 1
const reducer = (store = INITIAL_VALUE, action) => {
  let newStore = store;
  if (action.type === "INCREMENT") {
    newStore = { counter: store.counter + 1 };
  }
  else if (action.type === "DECREMENT") {
    newStore = { counter: store.counter - 1 };
  }
  else if (action.type === "ADDITION") {
    newStore = { counter: store.counter + action.payload.number };
  }
  return newStore;
};

// Step # 2
const store = redux.createStore(reducer);

// Step # 3 : This method can just read the current value.
const subscriber = () => {
  const state = store.getState();
  console.log(state);
};

// This can call the updated value from the store and then passed to above method "subscriber" to get current value.
store.subscribe(subscriber);

// Step # 4 : Here we dispatch.
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "DECREMENT" });
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "DECREMENT" });
store.dispatch({ type: "ADDITION", payload: { number: 7 } });
