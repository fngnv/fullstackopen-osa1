const Header = (props) =>{
  console.log('Header props ' + props);

  return(
    <div>
      <h1>{props.header}</h1>
    </div>
  )
}

const Part = (props) =>{
  return(
    <div>
      <p>{props.part} {props.exercises}</p>
    </div>
  )
}

const Content = (props) =>{
  console.log('Content props ' + props);

  return(
    <div>
      <Part part={props.parts[0].name} exercises={props.parts[0].exercises} />
      <Part part={props.parts[1].name} exercises={props.parts[1].exercises} />
      <Part part={props.parts[2].name} exercises={props.parts[2].exercises} />
    </div>
  )
}

const Total = (props) =>{
  console.log('Total props ' + props);

  return(
    <div>
      <p>Total {props.total[0].exercises + props.total[1].exercises + props.total[2].exercises}</p>
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return(
    <div>
      <Header header = {course.name} />

      <Content parts ={course.parts} />

      <Total total ={course.parts} />
    </div>
  )
}

export default App;
