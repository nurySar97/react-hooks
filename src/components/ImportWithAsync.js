import React, { useEffect, useState } from "react";
const paths = [
  "useState",
  "useEffect",
  "useRef",
  "useMemo",
  "useCallback",
  "useContext",
  "useReducer",
  "useMedia",
  "useScreenSize",
];

const Default = () => {
  const [Components, setComponent] = useState([]);

  useEffect(() => {
    void (async function () {
      paths.forEach((path, index) => {
        setTimeout(async () => {
          const response = await import(`./${path}`);
          const Component = response.default;
          setComponent((prev) => [...prev, <Component key={index} />]);
        }, (index + 1) * 1000);
      });
    })();
  }, []);

  return (
    <div className="container p-3">
      <div className="row">
        {Components.length ? (
          Components
        ) : (
          <h1 className="w-100 text-center text-info">
            Components fetching...
          </h1>
        )}
      </div>
    </div>
  );
};

export default Default;
