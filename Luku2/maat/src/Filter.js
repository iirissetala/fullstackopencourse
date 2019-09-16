import React, {useState} from 'react'
import Country from './Country'
import CountrySpecs from './CountrySpecs'

const Filter = ({countries}) => {
    const [ showAll, setShowAll ] = useState(true)
    const [ searched, setSearched ] = useState('')
    const [show, setShow] = useState(true)
    

    const countriesToShow = showAll
        ? countries
        : countries.filter(c => c.name.toLowerCase().includes(searched.toLowerCase()))

    const singleCountries = () => {
        if (countriesToShow.length > 1){
            return names()
        } else {
            return specs()
        }
    }
    console.log(countriesToShow.length)

    const specs = () => countriesToShow.map(country =>
        <CountrySpecs key={country.name} country={country} />)
    const names = () => countriesToShow.map(country =>
        <Country key={country.name} country={country} show={show} setShow={setShow} />)

    const handleSearch = (e) => {
        setShowAll(false)
        setSearched(e.target.value)
    }

    return(
        <div>
            <div>find countries by name 
                <input value={searched} onChange={handleSearch}></input></div>
            <div>{singleCountries()}</div>
        </div>
    )
}

export default Filter;