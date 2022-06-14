import React, { useEffect, useState } from "react";
import { Container, WeatherBox } from "./style";
import axios from "axios";

import logo from "../../assets/logo-teste.svg";

export default function Header() {
  const [weather, setWeather] = useState([]);
  const API_KEY = "d465818239744b0eadd125701220206";
  const API_URL = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=Rio de Janeiro&aqi=no`;

  useEffect(() => {
    getWeather();
  }, []);

  const getWeather = async () => {
    try {
      const { data } = await axios.get(API_URL);
      setWeather(data);
    } catch (err) {
      console.log("err", err);
    }
  };

  return (
    <Container>
      <img src={logo} alt="logo" />

      <WeatherBox>
        <img src={weather?.current?.condition?.icon} />
        <span>
          <p>{weather?.location?.name}</p>
          <p>{weather?.current?.temp_c}ºC</p>
        </span>
      </WeatherBox>
    </Container>
  );
}
