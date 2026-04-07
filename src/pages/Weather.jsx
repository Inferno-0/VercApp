import { useState } from "react";

function Weather() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const apiKey = import.meta.env.VITE_WEATHER_KEY;

  console.log(import.meta.env.VITE_WEATHER_KEY);

  const getWeather = async () => {
    try {
      setError("");
      setWeather(null);

      if (!city.trim()) {
        setError("Please enter a city name");
        return;
      }

      if (!apiKey) {
        setError("API key not loaded");
        return;
      }

      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city.trim()}&appid=${apiKey}&units=metric`
      );

      const data = await res.json();

      console.log("API RESPONSE:", data);

      if (!res.ok || data.cod != 200) {
        setError(data.message || "City not found");
        return;
      }

      setWeather(data);
    } catch (err) {
      setError("Something went wrong");
    }
  };

  return (
    <div className="weather-container">
      <h1>Weather Page</h1>

      <div className="weather-input">
        <input
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={getWeather}>Get Weather</button>
      </div>

      {error && <p className="error">{error}</p>}

      {weather && weather.weather && (
        <div className="weather-card">
          <h2>{weather.name}</h2>

          <img
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt="weather icon"
          />

          <p className="temp">{weather.main.temp} °C</p>
          <p className="desc">{weather.weather[0].description}</p>
        </div>
      )}
    </div>
  );
}

export default Weather;