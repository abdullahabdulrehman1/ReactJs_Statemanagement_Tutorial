import React, { useState } from 'react';

export function NameList(){
const [List, setList] = useState(["Abdullah","Jill","Abdul Rehman"]);
return<>
<ul>
    {List.map((e)=> (<li key={e
    }>{e}</li>))}
    
    </ul>
</>

}




function UseStateHook() {
  const [first, setFirst] = useState(0);

  function onClickButton() {
    setFirst(first + 1);
  }

  return (
    <div>
      <button style = {{backgroundColor: 'green',display: 'flex-2',}} onClick={onClickButton}>Click {first}</button>
      <button style = {{backgroundColor: 'green',display: 'flex-1',}} onClick={onClickButton}>2 Click {first}</button>
      <button style = {{backgroundColor: 'green',display: 'flex-3',}} onClick={onClickButton}> 3Click {first}</button>
    </div>
  );
}

export default UseStateHook;
