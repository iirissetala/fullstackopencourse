import React from 'react'

const Total = ({parts}) => {
    const values = parts.map(part => part.exercises)
    console.log(values)
    const getSum = (sum, value) => sum + value
    const total = () => values.reduce(getSum, 0)
    console.log(total)
    console.log(total())
    

    
    return(
       
     <div><b>Total number of exercises {total()}</b></div>
    )
}

export default Total

/* Mapataan kurssin harjoitusmääristä uusi taulukko, josta saadaan reduce metodilla laskettua koko kurssin
harjoitusmäärä */