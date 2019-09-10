import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const Button = ({onClick, text}) => (
    <button onClick={onClick}>{text}</button>
)
const Statistic = ({ text, value }) => {
    return(
        <tr>
            <td>{text}</td><td>{value}</td>
        </tr>
    )
}

const Statistics = ({good, neutral, bad, all}) => {
    const average = (good + neutral* 0 + bad * -1)/all
    const positive = good/all * 100 + ' %'
    if (all === 0){
        return ( 
            <p>No feedback given</p>
        )
    }
    return (
        <table>
            <tbody>
                <Statistic text='good' value={good} />
                <Statistic text='neutral' value={neutral} />
                <Statistic text='bad' value={bad} />
                <Statistic text='all' value={all} />
                <Statistic text='average' value={average} />
                <Statistic text='positive' value={positive} />
            </tbody> 
        </table>      
    )
}

const App = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const [all, setAll] = useState(0)

    const handleClickGood = () => {
        setGood(good + 1)
        setAll(all + 1)
    }
    const handleClickNeutral = () => {
        setNeutral(neutral + 1)
        setAll(all + 1)
    }
    const handleClickBad = () => {
        setBad(bad + 1)
        setAll(all + 1)
    }

    return (
        <div>
            <h2>give feedback</h2>
            <Button onClick={handleClickGood} text='good' />
            <Button onClick={handleClickNeutral} text='neutral' />
            <Button onClick={handleClickBad} text='bad' />
            <h2>statistics</h2>
            <Statistics good={good} bad={bad} neutral={neutral} all={all} />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));


