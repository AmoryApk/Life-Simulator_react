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

// import React, { useEffect, useReducer, useState } from "react";
// import { ScrollView } from "react-native";
// import { Sunny, Cloudy, Rain, Snow } from "weather-styled-icon";
// import axios from "axios";
// import MobileViewLayout from "react-mobile-layout";
// import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
// import ProgressBar from "@ramonak/react-progress-bar";

// const api = {
//   key: "1ac74a3d55fa77c410c13c10ed1a4649",
//   base: "https://api.openweathermap.org/data/2.5/"
// };

// const initialState = {
//   day: "Sunday",
//   hour: 0,
//   minute: 0
// };

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "tick":
//       return {
//         ...state,
//         minute: state.minute === 59 ? 0 : state.minute + 1
//       };
//     case "day":
//       return {
//         ...state,
//         day:
//           state.day === "Sunday"
//             ? "Monday"
//             : state.day === "Monday"
//             ? "Tuesday"
//             : state.day === "Tuesday"
//             ? "Wednesday"
//             : state.day === "Wednesday"
//             ? "Thursday"
//             : state.day === "Thursday"
//             ? "Friday"
//             : state.day === "Friday"
//             ? "Saturday"
//             : state.day === "Saturday"
//             ? "Sunday"
//             : "Sunday"
//       };
//     case "hour":
//       return {
//         ...state,
//         hour: state.hour === 23 ? 0 : state.hour + 1
//       };
//     default:
//       return state;
//   }
// };

// function Home() {
//   const [weather, setWeather] = useState({});
//   const [location, setLocation] = useState({});

//   useEffect(() => {
//     fetch(
//       `${api.base}weather?lat=-6.256098&lon=106.618947&units=metric&APPID=${api.key}`
//     )
//       .then((res) => res.json())
//       .then((result) => {
//         setWeather(result);
//       });
//   }, []);

//   useEffect(() => {
//     navigator.geolocation.getCurrentPosition((position) => {
//       const { latitude, longitude } = position.coords;
//       setLocation({ latitude, longitude });
//     });
//   }, []);

//   function getWeather(latitude, longitude) {
//     axios
//       .get(
//         `${api.base}weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${api.key}`
//       )
//       .then((res) => setWeather(res.data));
//   }

//   const dateBuilder = (d) => {
//     let months = [
//       "January",
//       "February",
//       "March",
//       "April",
//       "May",
//       "June",
//       "July",
//       "August",
//       "September",
//       "October",
//       "November",
//       "December"
//     ];
//     let days = [
//       "Sunday",
//       "Monday",
//       "Tuesday",
//       "Wednesday",
//       "Thursday",
//       "Friday",
//       "Saturday"
//     ];
//     let day = days[d.getDay()];
//     let date = d.getDate();
//     let month = months[d.getMonth()];
//     let year = d.getFullYear();
//     return `${day} ${date} ${month} ${year}`;
//   };

//   const timeBuilder = (d) => {
//     let hours = d.getHours();
//     let minutes = d.getMinutes();
//     let seconds = d.getSeconds();
//     let time = `${hours}:${minutes}:${seconds}`;
//     return time;
//   };

//   const weatherIcon = () => {
//     switch (weather.weather[0].main) {
//       case "Clear":
//         return <Sunny />;
//       case "Clouds":
//         return <Cloudy />;
//       case "Rain":
//         return <Rain />;
//       case "Snow":
//         return <Snow />;
//       default:
//         return <Cloudy />;
//     }
//   };

//   const [news, setNews] = useState([]);

//   useEffect(() => {
//     axios
//       .get(
//         "https://newsapi.org/v2/top-headlines?country=id&apiKey=7900c016c15d400ba3f750a23ec10bcc"
//       )
//       .then((res) => {
//         setNews(res.data.articles);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, []);

//   const [state, dispatch] = useReducer(reducer, initialState);
//   const [time, setTime] = useState(new Date());

//   useEffect(() => {
//     const interval = setInterval(() => {
//       dispatch({ type: "tick" });
//     }, 1000);
//     return () => clearInterval(interval);
//   }, []);

