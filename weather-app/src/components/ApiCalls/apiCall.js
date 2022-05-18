
import React, { useEffect, useInsertionEffect, useState } from 'react'
import { useContext } from "react"
import { WeatherContext } from "../../App"
import Button from '../SearchButton/Button'


const ApiCalls = () => {
    
const {city , cityKey, setCityKey , setWeatherData, weatherData }=useContext(WeatherContext)
//const [cityKey, setCityKey] = useState("")   
const API_KEY = process.env.REACT_APP_API_KEY  

const getLocationKey =()=> {



fetch(`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=%09${API_KEY}&q=${city}`)
.then(response => response.json())
.then(data => setCityKey(data[0].Key))
.catch(error => console.log(error))
}

console.log(cityKey)

const getWeather =()=>{

    fetch(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${cityKey}?apikey=${API_KEY}`)
    .then(response => response.json())
.then(data => setWeatherData(data))
.catch(error => console.log(error))


}

console.log(weatherData)
useEffect(()=>{

getLocationKey()

},[])

useEffect(()=>{

getWeather()


},[cityKey])


    
    return (
        <div>
  <Button func={getLocationKey} label={"click me"} ></Button>
        </div>
    )
}

export default ApiCalls



