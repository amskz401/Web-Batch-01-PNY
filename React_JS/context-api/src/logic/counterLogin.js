export const reducer = (state, action) => {
  console.log(state, action);
  if (action.type == "inc") {
    return { counterVal: (state.counterVal += 1) };
  } else if (action.type == "dec") {
    return { counterVal: (state.counterVal -= 1) };
  } else if (action.type == "add") {
    return { counterVal: state.counterVal + Number(action.value) };
  } else if (action.type == "rem") {
    return { counterVal: state.counterVal - Number(action.value) };
  }
  return state;
};
