import React from 'react'

const Button = (props) => {
  const{label, func} = props
    
    return (
     <button  onClick={func} type={'submit'}>{label}</button>
    )
}

export default Button