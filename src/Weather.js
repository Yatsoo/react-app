import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import axios from "axios";
import "./weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),

      temperature: response.data.main.temp,
      icon: "https://img.icons8.com/nolan/64/rain.png",
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="currentdayweather">
        <div className="card-deck">
          <div className="card text-left" style={{ maxWidth: "18rem" }}>
            <div className="card-header">
              <h1>
                <span>{weatherData.city}</span>
              </h1>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col">
                  <FormattedDate date={weatherData.date} />
                </div>
                <div className="col">
                  <h3>
                    <span>{Math.round(weatherData.temperature)}°C</span>
                  </h3>
                  <p>
                    <a href="/" className="active">
                      C{" "}
                    </a>{" "}
                    | <a href="/">F</a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="card text-right searchbar">
            <div className="card-body">
              <form className="form-inline">
                <div className="form-group mx-sm-3 mb-2">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter a City"
                    autoComplete="off"
                    autoFocus="on"
                  />
                </div>
                <span className="searchbutton">
                  <button
                    type="submit"
                    className="btn btn-primary mb-2"
                    value="Search"
                  >
                    Search
                  </button>
                </span>
              </form>
            </div>
            <div className="card-body">
              <div className="extrainfo text-left">
                <ul>
                  <li>
                    <img
                      src={weatherData.icon}
                      className="card-img"
                      alt={weatherData.description}
                    />
                  </li>
                  <li>
                    <span className="text-capitalize">
                      {weatherData.description}
                    </span>
                  </li>
                  <li>
                    <hr className="line" />
                  </li>
                  <li>
                    Humidity: <span>{weatherData.humidity}</span>%
                  </li>
                  <li>
                    Wind: <span>{weatherData.wind}</span> km/h
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <hr />

        <div className="weeklytemperature">
          <div className="row">
            <div className="col d-flex justify-content-center">
              <div className="card text-center">
                <div className="card-header">Saturday</div>
                <img
                  src="https://img.icons8.com/nolan/64/smiling-sun.png"
                  className="card-img-top"
                  alt="sun shining"
                />
                <div className="card-footer">23°C</div>
              </div>
            </div>

            <div className="col d-flex justify-content-center">
              <div className="card text-center">
                <div className="card-header">Sunday</div>
                <img
                  src="https://img.icons8.com/nolan/64/partly-cloudy-day.png"
                  className="card-img-top"
                  alt="cloud sun"
                />
                <div className="card-footer">19°C</div>
              </div>
            </div>

            <div className="col d-flex justify-content-center">
              <div className="card text-center">
                <div className="card-header">Monday</div>
                <img
                  src="https://img.icons8.com/nolan/64/clouds.png"
                  className="card-img-top"
                  alt="clouds"
                />
                <div className="card-footer">21°C</div>
              </div>
            </div>

            <div className="col d-flex justify-content-center">
              <div className="card text-center">
                <div className="card-header">Tuesday</div>
                <img
                  src="https://img.icons8.com/nolan/64/partly-cloudy-day.png"
                  className="card-img-top"
                  alt="partly cloudy"
                />
                <div className="card-footer">17°C</div>
              </div>
            </div>

            <div className="col d-flex justify-content-center">
              <div className="card text-center">
                <div className="card-header">Wednesday</div>
                <img
                  src="https://img.icons8.com/nolan/64/rain.png"
                  className="card-img-top"
                  alt="rainy"
                />
                <div className="card-footer">21°C</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "5641bc2ed9f7604fde1dadce23d1af77";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
