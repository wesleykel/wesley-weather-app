import React from 'react'
import style from "./Heading.module.css"


const Heading = ({title}) => {


console.log(process.env.REACT_APP_API_KEY)

    return (
       <h1 id={style.title} >{title}</h1>
    )
}

export default Heading