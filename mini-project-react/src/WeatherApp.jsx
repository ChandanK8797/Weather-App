import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp() {
   const [weatherInfo, setWeatherInfo] = useState({
      city: "Delhi", 
      feelsLike: 287.77,
      temp: 288.2,
      tempMin: 288.2,
      tempMax: 288.2,
      humidity: 77,
      weather: "mist",
  });
  
  let updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);          
  }
   return (
      <div style={{ textAlign: "center"}}>
        <h2>Weather App by Delta</h2> 
        <SearchBox updateInfo={updateInfo}/> 
        <InfoBox info={weatherInfo}/>  
      </div>        
   )           
}