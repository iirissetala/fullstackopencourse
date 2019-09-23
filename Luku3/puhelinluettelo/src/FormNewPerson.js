import React, {useState} from 'react'
import Service from './services/phonebookService'
import Notification from './Notification'


const FormNewPerson = ({people, setPeople, show, setShow}) => {
    const [ newName, setNewName ] = useState('')
    const [ newNumber, setNewNumber ] = useState('')
    const [ message, setMessage ] = useState('')
    const [ errorMessage, setErrorMessage ] = useState('')
    

    const handleNameChange = (e) => setNewName(e.target.value)
    const handleNumberChange = (e) => setNewNumber(e.target.value)

    const addName = (e) => {
        e.preventDefault()
        const newPerson = {name: newName, number: newNumber}
        if (people.some(person => person.name === newName)){
            if(window.confirm(`${newName} is already in the phonebook, replace existing number?`)){
                const person = people.find(p => p.name === newName)
                const changedPerson = {...person, number: newNumber }
                Service
                    .updateNumber(person.id, changedPerson)
                    .then(returnedPerson => {
                        setPeople(people.map(p => p.name !== newName ? p : returnedPerson))
                        console.log(changedPerson, returnedPerson)
                    })
                    .catch(error => {
                        console.log('ilmeni virhe:', error.message)
                        setErrorMessage(`${newName} was already deleted from server`, error.message)
                        setShow(true)
                        setTimeout(() => {
                            setErrorMessage('')
                            setShow(false)
                        }, 3000)
                        setPeople(people.filter(p => p.name !== newName))
                    })       
            }
            setNewName('')
            setNewNumber('')
        } else {
            Service
                .createNew(newPerson)
                .then(addedPerson => {
                    setPeople(people.concat(addedPerson))
                    setMessage(`Added: ${newName}`)
                    setShow(true)
                    setTimeout(() => {
                        setMessage('')
                        setShow(false)
                    }, 3000)
                })
                .catch(error => {
                    console.log('ilmeni virhe:', error.message)
                    let errorData = JSON.stringify(error.response.data)
                    setErrorMessage(errorData)
                        setShow(true)
                        setTimeout(() => {
                            setErrorMessage('')
                            setShow(false)
                        }, 3000)
                })
                setNewName('')
                setNewNumber('')
            }
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