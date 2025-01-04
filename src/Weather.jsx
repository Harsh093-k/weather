import { useState } from "react";
import Info from "./Info.jsx";
import SearchBox from "./SearchBox.jsx";
import "./Weather.css";

export default function Weather(){
    const [WeatherInfo,setWeatherInfo]=useState({
        city:"",
        temp:"",
        humidity:"",
        feel_like:"",
    })
    let updateInfo =(result) =>{
        setWeatherInfo(result);
    }
    return(
        <div className="weather">
            <div className="header">
            <img src="https://cdn-icons-png.flaticon.com/128/2698/2698213.png"  />&nbsp;&nbsp;
            <h3>Weather infomation</h3>
            </div>
           < SearchBox updateInfo={updateInfo}/>
            <Info info={WeatherInfo} />
       </div>
    )
}