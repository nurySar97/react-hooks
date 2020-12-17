import React, { useEffect, useState } from 'react';


function ImportWithAsync() {
  let [Components, setComponent] = useState([])

  useEffect(() => {
    let fetch = async () => {
      let { default: Component0 } = await import('./useState')
      let { default: Component1 } = await import('./useEffect')
      let { default: Component2 } = await import('./useRef')
      let { default: Component3 } = await import('./useMemo')
      let { default: Component4 } = await import('./useCallback')
      let { default: Component5 } = await import('./useContext')
      let { default: Component6 } = await import('./useReducer')

      Promise.resolve().then(() => {
        setTimeout(() => {
          setComponent([<Component0 key="0" />])
        }, 1500)
      }).then(() => {
        setTimeout(() => {
          setComponent(e => [...e, <Component1 key="1" />])
        }, 3000)
      }).then(() => {
        setTimeout(() => {
          setComponent(e => [...e, <Component2 key="2" />])
        }, 4500)
      }).then(() => {
        setTimeout(() => {
          setComponent(e => [...e, <Component3 key="3" />])
        }, 6000)
      }).then(() => {
        setTimeout(() => {
          setComponent(e => [...e, <Component4 key="4" />])
        }, 7500)
      }).then(() => {
        setTimeout(() => {
          setComponent(e => [...e, <Component5 key="5" />])
        }, 9000)
      }).then(() => {
        setTimeout(() => {
          setComponent(e => [...e, <Component6 key="6" />])
        }, 10500)
      })
    }
    fetch()
  }, [])
  return (
    <div className="container mt-4 dark">
      <div className="row">
        {
          Components.length ? Components : <h1 className="w-100 text-center text-danger">Components fetching...</h1>
        }
      </div>
    </div>
  );
}

export default ImportWithAsync;
