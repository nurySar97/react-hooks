import React, { useEffect, useRef, useState } from "react";

const UseRef = () => {
  const [value, setValue] = useState("initial");
  const renderCount = useRef(0);
  const setFocusToInput = useRef(null);
  const prevValue = useRef("initial");

  useEffect(() => {
    ++renderCount.current;
    setFocusToInput.current.focus();
  });

  useEffect(() => {
    prevValue.current = value;
  }, [value]);

  return (
    <div className="col-12 border-radius-2 rounded mt-5 p-3 text-dark bg-warning">
      <h1>useRef</h1>
      <h2>count of renders {renderCount.current}</h2>
      <h2>previous Value: {prevValue.current}</h2>
      <input
        ref={setFocusToInput}
        className="form-control"
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        className="btn btn-success mt-3"
        onClick={() => setFocusToInput.current.focus()}
      >
        set focus to input
      </button>
    </div>
  );
};

export default UseRef;
