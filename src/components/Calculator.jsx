import { useState } from "react";

const Calculator = () => {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    if (value === "C") {
      setInput("");
    } else if (value === "=") {
      try {
        setInput(eval(input).toString());
      } catch (error) {
        setInput("Error");
      }
    } else {
      setInput((prev) => prev + value);
    }
  };
  const numArray = [
    "7",
    "8",
    "9",
    "/",
    "4",
    "5",
    "6",
    "*",
    "1",
    "2",
    "3",
    "-",
    "0",
    "C",
    "=",
    "+",
  ];
  return (
    <div className="bg-color">
      <div className="main-container">
        <div className="display-container">{input || 0}</div>
        <div className="num-container">
          {numArray.map((num) => (
            <button className="num-btn" onClick={() => handleClick(num)}>
              {num}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calculator;
