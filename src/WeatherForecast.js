import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import axios from "axios";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function handleForecastResponse(response) {
    setForecast(response.data);
    setLoaded(true);
  }

  if (loaded && props.city === forecast.city.name) {
    return (
      <div ClassName="WeatherForecast">
        <hr />

        <div className="weeklytemperature">
          <div className="row">
            <div className="col d-flex justify-content-center">
              <div className="card text-center">
                <div className="card-header">
                  {new Date(forecast.list[0].dt * 1000).getHours()}:00
                </div>
                <WeatherIcon code={forecast.list[0].weather[0].icon} />

                <div className="card-footer">
                  {Math.round(forecast.list[0].main.temp)}°C |{" "}
                  {Math.round((forecast.list[0].main.temp * 9) / 5 + 32)}°F
                </div>
              </div>
            </div>

            <div className="col d-flex justify-content-center">
              <div className="card text-center">
                <div className="card-header">
                  {" "}
                  {new Date(forecast.list[1].dt * 1000).getHours()}:00
                </div>
                <WeatherIcon code={forecast.list[1].weather[0].icon} />
                <div className="card-footer">
                  {" "}
                  {Math.round(forecast.list[1].main.temp)}°C |{" "}
                  {Math.round((forecast.list[1].main.temp * 9) / 5 + 32)}°F
                </div>
              </div>
            </div>

            <div className="col d-flex justify-content-center">
              <div className="card text-center">
                <div className="card-header">
                  {" "}
                  {new Date(forecast.list[2].dt * 1000).getHours()}:00
                </div>
                <WeatherIcon code={forecast.list[2].weather[0].icon} />
                <div className="card-footer">
                  {" "}
                  {Math.round(forecast.list[2].main.temp)}°C |{" "}
                  {Math.round((forecast.list[2].main.temp * 9) / 5 + 32)}°F
                </div>
              </div>
            </div>

            <div className="col d-flex justify-content-center">
              <div className="card text-center">
                <div className="card-header">
                  {" "}
                  {new Date(forecast.list[3].dt * 1000).getHours()}:00
                </div>
                <WeatherIcon code={forecast.list[3].weather[0].icon} />
                <div className="card-footer">
                  {" "}
                  {Math.round(forecast.list[3].main.temp)}°C |{" "}
                  {Math.round((forecast.list[3].main.temp * 9) / 5 + 32)}°F
                </div>
              </div>
            </div>

            <div className="col d-flex justify-content-center">
              <div className="card text-center">
                <div className="card-header">
                  {" "}
                  {new Date(forecast.list[4].dt * 1000).getHours()}:00
                </div>
                <WeatherIcon code={forecast.list[4].weather[0].icon} />
                <div className="card-footer">
                  {" "}
                  {Math.round(forecast.list[4].main.temp)}°C |{" "}
                  {Math.round((forecast.list[4].main.temp * 9) / 5 + 32)}°F
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "5641bc2ed9f7604fde1dadce23d1af77";
    let url = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(handleForecastResponse);

    return null;
  }
}
