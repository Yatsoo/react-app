import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

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
                <WeatherTemperature celsius={props.data.temperature} />
              </div>
            </div>
          </div>
        </div>

        <div className="card text-right">
          <div className="card-body">
            <div className="extrainfo text-left">
              <br />

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
    </div>
  );
}
