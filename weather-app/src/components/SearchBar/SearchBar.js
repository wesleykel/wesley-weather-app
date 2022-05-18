import React from 'react'
import style from "./SearchBar.module.css"

const SearchBar = () => {
    
    const handleChange = (e) => {
        e.preventDefault()
    console.log(e.target.value)
    }
    
    
    return (
      <form className={style.wrapper}>
      <label for="citySearch">Search</label>
         <input id={style.searchBar}  required="required" name='citySearch' type="text" placeholder='Enter a city ' onChange={handleChange} />
     </form>
    )
}

export default SearchBar