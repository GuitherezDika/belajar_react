import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Profile from "./pages/Profile";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./app/store";
import { decrement, increment, reset } from "./features/counter/counterSlice";

// function App() {
//   return (<div style={{ padding: 24 }}>
//     <nav>
//       <Link to="/" >Home</Link>
//       <Link to="/about" >About</Link>
//       <Link to="/contact" >Contact</Link>
//       <Link to="/profile" >Profile</Link>

//     </nav>
//     <Routes>
//       <Route path="/" element={<Home/>} />
//       <Route path="/about" element={<About/>} />
//       <Route path="/contact" element={<Contact/>} />
//       <Route path="/profile" element={<Profile />} />

//       <Route path="*" element={<h2>404 Page Not Found</h2>} />
//     </Routes>
//   </div>);
// }

function App() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();
  // mengirimkan action ke Redux Store untuk ubah state

  return (
    <div style={{ padding: 24 }}>
      <h2>Redux Counter</h2>
      <h3>{count}</h3>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(reset())}>reset</button>
    </div>
  )
}
export default App;