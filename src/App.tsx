import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/cheesesaucelogo.jpg" className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>Cheesesauce Coin</h1>
      <div className="card">
        <p>get your Cheese Sauce on Radix</p>
      </div>
    </div>
  );
}

export default App;
