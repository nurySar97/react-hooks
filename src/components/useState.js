import React, { useState } from 'react'

let computeInitialCounter = () => {
    console.log("Computed");
    return Math.trunc(Math.random() * 20);
};

const UseState = () => {
    const [count, setCount] = useState(computeInitialCounter);

    let [state, setState] = useState({
        title: "Counter",
        date: Date.now()
    });

    let increment = () => {
        setCount(count => count + 1);
        setCount(count => count + 1);
    };

    let decrement = () => {
        setCount(count - 1)
    };

    let updateTitle = () => {
        setState(state => ({ ...state, title: `Counter:${count}` }))
    };

    return (
        <div className='col-12 border-radius-2 bg-danger rounded text-light mt-5 p-4'>
            <h1>1) useState</h1>
            <h1 className="text-light">Counter: {count}</h1>
            <button onClick={increment} className='btn btn-success mr-3'>Plus</button>
            <button onClick={decrement} className='btn btn-dark mr-3'>Minus</button>

            <button onClick={updateTitle} className='btn btn-secondary'>Change Title</button>
            <pre className='pt-3 text-light h3'>{JSON.stringify(state, null, 2)}</pre>
        </div>
    )
}

export default UseState