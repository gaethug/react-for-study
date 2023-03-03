import logo from "./logo.svg";
import "./App.css";
import Count from "./components/count";
import ProductList from "./components/product-list";
import { useState } from "react";

function App() {
  let [count, setCount] = useState(0);
  let [checked, setCheckedState] = useState(false);

  const handleChecked = () => {
    console.log("checked", checked);
    setCheckedState(!checked);
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <input type="checkbox" checked={checked} onChange={handleChecked} />
        <h1>{String(checked)}</h1>
        {checked && <h1>{String(checked)}</h1>}
        <Count count={count} handleSetCount={setCount} />
        <ProductList />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
