import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./component/Home";
import About from "./component/About";
import Work from "./component/Work";
import Contact from "./component/Contact";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}
export default App;
