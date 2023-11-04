import React from "react";
import "../styles/ButtonClear.css";

function ButtonClear(props) {
  return (
    <button className="button-clear" onClick={props.handleClear}>
      {props.children}
    </button>
  );
}

export default ButtonClear;
