import './App.css';
import { useState } from 'react';
import DateBox from './Components/date-box';
import WeatherContext from './Helpers/weather-context';
import LocationBox from './Components/location-box';
import TemperatureBox from './Components/temperature-box';
import WeatherBox from './Components/weather-box';

const API_Key = {
  key: "38e5a74d12fea2c64fe0f7406ecd4fe0",
  base: "https://api.openweathermap.org/data/2.5/"
};

function App() {

  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});
  const [queryState, setQueryState] = useState(false);

  const search = evt => {
    if (evt.key === "Enter") {
      fetch(`${API_Key.base}weather?q=${query}
      &units=metric&APPID=${API_Key.key}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          setQuery('');
          if (!queryState) setQueryState(true);
        }).catch(() => {
          setQuery('');
          setWeather({})
          setQueryState(false);
        });
    }
  }

  return (
    <div className={
      !queryState ? "App cloudy centralized" : 
      weather.weather[0].main !== "Clear" ? 
      "App cloudy centralized":
      "App clear centralized"}>
      <div className="main centralized">
        <WeatherContext.Provider value={{
          query, setQuery,
          queryState, setQueryState,
          weather, setWeather
        }}>
          <div className="search-box">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyPress={search}
              placeholder="Search the place"
              className="search-input"
            />
          </div>
          <div className="data-box">
            <LocationBox />
            <DateBox />
            <div className="data-box">
              <div className="data weather-data">
                <TemperatureBox/>
                <WeatherBox/>
              </div>
            </div>
          </div>
        </WeatherContext.Provider>
      </div>
    </div>
  );
}

export default App;
