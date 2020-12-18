import React, { useContext, useReducer } from 'react'
const AlertContext = React.createContext(null)
const SHOW = 'SHOW';
const HIDE = 'HIDE';


const reducer = (state, action) => {
    switch (action.type) {
        case SHOW:
            return { ...state, visible: true }
        case HIDE:
            return { ...state, visible: false }
        default: return state
    }
}


const AlertProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, {
        visible: false
    })

    const show = () => dispatch({ type: SHOW })
    const hide = () => dispatch({ type: HIDE })

    return <AlertContext.Provider value={{ state, show, hide }}>
        {children}
    </AlertContext.Provider>
}



const Alert = () => {
    let visible = useContext(AlertContext).state.visible
    let hide = useContext(AlertContext).hide

    if (!visible) return null
    return <div className="alert alert-danger">
        <p className="m-0 p-0">This Is So Importont Message</p>
        <button className="btn btn-danger mt-3" onClick={hide}>Hide Alert</button>
    </div>
}



const Main = () => {
    let show = useContext(AlertContext).show
    return <>
        <h1>Hello Example Of Context API</h1>
        <button className="btn btn-success" onClick={show}>Show Alert</button>
    </>
}



const UseReducer = () => {

    return (
        <div className='col-12 rounded bg-info p-4 text-light mt-5 mb-5'>
            <h1>7) useReducer</h1>
            <AlertProvider>
                <Alert />
                <Main />
            </AlertProvider>
        </div>
    )
}

export default UseReducer;