import { useContext } from "react";
import WeatherContext from "../Helpers/weather-context";

const TemperatureBox = () => {

    const { queryState, weather } = useContext(WeatherContext);

    return (
        <div className="temp">
            {!queryState ? "Temp" : weather.main.temp + "°C"}
        </div>
    )
}

export default TemperatureBox;