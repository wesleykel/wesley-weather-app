import React from 'react'

const Button = ({label, func}) => {
    return (
     <button  onClick={func} type={'submit'}>{label}</button>
    )
}

export default Button