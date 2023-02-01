import "./App.css";
import { useState } from "react";
import purpleRocketImg from "./img/purple-rocket.png";

const App = () => {
  const [switch1, setSwitch1] = useState(false);
  const [switch2, setSwitch2] = useState(false);
  const [switch3, setSwitch3] = useState(false);

  return (
    <body>
      <div className="App">
        <header>
          <img src={purpleRocketImg} alt="image-fusee" />
          <p>Ready To Go</p>{" "}
        </header>
        <section className="switchAndGoNoGo">
          <section className="onOff">
            <div className="first">
              <button
                className={switch1 === true ? "purple" : ""}
                onClick={() => {
                  setSwitch1(true);
                }}
              >
                ON
              </button>
              <button
                onClick={() => {
                  setSwitch1(false);
                }}
                className={switch1 === false ? "purple" : ""}
              >
                OFF
              </button>
            </div>
            <div className="second">
              <button
                className={switch2 === true ? "purple" : ""}
                onClick={() => {
                  setSwitch2(true);
                }}
              >
                ON
              </button>
              <button
                onClick={() => {
                  setSwitch2(false);
                }}
                className={switch2 === false ? "purple" : ""}
              >
                OFF
              </button>
            </div>
            <div className="third">
              <button
                className={switch3 === true ? "purple" : ""}
                onClick={() => {
                  setSwitch3(true);
                }}
              >
                ON
              </button>
              <button
                onClick={() => {
                  setSwitch3(false);
                }}
                className={switch3 === false ? "purple" : ""}
              >
                OFF
              </button>
            </div>
          </section>
          <section className="goNogo">
            {switch1 && switch2 && switch3 ? (
              <div className="go">Go!</div>
            ) : (
              <div className="noway">No way !</div>
            )}
          </section>
        </section>

        <footer>
          <p>
            Made with <span style={{ fontWeight: "bold" }}>React</span> at{" "}
            <span style={{ fontWeight: "bold" }}>Le Reacteur</span> by{" "}
            <span style={{ fontWeight: "bold" }}>Laurine</span>
          </p>{" "}
        </footer>
      </div>
    </body>
  );
};

export default App;
