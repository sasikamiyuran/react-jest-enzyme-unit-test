import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [count, setCount] = React.useState(0);
  const [error, setError] = React.useState(false);

  return (
    <div data-test="component-app">
      <h1 data-test="counter-display">
        App Click Counter &nbsp;
        <span data-test="count">{count}</span>
      </h1>
      <div
        data-test="error-message"
        className={`error ${error ? "" : "hidden"}`}
      >
        The counter can't go below 0
      </div>
      <button
        onClick={() => setCount(count + 1)}
        data-test="increment-button"
        type="button"
      >
        Increment
      </button>
      <button
        onClick={() => {
          if (count > 0) {
            setCount(count - 1);
          } else {
            setError(true);
          }
        }}
        data-test="decrement-button"
      >
        Decrement
      </button>
    </div>
  );
}

export default App;
