import "./App.css";
import Button from "./components/Button";
import Screen from "./components/screen";
import ButtonClear from "./components/ButtonClear";
import { useState } from "react";
import { evaluate } from "mathjs";

function App() {
  //we set the useState
  const [input, setInput] = useState("");

  const addInput = (val) => {
    setInput(input + val);
  };

  const handleClear = () => setInput("");

  const calculateResult = () =>
    input ? setInput(evaluate(input)) : alert("Please enter a value"); //it checks if input is truthy.

  return (
    <div className="App">
      <div className="container-calculator">
        <Screen input={input} />
        {/*create calculator rows*/}
        <div className="row">
          <Button handleClick={addInput}>1</Button>
          <Button handleClick={addInput}>2</Button>
          <Button handleClick={addInput}>3</Button>
          <Button handleClick={addInput}>+</Button>
        </div>
        <div className="row">
          <Button handleClick={addInput}>4</Button>
          <Button handleClick={addInput}>5</Button>
          <Button handleClick={addInput}>6</Button>
          <Button handleClick={addInput}>-</Button>
        </div>
        <div className="row">
          <Button handleClick={addInput}>7</Button>
          <Button handleClick={addInput}>8</Button>
          <Button handleClick={addInput}>9</Button>
          <Button handleClick={addInput}>*</Button>
        </div>
        <div className="row">
          <Button handleClick={calculateResult}>=</Button>
          <Button handleClick={addInput}>0</Button>
          <Button handleClick={addInput}>.</Button>
          <Button handleClick={addInput}>/</Button>
        </div>
        <div className="row">
          <ButtonClear handleClear={handleClear}>Clear</ButtonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
