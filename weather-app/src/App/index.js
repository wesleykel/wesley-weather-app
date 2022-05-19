
import './App.css';
import { createContext, useState } from 'react';
import Heading from '../components/Heading/Heading';
import MainDisplayCard from '../components/MainDisplayCard/MainDisplayCard';
import SearchBar from '../components/SearchBar/SearchBar';
import ApiCalls from '../components/ApiCalls/apiCall';
import FourDayRes from '../components/FourDayResultContainer/FourDayResult';



export const WeatherContext = createContext()

function App() {
  
  const [city , setCity] = useState("London");
 
  const [weatherData, setWeatherData]=useState()
  console.log(city)
  
  return (
    <div className="App">
    <WeatherContext.Provider value={{city, setCity , weatherData, setWeatherData}}>
    <div className="header">
    <Heading title={"Weather App"} />
      
    <div className="searchBarFlex">
      <SearchBar/>
       <ApiCalls/>
    </div>
    </div>  
    <div className="resultsGrid">       
    <MainDisplayCard currentTemp={20} high={10} low={12} description={"hot outside"}/>
    <FourDayRes/>
    </div>
    </WeatherContext.Provider>
   

    </div>
  );
}

export default App;
