import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Filter from './Filter'

const App = () => {
  const [countries, setCountries] = useState([])

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        console.log('datan haku onnistui')
        setCountries(response.data)
      })
  }, [])
  console.log('vastaanotettu', countries.length, 'maan tiedot')
  console.log(countries)

  return (
    <div>
      <h2>Maat</h2>
      <p>Hyödynnetään rajapinnan https://restcountries.eu tarjoamaa avointa dataa</p>
      <Filter countries={countries} />

      
    </div>
  );
}

export default App;
