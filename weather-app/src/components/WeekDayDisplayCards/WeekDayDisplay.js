import React from 'react'
import style from "./WeekDay.module.css"
const WeekDayDisplayCard = (props) => {
   
   const {day , high , low} = props
   
   return (
        <div className={style.wrapper}>
         <p>{day}</p>
        <ul>
        <li>{high}</li>
        <li>{low}</li>
        </ul>
            
        </div>
    )
}

export default WeekDayDisplayCard