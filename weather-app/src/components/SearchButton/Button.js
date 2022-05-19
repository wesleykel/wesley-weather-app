import React from 'react'
import style from "./Button.module.css"
const Button = (props) => {
  const{label, func} = props
    
    return (
     <button id={style.button} onClick={func} type={'submit'}>{label}</button>
    )
}

export default Button