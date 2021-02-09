import logo from './logo.svg';
import './App.css';
import React, {useState} from "react";
function App() {
  const [count, setCount]= useState(0);
  const descCount = () =>{
    setCount(count - 1)
  };
  const incCount = () =>{
    setCount(count + 1)
  };
  const clearCount = () =>{
    setCount(0)
  };
  return (
    <main>
    <div className="card">
      <div className="counter-block">
        <h1>{count}</h1>
      </div>
      <div className="buttons">
        <button onClick={descCount}>-</button>
        <button onClick={incCount}>+</button>
        <button onClick={clearCount}>Clear</button>
      </div>
    </div>
    </main>
  );
}

export default App;

function Fun(){
return(
  <h1>Hello World</h1>
)
}
export default Fun;

