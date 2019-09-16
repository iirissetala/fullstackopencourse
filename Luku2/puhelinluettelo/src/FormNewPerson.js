import React, {useState} from 'react'
import Service from './services/phonebookService'
import Notification from './Notification'


const FormNewPerson = ({persons, setPersons, show, setShow}) => {
    const [ newName, setNewName ] = useState('')
    const [ newNumber, setNewNumber ] = useState('')
    const [ message, setMessage ] = useState('')
    const [ errorMessage, setErrorMessage ] = useState('')
    

    const handleNameChange = (e) => setNewName(e.target.value)
    const handleNumberChange = (e) => setNewNumber(e.target.value)

    const addName = (e) => {
        e.preventDefault()
        const newPerson = {name: newName, number: newNumber}
        if (persons.some(person => person.name === newName)){
            if(window.confirm(`${newName} is already in the phonebook, replace existing number?`)){
                const person = persons.find(p => p.name === newName)
                const changedPerson = {...person, number: newNumber }
                Service
                    .updateNumber(person.id, changedPerson)
                    .then(returnedPerson => {
                        setPersons(persons.map(p => p.name !== newName ? p : returnedPerson))
                        console.log(changedPerson, returnedPerson)
                    })
                    .catch(error => {
                        setErrorMessage(
                            `${newName} was already deleted from server`
                        )
                        setShow(true)
                        setTimeout(() => {
                            setErrorMessage(null)
                            setShow(false)
                        }, 5000)
                        setPersons(persons.filter(p => p.name !== newName))
                    })
                    
                }
        } else {
            Service
                .createNew(newPerson)
                .then(addedPerson => 
                    setPersons(persons.concat(addedPerson)))
  
        }
        setMessage(`Added: ${newName}`)
        setShow(true)
        setTimeout(() => {
            setMessage(null)
            setShow(false)
        }, 3000)
        setNewName('')
        setNewNumber('')
    }

    return (
        <div>
            <form>
                <div>name: <input value={newName} onChange={handleNameChange}/></div>
                <div>number: <input value={newNumber} onChange={handleNumberChange} /></div>
                <div><button type="submit" onClick={addName}>add</button></div>
                <Notification message={message} errorMessage={errorMessage} show={show} />
            </form>
        </div>
    )
}

export default FormNewPerson