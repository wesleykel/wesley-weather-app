import React from 'react'
import style from "./Heading.module.css"


const Heading = ({title}) => {
    return (
       <h1 id={style.title} >{title}</h1>
    )
}

export default Heading