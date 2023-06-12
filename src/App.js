import React from 'react';
import UseStateHook, { NameList } from './hooks/usestate';
import UserReducerHook ,{Againreducer, Name, Usereduce}from './hooks/usereducer';
import Usememohook from './hooks/usememo';
import Useeffecthook from './hooks/useeffect';
import Userefhook from './hooks/useref';

function App() {
  return (
    <div className="App">
      <UseStateHook />
      <NameList />

      <UserReducerHook />
      <Againreducer />
      <Usereduce />
      <Name />
      {/* <Usememohook/> */}
      <Useeffecthook />
      <Userefhook />
    </div>
  );
}

export default App;
