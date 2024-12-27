import { useState } from "react";
import Info from "./Info.jsx";
import SearchBox from "./SearchBox.jsx";
import "./Weather.css";

export default function Weather(){
    const [WeatherInfo,setWeatherInfo]=useState({
        city:"delhi",
        temp:34,
        humidity:35,
        feel_like:23,
    })
    let updateInfo =(result) =>{
        setWeatherInfo(result);
    }
    return(
        <div className="weather">
            <h3>Weather infomation</h3>
           < SearchBox updateInfo={updateInfo}/>
           <Info info={WeatherInfo} />
       </div>
    )
}