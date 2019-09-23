import axios from 'axios'
const url = '/api/persons'

const getAll = () => {
  const request = axios.get(url)
    return request.then(response => {
        return response.data
    })
}

const createNew = (newPerson) => {
  const request = axios.post(`${url}`, newPerson)
    return request
        .then(response => {
            return (response.data)
        })
        .catch (error => {
            console.log(error.response.data)
            throw error
        })
    
}

const deletePerson = (id) => {
    const request = axios.delete(`${url}/${id}`)
    return request.then(response => {
        return response.data
    })
}

const updateNumber = (id, changedPerson) => {
    const request = axios.put(`${url}/${id}`, changedPerson)
    return request.then(response => {
        return response.data
    })
}

export default {getAll, createNew, deletePerson, updateNumber}