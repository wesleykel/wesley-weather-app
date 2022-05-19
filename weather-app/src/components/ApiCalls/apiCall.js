
import React, { useEffect, useState} from 'react'
import { useContext } from "react"
import { WeatherContext } from "../../App"
import Button from '../SearchButton/Button'


const ApiCalls = () => {
const API_KEY = process.env.REACT_APP_API_KEY   
const API_LOCATION_URL =  "https://api.openweathermap.org/geo/1.0/direct" 
const API_WEATHER_URL = "https://api.openweathermap.org/data/2.5/onecall?"

const {city  ,setCity, setWeatherData,weatherData }=useContext(WeatherContext)



 async function getCity(){

    if(!city){

        return
    }

const longAndLat = await fetch(`${API_LOCATION_URL}?q=${city}&limit=5&appid=${API_KEY}`).then(res => res.json()).catch(reqErr => console.error(reqErr))
const latitude = longAndLat[0].lat
const longitude =longAndLat[0].lon

 await fetch(`${API_WEATHER_URL}lat=${latitude}&lon=${longitude}&units=metric&exclude={}&appid=${API_KEY}`)

.then(res => res.json())
.then(data =>{
    setWeatherData(data)
})
.catch(reqErr => console.error(reqErr))

}



useEffect(()=>{

getCity()

},[])

useEffect(()=>{
console.log(weatherData)
setCity("")
},[weatherData])




    
    return (
        <div>
  <Button func={getCity}  label={"submit"} ></Button>
        </div>
    )
}

export default ApiCalls



