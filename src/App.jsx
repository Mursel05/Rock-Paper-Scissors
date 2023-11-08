import React, { useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Choosing from "./components/Choosing.jsx";
import Rules from "./components/Rules.jsx";
import Game from "./components/Game.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss"
const App = () => {
  const [open, setOpen] = useState("container");
  const [score, setScore] = useState(0);
  return (
    <div className={open}>
      <div className="blur"></div>
      <BrowserRouter>
        <Navbar score={score} />
        <Routes>
          <Route exact path="/" element={<Choosing />} />
          <Route
            exact
            path="/game/:type"
            element={<Game onSetScore={setScore} />}
          />
        </Routes>
        <Rules onSetOpen={setOpen} />
      </BrowserRouter>
    </div>
  );
};

export default App;
