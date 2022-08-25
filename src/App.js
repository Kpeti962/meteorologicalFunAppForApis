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
  
  const [modal, setModal] = useState(false);
  const [modal1, setModal1] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [modal3, setModal3] = useState(false);
  const [modal4, setModal4] = useState(false);
  const [modal5, setModal5] = useState(false);
  const [modal6, setModal6] = useState(false);
  const [modal7, setModal7] = useState(false);
  const [modal8, setModal8] = useState(false);
  const [modal9, setModal9] = useState(false);
  const [modal10, setModal10] = useState(false);

  

  useEffect(() => {
    axios
      .get(
        "https://api.weatherapi.com/v1/current.json?key=ced6e8ed8bb849b68d5125646221907&q=Szeged&aqi=no"
      )
      .then((data) => {
        setWeather(data.data);
        console.log(data.data);
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

  const toggleModal = () => {
    setModal(!modal);
  };
  const toggleModal1 = () => {
    setModal1(!modal1);
  };
  const toggleModal2 = () => {
    setModal2(!modal2);
  };
  const toggleModal3 = () => {
    setModal3(!modal3);
  };
  const toggleModal4 = () => {
    setModal4(!modal4);
  };
  const toggleModal5 = () => {
    setModal5(!modal5);
  };
  const toggleModal6 = () => {
    setModal6(!modal6);
  };
  const toggleModal7 = () => {
    setModal7(!modal7);
  };
  const toggleModal8 = () => {
    setModal8(!modal8);
  };
  const toggleModal9 = () => {
    setModal9(!modal9);
  };
  const toggleModal10 = () => {
    setModal10(!modal10);
  };
  
  return (
    <div className="countryWeatherWrapper">
      <div className="countryImg">
        <img className="country" src={hungary} alt="" />
        {weather && (
          <div className="szeged">
            <h3 onClick={toggleModal}>{weather.location.name}</h3>
            <div onClick={toggleModal} className="overlay"></div>
            {modal &&(<div className="openModal">
            <h3 onClick={toggleModal}>{weather.location.name}</h3>
              <h3>{weather.current.temp_c}°C</h3>
              <img src={weather.current.condition.icon} alt="" />
              <h4>Szél erősség: {weather.current.wind_kph} km/h</h4>
              <h4>Hőérzet:{weather.current.feelslike_c} °C</h4>
              <h4>Páratartalom: {weather.current.humidity} %</h4>

              <button className="closeModal" onClick={toggleModal}>Bezár</button>
            </div>)}
          </div>
        )}
        {weather1 && (
          <div className="pecs">
            <h3  onClick={toggleModal1}>{weather1.location.name}</h3>
            <div onClick={toggleModal1} className="overlay"></div>
            {modal1 &&(<div className="openModal">
            <h3  onClick={toggleModal1}>{weather1.location.name}</h3>
            <h3>{weather1.current.temp_c}°C</h3>
            <img src={weather1.current.condition.icon} alt="" />
            <h4>Szél erősség: {weather1.current.wind_kph} km/h</h4>
            <h4>Hőérzet:{weather1.current.feelslike_c} °C</h4>
            <h4>Páratartalom: {weather1.current.humidity} %</h4>
            <button className="closeModal" onClick={toggleModal1}>Bezár</button>
            </div>)}
          </div>
        )}
        {weather2 && (
          <div className="keszthely">
            <h3   onClick={toggleModal2}>{weather2.location.name}</h3>
            <div onClick={toggleModal2} className="overlay"></div>
            {modal2 &&(<div className="openModal">
            <h3   onClick={toggleModal2}>{weather2.location.name}</h3>
            <h3>{weather2.current.temp_c}°C</h3>
            <img src={weather2.current.condition.icon} alt="" />
            <h4>Szél erősség: {weather2.current.wind_kph} km/h</h4>
            <h4>Hőérzet:{weather2.current.feelslike_c} °C</h4>
            <h4>Páratartalom: {weather2.current.humidity} %</h4>
            <button className="closeModal" onClick={toggleModal2}>Bezár</button>
            </div>)}
          </div>
        )}
        {weather3 && (
          <div className="szombathely">
            <h3 onClick={toggleModal3}>{weather3.location.name}</h3>
            <div onClick={toggleModal3} className="overlay"></div>
            {modal3 &&(<div className="openModal">
            <h3   onClick={toggleModal3}>{weather3.location.name}</h3>
            <h3>{weather3.current.temp_c}°C</h3>
            <img src={weather3.current.condition.icon} alt="" />
            <h4>Szél erősség: {weather3.current.wind_kph} km/h</h4>
            <h4>Hőérzet:{weather3.current.feelslike_c} °C</h4>
            <h4>Páratartalom: {weather3.current.humidity} %</h4>
            <button className="closeModal" onClick={toggleModal3}>Bezár</button>
            </div>)}
          </div>
        )}
        {weather4 && (
          <div className="sopron">
            <h3 onClick={toggleModal4}>{weather4.location.name}</h3>
            <div onClick={toggleModal1} className="overlay"></div>
            {modal4 &&(<div className="openModal">
            <h3 onClick={toggleModal4}>{weather4.location.name}</h3>
            <h3>{weather4.current.temp_c}°C</h3>
            <img src={weather4.current.condition.icon} alt="" />
            <h4>Szél erősség: {weather4.current.wind_kph} km/h</h4>
            <h4>Hőérzet:{weather4.current.feelslike_c} °C</h4>
            <h4>Páratartalom: {weather4.current.humidity} %</h4>
            <button className="closeModal" onClick={toggleModal4}>Bezár</button>
            </div>)}
          </div>
        )}
        {weather5 && (
          <div className="gyor">
            <h3 onClick={toggleModal5}>{weather5.location.name}</h3>
            <div onClick={toggleModal5} className="overlay"></div>
            {modal5 &&(<div className="openModal">
            <h3 onClick={toggleModal5}>{weather5.location.name}</h3>
            <h3>{weather5.current.temp_c}°C</h3>
            <img src={weather5.current.condition.icon} alt="" />
            <h4>Szél erősség: {weather5.current.wind_kph} km/h</h4>
            <h4>Hőérzet:{weather5.current.feelslike_c} °C</h4>
            <h4>Páratartalom: {weather5.current.humidity} %</h4>
            <button className="closeModal" onClick={toggleModal5}>Bezár</button>
            </div>)}
          </div>
        )}
        {weather6 && (
          <div className="szekesfehervar">
            <h3 onClick={toggleModal6}>{weather6.location.name}</h3>
            <div onClick={toggleModal6} className="overlay"></div>
            {modal6 &&(<div className="openModal">
            <h3 onClick={toggleModal6}>{weather6.location.name}</h3>
            <h3>{weather6.current.temp_c}°C</h3>
            <img src={weather6.current.condition.icon} alt="" />
            <h4>Szél erősség: {weather6.current.wind_kph} km/h</h4>
            <h4>Hőérzet:{weather6.current.feelslike_c} °C</h4>
            <h4>Páratartalom: {weather6.current.humidity} %</h4>
            <button className="closeModal" onClick={toggleModal6}>Bezár</button>
            </div>)}
          </div>
        )}
        {weather7 && (
          <div className="budapest">
            <h3 onClick={toggleModal7}>{weather7.location.name}</h3>
            <div onClick={toggleModal7} className="overlay"></div>
            {modal7 &&(<div className="openModal">
            <h3 onClick={toggleModal7}>{weather7.location.name}</h3>
            <h3>{weather7.current.temp_c}°C</h3>
            <img src={weather7.current.condition.icon} alt="" />
            <h4>Szél erősség: {weather7.current.wind_kph} km/h</h4>
            <h4>Hőérzet:{weather7.current.feelslike_c} °C</h4>
            <h4>Páratartalom: {weather7.current.humidity} %</h4>
            <button className="closeModal" onClick={toggleModal7}>Bezár</button>
            </div>)}
          </div>
        )}
        {weather8 && (
          <div className="szolnok">
            <h3 onClick={toggleModal8}>{weather8.location.name}</h3>
            <div onClick={toggleModal8} className="overlay"></div>
            {modal8 &&(<div className="openModal">
            <h3>{weather8.current.temp_c}°C</h3>
            <img src={weather8.current.condition.icon} alt="" />
            <h4>Szél erősség: {weather8.current.wind_kph} km/h</h4>
            <h4>Hőérzet:{weather8.current.feelslike_c} °C</h4>
            <h4>Páratartalom: {weather8.current.humidity} %</h4>
            <button className="closeModal" onClick={toggleModal8}>Bezár</button>
            </div>)}
          </div>
        )}
        {weather9 && (
          <div className="miskolc">
            <h3 onClick={toggleModal9}>{weather9.location.name}</h3>
            <div onClick={toggleModal9} className="overlay"></div>
            {modal9 &&(<div className="openModal">
            <h3>{weather9.current.temp_c}°C</h3>
            <img src={weather9.current.condition.icon} alt="" />
            <h4>Szél erősség: {weather9.current.wind_kph} km/h</h4>
            <h4>Hőérzet:{weather9.current.feelslike_c} °C</h4>
            <h4>Páratartalom: {weather9.current.humidity} %</h4>
            <button className="closeModal" onClick={toggleModal9}>Bezár</button>
            </div>)}
          </div>
        )}
        {weather10 && (
          <div className="debrecen">
            <h3 onClick={toggleModal10}>{weather10.location.name}</h3>
            <div onClick={toggleModal10} className="overlay"></div>
            {modal10 &&(<div className="openModal">
            <h3>{weather10.current.temp_c}°C</h3>
            <img src={weather10.current.condition.icon} alt="" />
            <h4>Szél erősség: {weather10.current.wind_kph} km/h</h4>
            <h4>Hőérzet:{weather10.current.feelslike_c} °C</h4>
            <h4>Páratartalom: {weather10.current.humidity} %</h4>
            <button className="closeModal" onClick={toggleModal10}>Bezár</button>
            </div>)}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
