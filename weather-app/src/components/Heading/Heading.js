import React from 'react'
import style from "./Heading.module.css"


const Heading = ({title}) => {


    return (
       <h1 id={style.titles} >{title}</h1>
    )
}

export default Heading