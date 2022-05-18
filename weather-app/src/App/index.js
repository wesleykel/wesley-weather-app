
import Heading from '../components/Heading/Heading';
import MainDisplayCard from '../components/MainDisplayCard/MainDisplayCard';
import SearchBar from '../components/SearchBar/SearchBar';
//import Button from '../components/SearchButton/Button';
import WeekDayDisplayCard from '../components/WeekDayDisplayCards/WeekDayDisplay';
import { createContext, useState } from 'react';

import './App.css';
import ApiCalls from '../components/ApiCalls/apiCall';


export const WeatherContext = createContext()

function App() {
  
  const [city , setCity] = useState();
  const [cityKey, setCityKey] = useState(328328)
  const [weatherData, setWeatherData]=useState()
  
  
  return (
    <div className="App">
    <WeatherContext.Provider value={{city, setCity ,cityKey , setCityKey , weatherData, setWeatherData}}>
    <Heading title={"Weather App"} />
    <MainDisplayCard currentTemp={20} high={10} low={12} description={"hot outside"}/>
    <SearchBar/>
   <ApiCalls/>
    <WeekDayDisplayCard day={"monday"} high={20} low={15}/>
    </WeatherContext.Provider>
   

    </div>
  );
}

export default App;
