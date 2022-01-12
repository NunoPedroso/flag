import {useState, useEffect, useContext} from 'react';

import { WeatherContext } from '../../contexts/weather-context';

import WeatherTable from './weather-table';
import WeatherCities from './weather-cities';

function Weather() {
  const [city, setCity] = useState('Lisboa');
  const [weatherInfo, setWeatherInfo] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const cities = ['Porto', 'Lisboa', 'Madrid', 'Barcelona', 'Glasgow', 'Paris', 'Berlin'];

  const {setWeather} = useContext(WeatherContext);

  useEffect(() => {

    setIsLoading(true);

    async function fetchWeather() {
      const response = await fetch(`https://goweather.herokuapp.com/weather/${city}`);
      const result = await response.json();
      setWeatherInfo(result);
      setWeather(result);

      setIsLoading(false);
    };

    fetchWeather();

  }, [city, setIsLoading, setWeather]);

  return (
    <div>
      <h2>Weather for {city}</h2>
      {isLoading ? (
        <p>Loading weather info...</p>
      ) : (
        <>
          <div>
            <p>
              <strong>Description</strong><br />
              {weatherInfo.description}
            </p>
            <p><strong>Temp:</strong> {weatherInfo.temperature}</p>
            <p><strong>Wind:</strong> {weatherInfo.wind}</p>
            <WeatherTable forecast={weatherInfo.forecast} />
          </div>
          <WeatherCities cities={cities} setCity={setCity} />
        </>
      )}
    </div>
  );
}

export default Weather;