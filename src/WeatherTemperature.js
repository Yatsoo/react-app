import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        <h5>
          <span>{Math.round(props.celsius)}°C</span>
        </h5>
        <small>
          C |{" "}
          <a href="/" onClick={showFahrenheit}>
            F
          </a>
        </small>
      </div>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <div className="WeatherTemperature">
        <h5>
          <span>{Math.round(fahrenheit)}°F</span>
        </h5>
        <small>
          <a href="/" onClick={showCelsius}>
            C{" "}
          </a>{" "}
          | F
        </small>
      </div>
    );
  }
}
