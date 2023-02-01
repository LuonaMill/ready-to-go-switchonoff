import "./App.css";
import { useState } from "react";

const App = () => {
  const [switch1, setSwitch1] = useState(false);
  const [switch2, setSwitch2] = useState(false);
  const [switch3, setSwitch3] = useState(false);

  return (
    <div className="App">
      <header>Ready To Go</header>
      <section className="switchAndGoNoGo">
        <section className="onOff">
          <div className="first">
            <button
              className={switch1 ? "purple" : ""}
              onClick={() => {
                setSwitch1(!switch1);
              }}
            >
              ON
            </button>
            <button
              onClick={() => {
                setSwitch1(!switch1);
              }}
              className="purple"
            >
              OFF
            </button>
          </div>
          <div className="second"></div>
          <div className="third"></div>
        </section>
        <section className="goNogo"></section>
      </section>

      <footer>Made with React at Le Reacteur by Laurine</footer>
    </div>
  );
};

export default App;
