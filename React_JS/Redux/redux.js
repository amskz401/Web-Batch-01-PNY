const redux = require("redux");

// default values
const DEV_VAL = {
  name: "",
  counter: 0,
};
// reducer
const reducer = (state = DEV_VAL, action) => {
  console.log(state, action);
  if (action.type == "name") {
    return { name: action.data, counter: state.counter };
  } else if (action.type == "counter") {
    return { name: action.data, counter: (state.counter += 1) };
  }
  return state;
};

// store
const store = redux.createStore(reducer);

// subscriber
const subscriber = () => {
  const state = store.getState();
  console.log(state);
};

// subscribe
store.subscribe(subscriber);

// actions
store.dispatch({ type: "name", data: "Farhan" });
store.dispatch({ type: "counter" });
