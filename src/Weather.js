import React from "react";
import "./weather.css";

export default function Weather() {
  let weatherData = {
    city: "Dublin",
    day: "Friday",
    time: "14:30",
    temperature: 15,
    description: "Cloudy",
    icon: "https://img.icons8.com/nolan/64/rain.png",
    humidity: 55,
    wind: 3,
  };

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
                <h3>{weatherData.day}</h3>
                <p>{weatherData.time}</p>
              </div>
              <div className="col">
                <h3>
                  <span>{weatherData.temperature}°</span>
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
                  <span>{weatherData.description}</span>
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
}