//   useEffect(() => {
//     if (state.minute === 59) {
//       dispatch({ type: "hour" });
//     }
//   }, [state.minute]);

//   useEffect(() => {
//     if (state.hour === 23) {
//       dispatch({ type: "day" });
//     }
//   }, [state.hour]);

//   const [greet, setGreet] = useState("");

//   useEffect(() => {
//     if (state.hour >= 0 && state.hour <= 11) {
//       setGreet("Good Morning");
//     } else if (state.hour >= 12 && state.hour <= 16) {
//       setGreet("Good Afternoon");
//     } else if (state.hour >= 17 && state.hour <= 23) {
//       setGreet("Good Evening");
//     }
//   }, [state.hour]);

//   return (
//     <div className="container">
//       <div
//         className={
//           typeof weather.main != "undefined"
//             ? weather.main.temp > 16
//               ? "app snow"
//               : "app"
//             : "app"
//         }
//       >
//         <main>
//           {typeof weather.main != "undefined" ? (
//             <div>
//               <div className="location-box">
//                 <h1 className="location">Home</h1>
//               </div>
//               <div className="row">
//                 <div className="date">{state.day}</div>
//                 <div className="time">
//                   {state.hour < 10 ? `0${state.hour}` : state.hour} :{" "}
//                   {state.minute < 10 ? `0${state.minute}` : state.minute}
//                 </div>
//               </div>
//               <div className="weather-box">
//                 <div className="temp">{weather.main.temp}&deg;C</div>
//                 <div className="weather">{weatherIcon()}</div>
//                 <h1 className="greet">{greet}</h1>
//               </div>
//             </div>
//           ) : (
//             ""
//           )}
//         </main>
//       </div>

//       <MobileViewLayout>
//         <ScrollView>
//           <div className="container">
//             <div className="row">
//               <div className="col-12">
//                 <div className="card">
//                   <div className="card-body">
//                     <h5 className="card-title">
//                       <Link to="/home">
//                         <FontAwesomeIcon icon={faAngleLeft} />
//                       </Link>
//                       <span>News</span>
//                       <Link to="/home">
//                         <FontAwesomeIcon icon={faAngleRight} />
//                       </Link>
//                     </h5>
//                     <div className="card-text">
//                       <div className="row">
//                         {news.map((item, index) => {
//                           return (
//                             <div className="col-12 col-md-6" key={index}>
//                               <div className="card">
//                                 <div className="card-body">
//                                   <h5 className="card-title">{item.title}</h5>
//                                   <p className="card-text">
//                                     {item.description}
//                                   </p>
//                                   <a
//                                     href={item.url}
//                                     className="btn btn-primary"
//                                   >
//                                     Read More
//                                   </a>
//                                 </div>
//                               </div>
//                             </div>
//                           );
//                         })}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </ScrollView>
//       </MobileViewLayout>
//     </div>
//   );
// }

// export default Home;

import React, { useEffect, useReducer, useState, Component } from "react";
import { ScrollView } from "react-native";
import { Sunny, Cloudy, Rain, Snow } from "weather-styled-icon";
import axios from "axios";
import MobileViewLayout from "react-mobile-layout";
import { Link, Router, Route } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { ProgressBarContainer } from "./ProgressBar";
import "./styles.css";
import News from "./component/News";

const api = {
  key: "1ac74a3d55fa77c410c13c10ed1a4649",
  base: "https://api.openweathermap.org/data/2.5/"
};

const initialState = {
  day: "Sunday",
  hour: 0,
  minute: 0
};

const reducer = (state, action) => {
  switch (action.type) {
    case "tick":
      return {
        ...state,
        minute: state.minute === 59 ? 0 : state.minute + 1
      };
    case "day":
      return {
        ...state,
        day:
          state.day === "Sunday"
            ? "Monday"
            : state.day === "Monday"
            ? "Tuesday"
            : state.day === "Tuesday"
            ? "Wednesday"
            : state.day === "Wednesday"
            ? "Thursday"
            : state.day === "Thursday"
            ? "Friday"
            : state.day === "Friday"
            ? "Saturday"
            : state.day === "Saturday"
            ? "Sunday"
            : "Sunday"
      };
    case "hour":
      return {
        ...state,
        hour: state.hour === 23 ? 0 : state.hour + 1
      };
    default:
      return state;
  }
};

