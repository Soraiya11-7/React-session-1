import { useEffect, useState } from 'react'

import './App.css'
import Products from './components/products/products'

function App() {

  const [state, setState] = useState(0);  //initial value and function

let storageVar = 0;

const handleCounter = () => {
  setState(state+1);
}

const handleVariableCounter = (a=5) => {
  storageVar += 1;
  // console.log(storageVar);
}

// useEffect(arrow func, [dependencies])
useEffect( () => {
 console.log("Hello from useEffect");
} , [state])



  // object......
  const info = {
    message: "secret",
    contact: "01317899712"
  };

  return (
    <>
      <div>
        <h3>This is State count {state}</h3>
        <h3>This is Variable count {storageVar}</h3>
      </div>

      <button onClick={handleCounter}>Change State Count</button>
      <button onClick={() => handleVariableCounter(5)}>Change Variable Count</button>

      <h1>Vite + React</h1>
      <Products name={info}></Products>
    </>
  )
}

export default App
