import Counter from "../components/Counter";
import Greeting from "../components/Greeting";
import NameInput from "../components/NameInput";
import NameList from "../components/NameList";
import TodoInput from "../components/TodoInput";
import UserList from "../components/UserList";

export default function About() {
  return <div>
  <h1>this is About page</h1>

    <h1>Belajar React + Typescript</h1>
    <Counter initial={5} label="Counter Utama" />
    <div style={{ height: 12 }} />
    <Counter initial={0} label="Counter Kedua" />
    <Greeting name="Guitherez" onGreet={(m) => console.log('Pesan dari anak:', m)} />
    <div style={{ height: 12 }} />
    <NameInput />
    <div style={{ height: 12 }} />
    <TodoInput />
    <div style={{ height: 12 }} />
    <NameList />
    <div style={{ height: 12 }} />
    <UserList />
  </div>
}