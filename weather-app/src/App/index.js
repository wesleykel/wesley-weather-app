
import Heading from '../components/Heading/Heading';
import MainDisplayCard from '../components/MainDisplayCard/MainDisplayCard';
import SearchBar from '../components/SearchBar/SearchBar';
import Button from '../components/SearchButton/Button';
import WeekDayDisplayCard from '../components/WeekDayDisplayCards/WeekDayDisplay';
import './App.css';

function App() {
  return (
    <div className="App">
    <Heading title={"Weather App"} />
    <MainDisplayCard currentTemp={20} high={10} low={12} description={"hot outside"}/>
    

    <SearchBar/>
    <Button label ={"click me"} />
    <WeekDayDisplayCard day={"monday"} high={20} low={15}/>
    </div>
  );
}

export default App;
