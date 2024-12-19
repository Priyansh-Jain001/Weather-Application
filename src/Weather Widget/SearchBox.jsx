import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';

export default function SearchBox({updateInfo}){
    let [city, setCity] = useState('');
    let [error, setError] =useState(false);
    
    const API_URL = 'https://api.openweathermap.org/data/2.5/weather';
    const API_KEY = "09360cac7ae735e3d6649aa12b223c63";

    let getWeatherInfo = async ()=>{
        try{
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            //    console.log(response);
            let jsonRes = await response.json();
            //    console.log(jsonRes);
            let result = {
                    city: city,
                    temp:jsonRes.main.temp,
                    tempMin: jsonRes.main.temp_min,
                    tempMax: jsonRes.main.temp_max,
                    feelsLike: jsonRes.main.feels_like,
                    humidity: jsonRes.main.humidity,
                    pressure: jsonRes.main.pressure,
                    weather: jsonRes.weather[0].description,
            }
            // updateInfo(result);
            console.log(result);
            return result;}
        catch(err){
            throw err
            // console.log(err);
        }
        
    }

    let handleChange = (event)=>{
        // console.log(event.target.value)
        setCity(event.target.value)
    }

    let handleSubmit = async (event)=>{
       try{
        event.preventDefault();
        console.log(city);
        
        setCity('');
        let info = await getWeatherInfo();
        updateInfo(info);
       }catch(err){
        setError(true);
       }

    }
    
    return (
        <div>
            <h3>Search for weather</h3>
            <form action="#" onSubmit={handleSubmit}>
                <TextField id="city" label="City Name" variant="outlined" name='city' value={city} onChange={handleChange} required/>
                <br /> <br />
                <Button type='submit' variant="contained" endIcon={<SearchIcon />}>
                    Send
                </Button>
                {error && <p style={{color: 'red'}}>No such place in our API!</p>} 
            </form>
        </div>
    )
}