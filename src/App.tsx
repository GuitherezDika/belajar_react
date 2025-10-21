import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Profile from "./pages/Profile";

function App() {
  return (<div style={{ padding: 24 }}>
    <nav>
      <Link to="/" >Home</Link>
      <Link to="/about" >About</Link>
      <Link to="/contact" >Contact</Link>
      <Link to="/profile" >Profile</Link>

    </nav>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/profile" element={<Profile />} />

      <Route path="*" element={<h2>404 Page Not Found</h2>} />
    </Routes>
  </div>);
}

export default App;