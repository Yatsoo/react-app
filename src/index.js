import React from "react";
import ReactDOM from "react-dom";

import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div>
      <div className="App">
        <div className="container">
          <Weather defaultCity="Dublin" />
        </div>
        <div className="source-code">
          <small>
            <a
              href="https://github.com/Yatsoo/react-app"
              target="_blank"
              rel="noreferrer"
            >
              Open-source code
            </a>{" "}
            by Leila
          </small>
        </div>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
