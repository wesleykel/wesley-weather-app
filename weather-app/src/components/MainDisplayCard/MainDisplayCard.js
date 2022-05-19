import React, { useEffect } from 'react'
import style from "./MainDisplay.module.css"
import { WeatherContext } from '../../App'
import { useContext , useState} from 'react'

const MainDisplayCard = () => {
  const [currentDay, setCurrentDay] =useState({})
    const {weatherData }=useContext(WeatherContext)



useEffect(()=>{
    if(!weatherData){


        return
    }
    console.log(weatherData)
 setCurrentDay({
     
    temp:Math.floor(weatherData.current.temp),
    feels:Math.floor(weatherData.current.feels_like),
    humidity:weatherData.current.humidity,
    uvi:Math.floor(weatherData.current.uvi),
    description:weatherData.current.weather[0].description,
    icon:weatherData.current.weather[0].icon,      
    } ) 



},[weatherData])




  
    return (


      
        <div data-testid="displayCard" className={style.wrapper}>
          <h2>Todays Weather</h2>
    <p id={style.currentTemp}>High:{currentDay.temp} º</p> 
          
          
        
           <ul className={style.weatherInfo} >
           <li>Feels like: {currentDay.feels}</li>
           <li>Humidity: {currentDay.humidity}</li>
           <li>UV index {currentDay.uvi}</li>
   <li id={style.description}>{currentDay.description}</li>
           </ul>
        </div>
    )
}

export default MainDisplayCard