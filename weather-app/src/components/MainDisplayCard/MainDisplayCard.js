import React from 'react'
import style from "./MainDisplay.module.css"


const MainDisplayCard = (props) => {
    
    const {currentTemp ,high, low, description } =props
    
    return (
        <div data-testid="displayCard" className={style.wrapper}>
           <h2 id={style.currentTemp}>{currentTemp}</h2> 
           <p id={style.description}>{description}</p>
           <ul className={style.weatherInfo} >
           <li>{high}</li>
           <li>{low}</li>

           </ul>
        </div>
    )
}

export default MainDisplayCard