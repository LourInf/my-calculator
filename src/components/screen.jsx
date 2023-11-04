import React from "react";
import "../styles/Screen.css";

//another way of writting it would be by using the arrow function: "const Screen = ({ input }) => <div className="input">{input}</div>;"
function Screen({ input }) {
  return <div className="input">{input}</div>;
}

export default Screen;
