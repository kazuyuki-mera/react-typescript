import React, { useReducer } from 'react';

const initialState = { count: 0 };

function reducer(state: any, action: any) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}
function CounterWithReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <div></div>;
}

export default CounterWithReducer;