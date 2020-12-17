import React, { useContext, useState } from 'react'
const AlertContext = React.createContext(null)



const AlertProvider = ({ children }) => {
    const [alert, setAlert] = useState(false)
    const toggleAlert = () => setAlert(alert => !alert)
    return <AlertContext.Provider value={{ alert, toggleAlert }}>
        {children}
    </AlertContext.Provider>
}



const Alert = () => {
    let alert = useContext(AlertContext).alert

    if (!alert) return null
    return <div className="alert alert-danger">
        <p className="m-0 p-0">This Is So Importont Message</p>
    </div>
}



const Main = () => {
    let toggleAlert = useContext(AlertContext).toggleAlert

    return <>
        <h1>Hello Example Of Context API</h1>
        <button className="btn btn-success" onClick={toggleAlert}>Show Alert</button>
    </>
}



const UseContext = () => {

    return (
        <div className='col-12 rounded bg-secondary p-4 text-light mt-5'>
            <h1>6) useContext</h1>
            <AlertProvider>
                <Alert />
                <Main />
            </AlertProvider>
        </div>
    )
}

export default UseContext;