function Home() {
  const [weather, setWeather] = useState({});
  const [location, setLocation] = useState("None");

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
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      setLocation({ latitude, longitude });
    });
  }, []);

  function getWeather(latitude, longitude) {
    axios
      .get(
        `${api.base}weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${api.key}`
      )
      .then((res) => setWeather(res.data));
  }

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

  const timeBuilder = (d) => {
    let hours = d.getHours();
    let minutes = d.getMinutes();
    let seconds = d.getSeconds();
    let time = `${hours}:${minutes}:${seconds}`;
    return time;
  };

  const weatherIcon = () => {
    switch (weather.weather[0].main) {
      case "Clear":
        return <Sunny />;
      case "Clouds":
        return <Cloudy />;
      case "Rain":
        return <Rain />;
      case "Snow":
        return <Snow />;
      default:
        return <Cloudy />;
    }
  };

  const [news, setNews] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=id&apiKey=7900c016c15d400ba3f750a23ec10bcc"
      )
      .then((res) => {
        setNews(res.data.articles);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const [state, dispatch] = useReducer(reducer, initialState);
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch({ type: "tick" });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (state.minute === 59) {
      dispatch({ type: "hour" });
    }
  }, [state.minute]);

  useEffect(() => {
    if (state.hour === 23) {
      dispatch({ type: "day" });
    }
  }, [state.hour]);

  const [greet, setGreet] = useState("");

  useEffect(() => {
    if (state.hour >= 0 && state.hour <= 11) {
      setGreet("Good Morning");
    } else if (state.hour >= 12 && state.hour <= 16) {
      setGreet("Good Afternoon");
    } else if (state.hour >= 17 && state.hour <= 23) {
      setGreet("Good Evening");
    }
  }, [state.hour]);

  const background = () => {
    if (state.hour >= 0 && state.hour <= 11) {
      return "morning";
    } else if (state.hour >= 12 && state.hour <= 16) {
      return "afternoon";
    } else if (state.hour >= 17 && state.hour <= 23) {
      return "evening";
    }
  };

  return (
    <div className={`${background()}`}>
      <div className="container">
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
                <div className="row">
                  <div className="date">{state.day}</div>
                  <div className="time">
                    {state.hour < 10 ? `0${state.hour}` : state.hour} :{" "}
                    {state.minute < 10 ? `0${state.minute}` : state.minute}
                  </div>
                </div>
                <div className="weather-box">
                  <div className="temp">{weather.main.temp}&deg;C</div>
                  <div className="weather">{weatherIcon()}</div>
                  <h1 className="greet">{greet}</h1>
                </div>
                <div className="location-box"></div>
                <div className="App">
                  <ProgressBarContainer />
                </div>
              </div>
            ) : (
              ""
            )}
          </main>
        </div>

        <MobileViewLayout>
          <ScrollView>
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">
                        <Link to="/home">
                          <FontAwesomeIcon icon={faAngleLeft} />
                        </Link>
                        <span>News</span>
                        <Link to="/home">
                          <FontAwesomeIcon icon={faAngleRight} />
                        </Link>
                        <li className="nav-item">
                          <Link className="nav-link text-white" to="/news">
                            News
                          </Link>
                        </li>
                      </h5>
                      <div className="card-text">
                        <div className="row">
                          {news.map((item, index) => {
                            return (
                              <div className="col-12 col-md-6" key={index}>
                                <div className="card">
                                  <div className="card-body">
                                    <h5 className="card-title">{item.title}</h5>
                                    <p className="card-text">
                                      {item.description}
                                    </p>
                                    <a
                                      href={item.url}
                                      className="btn btn-primary"
                                    >
                                      Read More
                                    </a>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollView>
        </MobileViewLayout>
      </div>
    </div>
  );
}

export default Home;
