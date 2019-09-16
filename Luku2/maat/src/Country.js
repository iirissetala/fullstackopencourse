import React, {useState} from 'react'
import CountrySpecs from './CountrySpecs'

const Country = ({country, show, setShow}) => {
    const [ clicked, setCliked ] = useState(false)

    const handleClick = () => {
        setCliked(true)
        setShow(false)
        console.log(clicked, show)
        
    }
    const showedInfo = () => {
        if (clicked){
            console.log(clicked)
            return(
            <div>
                <CountrySpecs country={country}/>
            </div>
            )
        } else {
            return( 
                <div>
                {show &&<p>{country.name} <button onClick={handleClick}>Show info</button></p>}
                </div>
            )
        }
    }
    
    return(
        <div>{showedInfo()}</div>
    )
}

export default Country;
