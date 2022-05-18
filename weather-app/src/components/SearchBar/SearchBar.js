import React from 'react'
import style from "./SearchBar.module.css"

const SearchBar = () => {
    
    
    
    
    return (
      <div className={style.wrapper}>
      <label for="citySearch">Search</label>
        <input id={style.searchBar} name='citySearch' type="text" placeholder='Enter a city ' />
     </div>
    )
}

export default SearchBar