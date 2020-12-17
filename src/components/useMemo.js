import React, { useEffect, useMemo, useState } from 'react'

function complexCompute(num) {
    let i = 0;
    while (i < 1000000000) i++
    return num
}



const UseMemo = () => {
    const [number, setNumber] = useState(42)
    const [colored, setColored] = useState(true)

    const computed = useMemo(() => complexCompute(number), [number])
    // const styles = useMemo(() => ({ color: colored ? "red" : "black" }), [colored])
    const styles = { color: colored ? "red" : "black" }

    useEffect(() => {
        console.log("Style Changed")
    }, [styles.color])
    return (
        <div className='col-12 bg-primary mt-5 p-4 text-light'>
            <h1>4) useMemo</h1>
            <h1 style={styles}>Computed Property: {computed}</h1>
            <button className="btn mr-3 btn-success" onClick={() => setNumber(number => number + 1)}>Plus</button>
            <button className="btn mr-3 btn-danger" onClick={() => setNumber(number => number - 1)}>Minus</button>
            <button onClick={() => setColored(colored => !colored)} className="btn btn-warning">Change Color</button>
        </div>
    )
}

export default UseMemo
