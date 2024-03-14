import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Socials from "./components/Socials";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div>
        <a href="https://cheesesaucecoin.vercel.app/" target="_blank">
          <img
            src="/cheesesaucelogo.jpg"
            className="logo"
            alt="Cheese Sauce logo"
          />
        </a>
      </div>
      <h1>Cheesesauce Coin</h1>
      <div className="card">
        <p>Now serving the cheesiest, gooy-est cheese on Plant Radix!</p>
        <br />
        <p>
          <Socials />
        </p>
      </div>
    </div>
  );
}

export default App;
