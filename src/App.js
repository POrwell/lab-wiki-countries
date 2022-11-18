import { useState } from 'react';
import './App.css';
import CountriesList from './components/CountriesList';
import Navbar from './components/Navbar';
import countriesJSON from "./countries.json"
import {v4 as uuidv4} from "uuid";
import { Route, Routes } from 'react-router-dom';
import CountryDetails from './components/CountryDetails';

function App() {
  const [countries, setCountries] = useState(countriesJSON)

  return (
<div className="App">
<Navbar/>
<Routes>
<Route path="/countrieslist" element={<div className='CountryList'>
{countries.map((country) => 
<CountriesList key={uuidv4()} country={country}/>)}
</div>}/>
<Route path="countrydetails/:alphaCode" element={<div classname="CountryDetails">
<CountryDetails/>
</div>}/>
</Routes>
</div>
  );
}

export default App;
