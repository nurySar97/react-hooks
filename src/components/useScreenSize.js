import React from "react";
import { useScreenSize } from "./../hooks";

const UseRef = () => {
  const screenWidth = useScreenSize();
  return (
    <div className="col-12 border-radius-2 rounded mt-5 p-3 text-dark bg-warning">
      <h1>useScreenSize</h1>
      <h2>Screen width: {screenWidth}px</h2>
    </div>
  );
};

export default UseRef;
