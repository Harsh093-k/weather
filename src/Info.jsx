import "./Info.css";

const Rain_Url = "https://cdn-icons-png.flaticon.com/128/8841/8841317.png"; // Image URL for rainy weather
const Hot_Url = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkclgSavzuXWWvNm0nVrWYO8IbLSpRpPpW6g&s"; // Image URL for hot weather
const Cold_Url = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThe33e_mJoAfVUAnb2GyE2PI-99-a8Cqh_ng&s"; // Image URL for cold weather

export default function Info({ info }) {
    // Check if the necessary weather data is available
    if (!info || !info.temp || !info.humidity) {
        return <div className="info-container">Loading...</div>;
    }

 
    let imageUrl

     if( info.humidity >= 100){
        imageUrl = Rain_Url;
     }else if (info.temp > 30) {
        imageUrl = Hot_Url; // Hot weather
    } else if (info.temp <= 30 && info.temp >= 10) {
        imageUrl = Cold_Url; // Moderate or cold weather
    } else {
        imageUrl = Cold_Url; // Default to cold if temp is below 10°C
    }

    return (
        <div className="info-container">
            <div className="details-section">
                <img className="img" src={imageUrl} alt="Weather Icon" />
                <h2 className="city-name">{info.city}</h2>
                <div className="temperature">
                    <p>Temperature: {info.temp}&deg;C</p>
                    <p>Min Temp: {info.temp_min}&deg;C</p>
                    <p>Max Temp: {info.temp_max}&deg;C</p>
                </div>
                <div className="humidity">
                    <p>Humidity: {info.humidity}%</p>
                </div>
                <div className="weather-description">
                    <p><strong>Description:</strong> {info.description}</p>
                    <p><strong>Feels Like:</strong> {info.feels_like}&deg;C</p>
                </div>
            </div>
        </div>
    );
};
