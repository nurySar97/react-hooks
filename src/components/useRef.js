import React, { useEffect, useRef, useState } from 'react';

const UseRef = () => {
    const [value, setValue] = useState('initial');
    let renderCount = useRef(0);
    let setFocusToInput = useRef(null);
    let prevValue = useRef('initial');

    useEffect(() => {
        ++renderCount.current;
        setFocusToInput.current.focus();
    })

    useEffect(() => {
        prevValue.current = value;
    }, [value]);

    return (
        <div className='rounded col-12 bg-warning mt-5 p-4 text-light'>
            <h1>3) useRef</h1>
            <h1>Count of Renders {renderCount.current}</h1>
            <h2>Previous Value: {prevValue.current}</h2>
            <input
                ref={setFocusToInput}
                className='form-control'
                type="text" 
                value={value}
                onChange={e => setValue(e.target.value)}
            />
            <button className="btn btn-success mt-3" onClick={() => setFocusToInput.current.focus()}>Set Focus To Input</button>
        </div>
    )
}

export default UseRef;