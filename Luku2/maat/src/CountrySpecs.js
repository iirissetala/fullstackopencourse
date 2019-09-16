import React from 'react'
import Weather from './Weather'

const CountrySpecs = ({country}) => {
    const languages = () => country.languages.map(l => <li key={l.name}>{l.name}</li>)
    
    return(
        <div>
            <h2>{country.name}</h2>
            <p>capital {country.capital}</p>
            <p>population {country.population}</p>
            <h3>Languages</h3>
            <ul>{languages()}</ul>
            <h3>Flag</h3>
            <img src={country.flag} height={60} width={100} alt={country.name}/>
            <Weather city={country.capital} code={country.alpha2Code.toLowerCase()} />

        </div>
    )



}

export default CountrySpecs;