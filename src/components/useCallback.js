import React, { useCallback, useEffect, useState } from "react";

const ItemsList = ({ getItems }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    console.log("Items List");
    const newItems = getItems();
    setItems(newItems);
  }, [getItems]);

  return (
    <ul>
      {items.map((element) => (
        <li key={element}>{element}</li>
      ))}
    </ul>
  );
};

const UseCallback = () => {
  const [count, setCount] = useState(0);
  const [colored, setColored] = useState(true);
  const styles = { color: colored ? "red" : "black" };

  const generateItemsFromAPI = useCallback(() => {
    return new Array(count).fill(1).map((_, index) => `Element: ${index + 1}`);
  }, [count]);

  return (
    <div className="col-12 border-radius-2 rounded mt-5 p-3 text-light bg-success">
      <h1 style={styles}>useCallback</h1>
      <h2>count of elements: {count}</h2>
      <button
        className="btn mr-3 btn-info"
        onClick={() => setCount((count) => count + 1)}
      >
        plus
      </button>
      <button
        onClick={() => setColored((colored) => !colored)}
        className="btn btn-warning"
      >
        change color
      </button>
      <ItemsList getItems={generateItemsFromAPI} />
    </div>
  );
};

export default UseCallback;
