import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => {
    return(
        <div>{props.kurssi.name}</div>
    )
}
const Part = (props) => {
    console.log(props)
    return(
        <div>
            <p>{props.parts[0].name} {props.parts[0].exercises}</p>
            <p>{props.parts[1].name} {props.parts[1].exercises}</p>
            <p>{props.parts[2].name} {props.parts[2].exercises}</p>
        </div>
    )
}
const Content = (props) => {
    console.log(props)
    return(
        <div>
            <Part parts={props.parts} />
        </div>
    )
}
const Total = (props) => {
    return(
        <div>Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</div>
    )
}
const App = () => {
    const course = {
        name: 'Half Stack application development',
        parts: [
            {
                name: 'Fundamentals of React ',
                exercises: 10
            },
            {
                name: 'Using props to pass data ',
                exercises: 7
            },
            {
                name: 'State of a component',
                exercises: 14
            }
        ]
    }
    return (
      <div>
        <Header kurssi={course}/>
        <Content parts={course.parts} />
        <Total parts={course.parts} />
      </div>
    );
  }

ReactDOM.render(<App />, document.getElementById('root'));


