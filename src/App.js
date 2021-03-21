import './App.css';
import { useSelector } from 'react-redux'
import Header from "./Components/Header";
import SearchBar from './Components/SearchBar'; 
import Result from './Components/Result';
// import {useState} from 'react';


function App() {
  // const [results, setResults] = useState("");
  const results = useSelector(state => state.results)
  return (
    <div className="App">
    <Header />
    <SearchBar/>
    {results && <Result/>}
    </div>
  );
}

export default App;
