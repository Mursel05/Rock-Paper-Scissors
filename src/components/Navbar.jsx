import React from "react";

const Navbar = ({score}) => {
  return (
    <div className="navbar">
      <h1>ROCK PAPER SCISSORS</h1>
      <div className="score">
        <span>SCORE</span>
        <p>{score}</p>
      </div>
    </div>
  );
};

export default Navbar;
