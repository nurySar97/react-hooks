import React, { useEffect, useMemo, useState } from "react";

function complexCompute(num) {
  let i = 0;
  while (i < 1000000000) i++;
  return num;
}

const UseMemo = () => {
  const [number, setNumber] = useState(42);
  const [colored, setColored] = useState(true);
  // Caches
  const computed = useMemo(() => complexCompute(number), [number]);
  const styles = useMemo(
    () => ({ color: colored ? "red" : "black" }),
    [colored]
  );

  useEffect(() => {
    console.log("Style Changed");
  }, [styles]);

  return (
    <div className="col-12 border-radius-2 rounded mt-5 p-3 text-light bg-primary">
      <h1>useMemo</h1>
      <h2 style={styles}>computed property: {computed}</h2>
      <button
        className="btn mr-3 btn-success"
        onClick={() => setNumber((number) => number + 1)}
      >
        plus
      </button>
      <button
        className="btn mr-3 btn-danger"
        onClick={() => setNumber((number) => number - 1)}
      >
        minus
      </button>
      <button
        onClick={() => setColored((colored) => !colored)}
        className="btn btn-warning"
      >
        change color
      </button>
    </div>
  );
};

export default UseMemo;
