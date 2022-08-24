import React, { useEffect, useState } from "react";
import hungary from "./img/hungary.png";
import "./styles/app.scss";
import axios from "axios";

function App() {
  const [weather, setWeather] = useState("");
  const [weather1, setWeather1] = useState("");
  const [weather2, setWeather2] = useState("");
  const [weather3, setWeather3] = useState("");
  const [weather4, setWeather4] = useState("");
  const [weather5, setWeather5] = useState("");
  const [weather6, setWeather6] = useState("");
  const [weather7, setWeather7] = useState("");
  const [weather8, setWeather8] = useState("");
  const [weather9, setWeather9] = useState("");
  const [weather10, setWeather10] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://api.weatherapi.com/v1/current.json?key=ced6e8ed8bb849b68d5125646221907&q=Szeged&aqi=no"
      )
      .then((data) => {
        setWeather(data.data);

        console.log(data.data);
        console.log(data.data.current.temp_c);
        console.log(data.data.current.condition.icon);
      })
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    axios
      .get(
        "https://api.weatherapi.com/v1/current.json?key=ced6e8ed8bb849b68d5125646221907&q=Pecs&aqi=no"
      )
      .then((data) => {
        setWeather1(data.data);
      })
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    axios
      .get(
        "https://api.weatherapi.com/v1/current.json?key=ced6e8ed8bb849b68d5125646221907&q=Keszthely&aqi=no"
      )
      .then((data) => {
        setWeather2(data.data);
      })
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    axios
      .get(
        "https://api.weatherapi.com/v1/current.json?key=ced6e8ed8bb849b68d5125646221907&q=Szombathely&aqi=no"
      )
      .then((data) => {
        setWeather3(data.data);
      })
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    axios
      .get(
        "https://api.weatherapi.com/v1/current.json?key=ced6e8ed8bb849b68d5125646221907&q=Sopron&aqi=no"
      )
      .then((data) => {
        setWeather4(data.data);
      })
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    axios
      .get(
        "https://api.weatherapi.com/v1/current.json?key=ced6e8ed8bb849b68d5125646221907&q=Gyor&aqi=no"
      )
      .then((data) => {
        setWeather5(data.data);
      })
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    axios
      .get(
        "https://api.weatherapi.com/v1/current.json?key=ced6e8ed8bb849b68d5125646221907&q=Szekesfehervar&aqi=no"
      )
      .then((data) => {
        setWeather6(data.data);
      })
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    axios
      .get(
        "https://api.weatherapi.com/v1/current.json?key=ced6e8ed8bb849b68d5125646221907&q=Budapest&aqi=no"
      )
      .then((data) => {
        setWeather7(data.data);
      })
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    axios
      .get(
        "https://api.weatherapi.com/v1/current.json?key=ced6e8ed8bb849b68d5125646221907&q=Szolnok&aqi=no"
      )
      .then((data) => {
        setWeather8(data.data);
      })
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    axios
      .get(
        "https://api.weatherapi.com/v1/current.json?key=ced6e8ed8bb849b68d5125646221907&q=Miskolc&aqi=no"
      )
      .then((data) => {
        setWeather9(data.data);
      })
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    axios
      .get(
        "https://api.weatherapi.com/v1/current.json?key=ced6e8ed8bb849b68d5125646221907&q=Debrecen&aqi=no"
      )
      .then((data) => {
        setWeather10(data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="countryWeatherWrapper">
      {weather &&
        weather1 &&
        weather2 &&
        weather3 &&
        weather4 &&
        weather5 &&
        weather6 &&
        weather7 &&
        weather8 &&
        weather9 &&
        weather10 && (
          <div className="countryImg">
            <img className="country" src={hungary} alt="" />
            <div className="szeged">
              <h5>{weather.location.name}</h5>
              <h5>{weather.current.temp_c}</h5>
              <img src={weather.current.condition.icon} alt="" />
              <h5>{weather.current.condition.text}</h5>
            </div>
            <div className="pecs">
              <h5>{weather1.location.name}</h5>
              <h5>{weather1.current.temp_c}</h5>
              <img src={weather1.current.condition.icon} alt="" />
              <h5>{weather1.current.condition.text}</h5>
            </div>
            <div className="keszthely">
              <h5>{weather2.location.name}</h5>
              <h5>{weather2.current.temp_c}</h5>
              <img src={weather2.current.condition.icon} alt="" />
              <h5>{weather2.current.condition.text}</h5>
            </div>
            <div className="szombathely">
              <h5>{weather3.location.name}</h5>
              <h5>{weather3.current.temp_c}</h5>
              <img src={weather3.current.condition.icon} alt="" />
              <h5>{weather3.current.condition.text}</h5>
            </div>
            <div className="sopron">
              <h5>{weather4.location.name}</h5>
              <h5>{weather4.current.temp_c}</h5>
              <img src={weather4.current.condition.icon} alt="" />
              <h5>{weather4.current.condition.text}</h5>
            </div>
            <div className="gyor">
              <h5>{weather5.location.name}</h5>
              <h5>{weather5.current.temp_c}</h5>
              <img src={weather5.current.condition.icon} alt="" />
              <h5>{weather5.current.condition.text}</h5>
            </div>
            <div className="szekesfehervar">
              <h5>{weather6.location.name}</h5>
              <h5>{weather6.current.temp_c}</h5>
              <img src={weather6.current.condition.icon} alt="" />
              <h5>{weather6.current.condition.text}</h5>
            </div>
            <div className="budapest">
              <h5>{weather7.location.name}</h5>
              <h5>{weather7.current.temp_c}</h5>
              <img src={weather7.current.condition.icon} alt="" />
              <h5>{weather7.current.condition.text}</h5>
            </div>
            <div className="szolnok">
              <h5>{weather8.location.name}</h5>
              <h5>{weather8.current.temp_c}</h5>
              <img src={weather8.current.condition.icon} alt="" />
              <h5>{weather8.current.condition.text}</h5>
            </div>
            <div className="miskolc">
              <h5>{weather9.location.name}</h5>
              <h5>{weather9.current.temp_c}</h5>
              <img src={weather9.current.condition.icon} alt="" />
              <h5>{weather9.current.condition.text}</h5>
            </div>
            <div className="debrecen">
              <h5>{weather10.location.name}</h5>
              <h5>{weather10.current.temp_c}</h5>
              <img src={weather10.current.condition.icon} alt="" />
              <h5>{weather10.current.condition.text}</h5>
            </div>
          </div>
        )}
    </div>
  );
}

export default App;
