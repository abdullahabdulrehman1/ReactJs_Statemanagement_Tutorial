import React, { useState } from "react";

export function NameList() {
  const [List, setList] = useState(["Abdullah", "Jill", "Abdul Rehman"]);
  //()=> "abdullah" means that the useState initially on start will show this state;
  const [name, setName] = useState(() => "Abdullah");
  const addName = () => {
    // List.push(name);
    // setLIsh ([...List,name]) would return the name updateed state to the list
    setList([...List, name]);
    //setName(''); means that the setname would return empty set at after the first engagement like 
    setName('');
  };  

  return (
    <>
      <ul>
        {List.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button onClick={addName}>
        Add name
      </button>
    </>
  ); 
}



function UseStateHook() {
  const [first, setFirst] = useState(0);

  function onClickButton() {
    setFirst(first + 1);
  }

  return (
    <div>
      <button
        style={{ backgroundColor: "green", display: "flex-2" }}
        onClick={onClickButton}
      >
        Click {first}
      </button>
      <button
        style={{ backgroundColor: "green", display: "flex-1" }}
        onClick={onClickButton}
      >
        2 Click {first}
      </button>
      <button
        style={{ backgroundColor: "green", display: "flex-3" }}
        onClick={onClickButton}
      >
        {" "}
        3Click {first}
      </button>
      <Usestatereduce />
    </div>
  );
}
export function Usestatereduce(){
  const [count] = useState([1,4,6]);
  const total =  count.reduce((init,count)=>count +init,0);
  return(
    <div>{total}</div>
  );
}

export default UseStateHook;
