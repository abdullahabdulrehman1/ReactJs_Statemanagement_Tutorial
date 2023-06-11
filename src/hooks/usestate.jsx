import React, { useState } from "react";

export function NameList() {
  const [List, setList] = useState(["Abdullah", "Jill", "Abdul Rehman"]);
  const [name, setName] = useState("");
  const addName = () => {
    // List.push(name);
    setList([...List, name]);
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
    </div>
  );
}

export default UseStateHook;