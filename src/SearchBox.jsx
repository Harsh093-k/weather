import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";


export default function SearchBox({updateInfo}) {
    let [city, setCity] = useState("");
    let [err,setErr]=useState(false);
    const API_URL="http://api.openweathermap.org/data/2.5/weather";
    let API_Key="2d719627e2f727df29ffd8b915af7fe0";

    let weather = async() =>{
        try{
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_Key}&units=metric`);
            let jsonresponse= await response.json();
            console.log(jsonresponse);
            let result ={
                city:city,
                temp :jsonresponse.main.temp,
                temp_min : jsonresponse.main.temp_min,
                temp_max : jsonresponse.main.temp_max,
                feels_like : jsonresponse.main.feels_like,
                humidity : jsonresponse.main.humidity,
                description : jsonresponse.weather[0].description,
                main : jsonresponse.weather[0].main,
            }
            console.log(result);
            return result;
        }catch(err){
            throw err;
        }
        
    }
    let handleSubmit = async(e) => {
        try{
            e.preventDefault();
            console.log(city);
            setCity("");
            let newInfo=await weather();
            updateInfo(newInfo);
        }catch(err){
            setErr("No Such place in my Api");
        }
        
    }
    return(
        <div className="SearchBox">
            
            <form onSubmit={handleSubmit}>
            <TextField id="city" label="City Name" variant="outlined"  value={city} onChange={(e) => setCity(e.target.value)} required />
                
                    <br /><br />

                <Button variant="contained" type='submit'>Search</Button>
           { err && <p>No such place exists</p>}
            </form>
        </div>
    );
}