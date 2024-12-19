import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import { useState } from "react"
import { colors } from '@mui/material';

export default function InfoBox({info}){
    // let [weatherInfo, setWeatherInfo] = useState({})

    const img_url ="https://plus.unsplash.com/premium_photo-1669816725239-5130a3688685?q=80&w=1145&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

    const hot_url = 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
    const cold_url = 'https://plus.unsplash.com/premium_photo-1664301524345-90a694774519?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
    const rain_url = "https://images.unsplash.com/photo-1456400761117-a768c370cd6d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    // let info = {
    //     city:'Ujjain',
    //     feelsLike: 21.3,
    //     humidity: 41,
    //     pressure: 1015,
    //     temp: 21.98,
    //     tempMax: 21.98,
    //     tempMin: 21.98,
    //     weather:"clear sky"
    // }


    return(
        <div className="infobox">
            <h3>Weather Info</h3>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={info.temp<15? cold_url : (info.humidity>80? rain_url :(info.temp>20 && hot_url))}
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {info.temp<15?  <AcUnitIcon/> : (info.humidity>80? <ThunderstormIcon/> : (info.temp>20 && <WbSunnyIcon/>))} {info.city}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }} component={'span'}>
                        <p>Weather looks like <strong style={{color: 'black'}}> <i>{info.weather} </i></strong> and feels like <strong style={{color: 'black'}}>{info.feelsLike}</strong>  </p>
                        <p> Temprature = {info.temp}&deg;C </p>
                        <p> Feels Like = {info.feelsLike}</p>
                        <p> Humidity = {info.humidity}</p>
                        <p> Pressure = {info.pressure}</p>
                    
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>

        </div>
    )
}