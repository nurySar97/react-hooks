import React, { useContext, useState } from "react";
const AlertContext = React.createContext(null);

const AlertProvider = ({ children }) => {
  const [alert, setAlert] = useState(false);
  const toggleAlert = () => setAlert((alert) => !alert);
  return (
    <AlertContext.Provider value={{ alert, toggleAlert }}>
      {children}
    </AlertContext.Provider>
  );
};

const Alert = () => {
  const alert = useContext(AlertContext).alert;

  if (!alert) return null;
  return (
    <div className="alert alert-danger">
      <p className="m-0 p-0">this is so importont message</p>
    </div>
  );
};

const Main = () => {
  const toggleAlert = useContext(AlertContext).toggleAlert;

  return (
    <>
      <h2>hello, example of context API</h2>
      <button className="btn btn-success" onClick={toggleAlert}>
        show alert
      </button>
    </>
  );
};

const UseContext = () => {
  return (
    <div className="col-12 border-radius-2 rounded mt-5 p-3 text-light bg-secondary">
      <h1>useContext</h1>
      <AlertProvider>
        <Alert />
        <Main />
      </AlertProvider>
    </div>
  );
};

export default UseContext;
