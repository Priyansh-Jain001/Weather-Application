import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox"
import { useState } from "react"

export default function WeatherApp(){

    let [weatherInfo, setWeatherInfo] = useState({
        city:'',
        feelsLike: '',
        humidity: '',
        pressure: '',
        temp: '',
        tempMax: '',
        tempMin: '',
        weather:""
    });

    let updateInfo = (result)=>{
        setWeatherInfo(result)
    }

    return(
        <div>
            <SearchBox updateInfo={updateInfo}/>
            {weatherInfo? <InfoBox info = {weatherInfo}/>: ''}
            
        </div>
    )
}