import React, { useState, useEffect } from "react";

const UseEffect = () => {
  const [type, setType] = useState("users");
  const [data, setData] = useState([]);
  const [showData, setShowData] = useState({
    name: "Show Data",
    isShow: false,
  });

  const showDataToggleHandleClick = () => {
    if (showData.isShow) {
      setShowData({ name: "Show Data", isShow: false });
    } else {
      setShowData({ name: "Hide Data", isShow: true });
    }
  };

  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((response) => response.json())
      .then((json) => setData(json));
  }, [type]);

  const mouseMoveHandler = (e) => {
    setPosition({
      x: e.clientX,
      y: e.clientY,
    });
  };

  useEffect(() => {
    console.log("ComponentDidMount");
    window.addEventListener("mousemove", mouseMoveHandler);
    return () => window.removeEventListener("mousemove", mouseMoveHandler);
  }, []);

  return (
    <div className="col-12 border-radius-2 rounded mt-5 p-3 text-light bg-secondary">
      <h1>useEffect</h1>
      <h2>resourses: {type}</h2>
      <button className="btn btn-warning mr-3" onClick={() => setType("users")}>
        users
      </button>
      <button className="btn btn-primary mr-3" onClick={() => setType("todos")}>
        todo
      </button>
      <button className="btn btn-success mr-3" onClick={() => setType("posts")}>
        posts
      </button>

      <button className="btn btn-danger" onClick={showDataToggleHandleClick}>
        {showData.name}
      </button>
      <pre
        style={{ display: showData.isShow ? "block" : "none" }}
        className="text-light"
      >
        {JSON.stringify(data, null, 2)}
      </pre>
      <pre className="text-light mt-3">{JSON.stringify(position, null, 2)}</pre>
    </div>
  );
};

export default UseEffect;
