
import Heading from '../components/Heading/Heading';
import MainDisplayCard from '../components/MainDisplayCard/MainDisplayCard';
import SearchBar from '../components/SearchBar/SearchBar';
import './App.css';

function App() {
  return (
    <div className="App">
    <Heading title={"Weather App"} />
    <MainDisplayCard currentTemp={20} high={10} low={12} description={"hot outside"}/>
    <SearchBar/>
    <Button />
    </div>
  );
}

export default App;
