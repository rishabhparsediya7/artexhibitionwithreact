import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import "./App.css";
import EventsExhibition from "./Components/EventsExhibition";

function App() {
  const navbarShadow=true;
 
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<EventsExhibition props={navbarShadow} />} />
      </Routes>
    </Router>
  );
}

export default App;
