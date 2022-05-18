import React, { useContext } from 'react'
import style from "./SearchBar.module.css"
import { WeatherContext } from '../../App'

const SearchBar = () => {
    const {city, setCity} =useContext(WeatherContext)
    
    const handleChange = (e) => {
        e.preventDefault()
   setCity(e.target.value)
    }

    
    return (
      <form className={style.wrapper}>
      <label for="citySearch">Search</label>
         <input id={style.searchBar}  required="required" name='citySearch' type="text" placeholder='Enter a city ' onChange={handleChange} />
     </form>
    )
}

export default SearchBar