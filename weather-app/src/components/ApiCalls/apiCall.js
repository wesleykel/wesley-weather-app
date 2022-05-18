
import React, { useEffect} from 'react'
import { useContext } from "react"
import { WeatherContext } from "../../App"
import Button from '../SearchButton/Button'


const ApiCalls = () => {
const API_KEY = process.env.REACT_APP_API_KEY      
const {city , cityKey, setCityKey , setWeatherData, weatherData }=useContext(WeatherContext)
  

//Api call to get location key, from searchBar input , runs when page loads using useEffect to get the London Weather First
const getLocationKey =()=> {

fetch(`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=%09${API_KEY}&q=${city}`)
.then(response => response.json())
.then(data => setCityKey(data[0].Key))
.catch(error => console.log(error))
}


//Second Api Call to get the weather for 5 days including today, couldn't get today and next 5 days as this isn't part of the free API package 
const getWeather =()=>{

    fetch(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${cityKey}?apikey=${API_KEY}`)
    .then(response => response.json())
.then(data => setWeatherData(data))
.catch(error => console.log(error))


}

console.log(weatherData)
//Run on Page load using the key for London 328328 
useEffect(()=>{

getLocationKey()

},[])

//Triggged when the cityKey state changes to call the getWeather API function
useEffect(()=>{

getWeather()


},[cityKey])


    
    return (
        <div>
  <Button func={getLocationKey} label={"Search"} ></Button>
        </div>
    )
}

export default ApiCalls



