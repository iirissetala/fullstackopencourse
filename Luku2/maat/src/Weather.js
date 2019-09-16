import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Weather = ({city}) => {
    const [forecast, setForecast] = useState([])

    useEffect(() => {
        axios
        .get(`http://api.weatherstack.com/current?access_key=cfee3d6d21ddd3328015df8b5779d492&query=${city}`)
        .then(response => {
            console.log('säätiedot haettu')
            setForecast(response.data.current)
        })
    }, [])
    console.log(forecast)

    const windspeedConverter = () => Math.round(forecast.wind_speed * 5 / 18)

    return(
        <div>
            <h3>Weather in {city}</h3>
            <p>Temperature {forecast.temperature} Celsius, feels like {forecast.feelslike} Celsius</p>
            <p>(observation time {forecast.observation_time} UTC, which is 3h behind Finnish local time)</p>
            <p>Wind: {windspeedConverter()} m/s, direction: {forecast.wind_dir}</p>
            <img src={forecast.weather_icons} height={70} width={70} alt='ikoni' />
            <p>Weather type: {forecast.weather_descriptions}</p>
        </div>
    )
}

export default Weather