import React from "react";
import "../styles/Button.css";

function Button(props) {
  //we definne the isOperator
  const isOperator = (value) => {
    //if it's not a number, a dot nor an equal sign, isOperator is true (we consider it as operator), otherwise it will turn False
    return isNaN(value) && value != "." && value != "=";
  };
  return (
    <div
      //we create a dynamic className: we have a static class "button-container" but if the "isOperator turns true then it will apply another class called "operator"
      className={`button-container ${
        isOperator(props.children) ? "operator" : " "
      }`.trimEnd()}
      onClick={() => props.handleClick(props.children)}
    >
      {props.children}
    </div>
  );
}

export default Button;
