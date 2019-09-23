import React, {useState} from 'react'
import Person from './Person'
import Service from './services/phonebookService'

const Phonebook = ({people, setPeople}) => {
    const [ showAll, setShowAll ] = useState(true)
    const [ searched, setSearced ] = useState('')
  
    
    const namesToShow = showAll
        ? people
        : people.filter(p => p.name.toLowerCase().includes(searched.toLowerCase()))

    const addedPeople = () => namesToShow.map(person =>
        <Person
            key={person.name}
            person={person}
            deletePerson={() => deletePerson(person.id)}
            />)

    const deletePerson = id => {
        Service
            .deletePerson(id)
            .then(
                setPeople(people.filter(p => p.id !== id))
            )
            
    }
    
    const handleSearch = (e) => {
        setSearced(e.target.value)
        setShowAll(false)
    } 


    return(
        <div>
            <div>
            filter shown names by <input value={searched} onChange={handleSearch}></input>
            </div>
            <div>{addedPeople()}</div>
        </div>

    )

}

export default Phonebook