import React, { useReducer } from "react";



export function Name() {
    const [count, dispatch] = useReducer(
      (state, action) => ({
        ...state,
        ...action,
      }),
      { first: "", last: "" }
    );
  
    return (
      <div>
        <input
          type="text"
          value={count.first}
          onChange={(e) => {
            dispatch({ first: e.target.value });
          }}
        />
        <input
          type="text"
          value={count.last}
          onChange={(e) => {
            dispatch({ last: e.target.value });
          }}
        />
        <div>
          First Name: {count.first}
          <br />
          Last Name: {count.last}
        </div>
      </div>
    );
  }
  
  
  
  
export function Againreducer() {
  const currentstate = 0;
  const reducer = (state, action) => {
    switch (action) {
      case "inc":
        return state + 1;
      case "dec":
        return state - 1;
      default:
        return state;
    }
  };

  const [counting, dispatch] = useReducer(reducer, currentstate);
  return (
    <div>
      <h1>{counting}</h1>
      <button onClick={() => dispatch("inc")}>INC</button>
      <button onClick={() => dispatch("dec")}>DEC</button>
    </div>
  );
}

export function  Againagainreducer(){
    const initstate = 0;
    const reducer = (state, action)=>{
        switch(action)
     {   case 'add':
     return state+1;
     case 'sub':
        return state-1;
        default :
        return state;
         };    }
    const [countin, dispatch]= useReducer(reducer,initstate)
return (<div>

<button onClick={()=> (dispatch('add'))}>add</button>
<button onClick={()=> (dispatch('sub'))}>sub</button>
<h1>{countin}</h1>
{/* <h1>{Againagainreducer.arguments}</h1> */}


</div>);
}
const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      return state;
  }
};
function UseReducerHook() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
        <Name />
      <div>
        <h1 style={{ fontSize: "199" }}>{count}</h1>
      </div>
      <button onClick={() => dispatch("increment")}>Increament</button>
      <button onClick={() => dispatch("decrement")}>Decrement </button>
      <Againreducer />
    </div>
  );
}

export default UseReducerHook;

//learn
// use reducer hoook will take two things useReducer (reducer function, intial state);
//reducer is the pure function // reducer is like function/// pure function is function that does provide same output if the same input turns in
