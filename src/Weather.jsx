import { useEffect, useState } from "react";
import Info from "./Info.jsx";
import SearchBox from "./SearchBox.jsx";
import "./Weather.css";

export default function Weather() {
    const [weatherInfo, setWeatherInfo] = useState(null);

    // Fetch weather based on the user's location
    useEffect(() => {
        // Get user's location
        navigator.geolocation.getCurrentPosition(
            async (position) => {
                const { latitude, longitude } = position.coords;
                const API_URL = "http://api.openweathermap.org/data/2.5/weather";
                const API_Key = "2d719627e2f727df29ffd8b915af7fe0";

                try {
                    // Fetch weather data using the coordinates
                    const response = await fetch(
                        `${API_URL}?lat=${latitude}&lon=${longitude}&appid=${API_Key}&units=metric`
                    );
                    const jsonResponse = await response.json();

                    if (jsonResponse.cod !== 200) {
                        throw new Error("Failed to fetch weather data");
                    }

                    const result = {
                        city: jsonResponse.name,
                        temp: jsonResponse.main.temp,
                        temp_min: jsonResponse.main.temp_min,
                        temp_max: jsonResponse.main.temp_max,
                        feels_like: jsonResponse.main.feels_like,
                        humidity: jsonResponse.main.humidity,
                        description: jsonResponse.weather[0].description,
                        main: jsonResponse.weather[0].main,
                    };

                    
                    setWeatherInfo(result);
                } catch (error) {
                    console.error(error);
                    setWeatherInfo(null); // Set to null if there is an error
                }
            },
            (error) => {
                console.error(error);
                setWeatherInfo(null); // Handle location permission or other errors
            }
        );
    }, []); 

    let updateInfo = (result) => {
        setWeatherInfo(result);
    };

    return (
        <div className="weather">
            <div className="header">
                <img src="https://cdn-icons-png.flaticon.com/128/2698/2698213.png" />
                &nbsp;&nbsp;
                <h3>Weather Information</h3>
            </div>
            <SearchBox updateInfo={updateInfo} />
            {weatherInfo ? <Info info={weatherInfo} /> : <div>Loading...</div>}
        </div>
    );
}

