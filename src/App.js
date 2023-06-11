import React from 'react';
import UseStateHook, { NameList } from './hooks/usestate';
import UserReducerHook ,{Againreducer, Name}from './hooks/usereducer';

function App() {
  return (
    <div className="App">
      <UseStateHook />
      <NameList />

      <UserReducerHook />
      <Againreducer />
      <Name />
    </div>
  );
}

export default App;
