// import React, { Component } from "react";
// import ReactWeather, { useOpenWeather } from "react-open-weather";

// const Home = () => {
//   const { data, isLoading, errorMessage } = useOpenWeather({
//     key: "cdedff7680722861bc3d51c336f3c953",
//     lat: "-6.256098",
//     lon: "106.618947",
//     lang: "en",
//     unit: "metric" // values are (metric, standard, imperial)
//   });
//   return (
//     <ReactWeather
//       isLoading={isLoading}
//       errorMessage={errorMessage}
//       data={data}
//       lang="en"
//       locationLabel="Universitas Multimedia Nusantara"
//       unitsLabels={{ temperature: "C", windSpeed: "Km/h" }}
//       showForecast
//     />
//   );
// };

// export default Home;

import React, { useEffect, useState } from "react";
import { Sunny, Cloudy, Rain, Snow } from "weather-styled-icon";
import { ProgressBarContainer } from "./ProgressBar";

const api = {
  key: "1ac74a3d55fa77c410c13c10ed1a4649",
  base: "https://api.openweathermap.org/data/2.5/"
};

function Home() {
  const [weather, setWeather] = useState({});
  const [location, setLocation] = useState({});
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(true);

  useEffect(() => {
    fetch(
      `${api.base}weather?lat=-6.256098&lon=106.618947&units=metric&APPID=${api.key}`
    )
      .then((res) => res.json())
      .then((result) => {
        setWeather(result);
      });
  }, []);

  useEffect(() => {
    fetch(
      `${api.base}weather?lat=-6.256098&lon=106.618947&units=metric&APPID=${api.key}`
    )
      .then((res) => res.json())
      .then((result) => {
        setLocation(result);
      });
  }, []);

  const dateBuilder = (d) => {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
    return `${day} ${date} ${month} ${year}`;
  };

  const weatherIcon = () => {
    let { main } = weather.weather[0];
    if (main === "Clear") {
      return <Sunny />;
    } else if (main === "Clouds") {
      return <Cloudy />;
    } else if (main === "Rain") {
      return <Rain />;
    } else if (main === "Snow") {
      return <Snow />;
    }
  };

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10000);
      }, 10);
    } else if (!running) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);

  const formatTime = () => {
    const getSeconds = `0${Math.floor((time / 1000) % 60)}`.slice(-2);
    const minutes = `${Math.floor((time / 60000) % 60)}`;
    const getMinutes = `0${minutes % 60}`.slice(-2);
    const getHours = `0${Math.floor((time / (1000 * 60 * 60)) % 24)}`.slice(-2);
    const getDays = `0${Math.floor((time / (1000 * 60 * 60 * 24)) % 7)}`.slice(
      -2
    );

    return `${getDays} : ${getHours} : ${minutes} : ${getSeconds}`;
  };

  return (
    <div
      className={
        typeof weather.main != "undefined"
          ? weather.main.temp > 16
            ? "app snow"
            : "app"
          : "app"
      }
    >
      <main>
        {typeof weather.main != "undefined" ? (
          <div>
            <div className="location-box">
              <div className="stopwatch">
                <div className="numbers">
                  <p>{formatTime()}</p>
                </div>
              </div>
            </div>
            <div className="weather-box">
              <div className="temp">{weather.main.temp}&deg;C</div>
              <div className="weather">{weatherIcon()}</div>
            </div>
            <div className="App">
              <ProgressBarContainer />
            </div>
          </div>
        ) : (
          ""
        )}
      </main>
    </div>
  );
}

export default Home;
