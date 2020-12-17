import React, { useCallback, useEffect, useState } from 'react'



const ItemsList = ({ getItems }) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        console.log("Items List")
        const newItems = getItems();
        setItems(newItems)
    }, [getItems])
    console.log("List Item Rendered")
    return <ul>
        {
            items.map(element => <li key={element}>{element}</li>)
        }
    </ul>
}




const UseCallback = () => {
    const [count, setCount] = useState(0);
    const [colored, setColored] = useState(true)
    const styles = { color: colored ? "red" : "black" }

    const generateItemsFromAPI = useCallback(() => new Array(count).fill(1).map((_, index) => `Element: ${index + 1}`), [count])

    return (
        <div className='col-12 bg-success p-4 text-light mt-5'>
            <h1 style={styles}>5) useCallback</h1>
            <h1>Count Of Elements: {count}</h1>
            <button className="btn mr-3 btn-info" onClick={() => setCount(count => count + 1)}>Plus</button>
            <button onClick={() => setColored(colored => !colored)} className="btn btn-warning">Change Color</button>
            <ItemsList getItems={generateItemsFromAPI} />
        </div>
    )
}





export default UseCallback;