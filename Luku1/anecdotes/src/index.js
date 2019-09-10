import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const App = ({anecdotes}) => {
  const [selected, setSelected] = useState(0) 
  const arvottuNro = () => Math.floor(Math.random() * (anecdotes.length))
    
  const selectAnecdote = () => setSelected(arvottuNro())
  const chosenAnecdote = anecdotes[selected]

  const [votes, setVotes] = useState(new Array(6).fill(0))
    
  const increaseVotes = () => {
    const updatedVotes = [...votes]
    updatedVotes[selected] += 1
    setVotes([...updatedVotes])
    console.log(chosenAnecdote, votes[selected], votes, updatedVotes)  
  }
  
  let indexOfMostVotes = votes.indexOf(Math.max(...votes))
  let mostVotes = votes[indexOfMostVotes]
  let bestAnecdote = anecdotes[indexOfMostVotes]

  //const mostVotes = Math.max(...votes) TÄMÄ TOIMII MUTTA EI INDEKSIN ETSIMISEEN!
 // const bestAnecdote = anecdotes[votes.findIndex(mostVotes)]
 // const mostPopularAnecdote = anecdotes[searchedIndex]


  return (
    <div>
        <h2>Anecdote of the day</h2>
        <p>{chosenAnecdote}</p>
        <p>has {votes[selected]} votes</p>
        <button onClick={selectAnecdote}>next anecdote</button>
        <button onClick={increaseVotes}>vote</button>
        <h2>Anecdote with most votes</h2>
        <p>{bestAnecdote}</p>
        <p>has {mostVotes} votes</p>
    </div>
  )
  }

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
