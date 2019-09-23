import React, {useState, useEffect} from 'react'
import FormNewPerson from './FormNewPerson'
import Phonebook from './Phonebook'
import Services from './services/phonebookService'


const App = () => {
    const [ people, setPeople] = useState([]) 
    const [ show, setShow ] = useState(false)

    useEffect(() => {
      Services
        .getAll()
        .then(receivedPeople => {
          setPeople(receivedPeople)
          console.log('data vastaanotettu ja puhelinluettelo alustettu')
        })
    }, [])
    console.log('palautui', people.length, 'henkilöä')

    return (
      <div>
        <h2>Phonebook</h2>
        <h3>Add new name</h3>
        <FormNewPerson people={people} setPeople={setPeople} show={show} setShow={setShow} />
        <h3>Numbers</h3>
        <Phonebook people={people} setPeople={setPeople} show={show} setShow={setShow} />   
      </div>
    )
  
  }

export default App
