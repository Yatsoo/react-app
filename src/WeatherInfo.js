import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="card-deck">
        <div className="card text-left" style={{ maxWidth: "18rem" }}>
          <div className="card-header">
            <h1>
              <span>{props.data.city}</span>
            </h1>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col">
                <FormattedDate date={props.data.date} />
              </div>
              <div className="col">
                <h5>
                  <span>{Math.round(props.data.temperature)}°C</span>
                </h5>
                <small>
                  <a href="/" className="active">
                    C{" "}
                  </a>{" "}
                  | <a href="/">F</a>
                </small>
              </div>
            </div>
          </div>
        </div>

        <div className="card text-right">
          <div className="card-body">
            <div className="extrainfo text-left">
              <ul>
                <li>
                  <div className="card-img">
                    <WeatherIcon
                      code={props.data.icon}
                      alt={props.data.description}
                    />
                  </div>
                </li>
                <li>
                  <br />
                </li>
                <li>
                  <h6>
                    <span className="text-capitalize">
                      {props.data.description}
                    </span>
                  </h6>
                </li>
                <li>
                  <hr className="line" />
                </li>
                <li>
                  <h6>
                    Humidity: <span>{props.data.humidity}</span>%{" "}
                  </h6>
                </li>
                <li>
                  <h6>
                    Wind: <span>{props.data.wind}</span> km/h
                  </h6>
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
