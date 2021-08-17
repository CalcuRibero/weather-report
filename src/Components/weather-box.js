import { useContext } from "react";
import WeatherContext from "../Helpers/weather-context";

const WeatherBox = () => {

    const {queryState, weather} = useContext(WeatherContext);

    return (
        <div className="weather">
            {!queryState ? "Weather" : 
            weather.weather[0].main === "Clear" ? 
            <p>{weather.weather[0].main} 
            <span className="weather-icon">&#x2600;</span></p>: 
            <p>{weather.weather[0].main} 
            <span className="weather-icon">&#x2601;</span></p>}
        </div>
    )
}

export default WeatherBox;