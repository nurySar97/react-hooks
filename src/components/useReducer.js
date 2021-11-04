import React, { useContext, useReducer } from "react";
const AlertContext = React.createContext(null);
const SHOW = "SHOW";
const HIDE = "HIDE";

const reducer = (state, action) => {
  switch (action.type) {
    case SHOW:
      return { ...state, visible: true };
    case HIDE:
      return { ...state, visible: false };
    default:
      return state;
  }
};

const AlertProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    visible: false,
  });

  const show = () => dispatch({ type: SHOW });
  const hide = () => dispatch({ type: HIDE });

  return (
    <AlertContext.Provider value={{ state, show, hide }}>
      {children}
    </AlertContext.Provider>
  );
};

const Alert = () => {
  const visible = useContext(AlertContext).state.visible;
  const hide = useContext(AlertContext).hide;

  if (!visible) return null;
  return (
    <div className="alert alert-danger">
      <p className="m-0 p-0">this is so importont message</p>
      <button className="btn btn-danger mt-3" onClick={hide}>
        Hide Alert
      </button>
    </div>
  );
};

const Main = () => {
  const show = useContext(AlertContext).show;
  return (
    <>
      <h2>hello example of context API</h2>
      <button className="btn btn-success" onClick={show}>
        show alert
      </button>
    </>
  );
};

const UseReducer = () => {
  return (
    <div className="col-12 border-radius-2 rounded mt-5 p-3 text-light bg-info">
      <h1>useReducer</h1>
      <AlertProvider>
        <Alert />
        <Main />
      </AlertProvider>
    </div>
  );
};

export default UseReducer;
