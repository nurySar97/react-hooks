import React, { useState } from "react";

const computeInitialCounter = () => {
  console.log("Computed");
  return Math.trunc(Math.random() * 20);
};

const UseState = () => {
  const [count, setCount] = useState(computeInitialCounter);

  const [state, setState] = useState({
    title: "Counter",
    date: Date.now(),
  });

  const increment = () => {
    setCount((count) => count + 1);
    setCount((count) => count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const updateTitle = () => {
    setState((state) => ({ ...state, title: `Counter:${count}` }));
  };

  return (
    <section className="col-12 border-radius-2 rounded mt-5 p-3 text-light bg-danger">
      <h1>useState</h1>
      <h2 className="text-light">counter: {count}</h2>
      <button onClick={increment} className="btn btn-success mr-3">
        plus
      </button>
      <button onClick={decrement} className="btn btn-dark mr-3">
        minus
      </button>

      <button onClick={updateTitle} className="btn btn-secondary">
        change title
      </button>
      <pre className="pt-3 text-light h3">{JSON.stringify(state, null, 2)}</pre>
    </section>
  );
};

export default UseState;
