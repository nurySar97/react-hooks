import React from "react";
import { useMedia } from "../hooks";

const classes = {
  isSmallSmMedia: "h6",
  isSmallLgMedia: "h5",
  isMediumSmMedia: "h4",
  isMediumLgMedia: "h3",
  isLargeSmMedia: "h2",
  isLargeLgMedia: "h1",
};

const Default = () => {
  const sizes = useMedia();
  const currentKey = Object.keys(sizes).find((key) => sizes[key]);

  return (
    <div className="col-12 border-radius-2 rounded mt-5 p-3 text-light bg-danger">
      <h1>useMedia</h1>

      <pre className={`text-light ${classes[currentKey]}`}>
        {JSON.stringify(sizes, null, 2)}
      </pre>
    </div>
  );
};

export default Default;
