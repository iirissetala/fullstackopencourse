import React, {useState, useEffect} from 'react'
import FormNewPerson from './FormNewPerson'
import Phonebook from './Phonebook'
import Services from './services/phonebookService'


const App = () => {
    const [ persons, setPersons] = useState([]) 
    const [ show, setShow ] = useState(false)

    useEffect(() => {
      Services
        .getAll()
        .then(receivedPersons => {
          setPersons(receivedPersons)
          console.log('data vastaanotettu ja puhelinluettelo alustettu')
        })
    }, [])
    console.log('palautui', persons.length, 'henkilöä')

    return (
      <div>
        <h2>Phonebook</h2>
        <h3>Numbers</h3>
        <Phonebook persons={persons} setPersons={setPersons} show={show} setShow={setShow} />
        <h3>Add new name</h3>
        <FormNewPerson persons={persons} setPersons={setPersons} show={show} setShow={setShow} />        
      </div>
    )
  
  }

export default App
