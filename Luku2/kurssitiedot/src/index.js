import React from 'react';
import ReactDOM from 'react-dom';
import Course from './components/Course'

const App = () => {
    const courses = [
        {
            name: 'Half Stack application development',
            parts: [
                {
                    name: 'Fundamentals of React ',
                    exercises: 10,
                    id: 1
                },
                {
                    name: 'Using props to pass data ',
                    exercises: 7,
                    id: 2
                },
                {
                    name: 'State of a component',
                    exercises: 14,
                    id: 3
                },
                {   
                    name: 'Redux',
                    exercises: 11,
                    id: 4
                }
            ]
        },
        {
            name: 'Node.js',
            parts: [
                {
                    name: 'Routing',
                    exercises: 3,
                    id: 1
                },
                {
                    name: 'Middlewares',
                    exercises: 7,
                    id: 2
                }
            ]
        }
        ]
        const singleCourses = () => courses.map(course =>
            <Course
                key={course.name}
                course={course}
                />)
    
    return (
      <div>
          {singleCourses()}        
      </div>
    )
  }

ReactDOM.render(<App />, document.getElementById('root'));

/* Mapataan kurssit jo tässä yksittäisiksi, ja annetaan yksittäinen kurssi propsina eteenpäin.
Mapataan vielä yksittäistä kurssia osiin Content ja Total tiedostoissa, jotta saadaan vain tarvittavat
tiedot käyttöön. HUOM vaikka taulukko mapataan, ei tarvitse käyttää ul ja li elementtejä. Key pitää
kuitenkin määrittää mappayksen yhteydessä. */