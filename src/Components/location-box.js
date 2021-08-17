import { useContext } from "react";
import WeatherContext from "../Helpers/weather-context";

const LocationBox = () => {

    const {queryState, weather} = useContext(WeatherContext);

    return (
        <div className="data location-data">
            {!queryState ? "City" : weather.name}
        </div>
    )
}

export default LocationBox;