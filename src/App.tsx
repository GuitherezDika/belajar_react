import React from "react";
import Counter from "./components/Counter";
import Greeting from "./components/Greeting";
import NameInput from "./components/NameInput";
import TodoInput from "./components/TodoInput";

function App() {
  return (<div style={{ padding: 24 }}>
    <h1>Belajar React + Typescript</h1>
    <Counter initial={5} label="Counter Utama" />
    <div style={{ height: 12 }} />
    <Counter initial={0} label="Counter Kedua" />
    <Greeting name="Guitherez" onGreet={(m) => console.log('Pesan dari anak:', m)} />
    <div style={{ height: 12 }} />
    <NameInput />
    <div style={{ height: 12 }} />
    <TodoInput />
  </div>);
}

export default App;