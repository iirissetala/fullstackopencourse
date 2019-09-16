import React, {useState} from 'react'
import Person from './Person'
import Service from './services/phonebookService'

const Phonebook = ({persons, setPersons, show, setShow}) => {
    const [ showAll, setShowAll ] = useState(true)
    const [ searched, setSearced ] = useState('')
  
    
    const namesToShow = showAll
        ? persons
        : persons.filter(p => p.name.toLowerCase().includes(searched.toLowerCase()))

    const addedPersons = () => namesToShow.map(person =>
        <Person
            key={person.name}
            person={person}
            deletePerson={() => deletePerson(person.id)}
            />)

    const deletePerson = id => {
        Service
            .deletePerson(id)
            .then(
                setPersons(persons.filter(p => p.id !== id))
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
            <div>{addedPersons()}</div>
        </div>

    )

}

export default Phonebook