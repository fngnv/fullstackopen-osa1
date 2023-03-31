import { useState } from 'react'

const Button = (props) => {
  const {handleClick, text} = props;
  return(
    <button onClick={handleClick}>{text}</button>
  )
}

const Anecdote = (props) => {
  return (
    <div>{props.anecdote}</div>
  )
}

const Votes = (props) => {
  return(
    <div>Has {props.votes} votes</div>
  )
}

const MostVotes = (props) =>{
  if(props.mostVotes == null){
    return(
      <div>no votes yet</div>
    )
  }
  return(
    <div>{props.mostVotes}</div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
    'The only way to go fast, is to go well.'
  ]
  
  const [votes, setVotes] = useState(new Uint8Array(8));
  const [selected, setSelected] = useState(0)
  const [mostVotes, setMostVotes] = useState(null);

  const handleNextClick = () => {
    const randomNum = Math.floor((Math.random() * 8) + 0);
    console.log('numder', randomNum);
    setSelected(randomNum);
    console.log('anecdote', anecdotes[selected]);
  }

  const handleVoteClick = () => {
    const copy = [...votes];
    copy[selected] += 1;
    setVotes(copy);
    console.log('votes', votes);

    if(mostVotes == null) {
      if(copy[selected] != null){
        setMostVotes(selected);
      }
    }  else if(copy[selected] > copy[mostVotes]){
      setMostVotes(selected);
    }  
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <Anecdote anecdote={anecdotes[selected]} />
      <Votes votes={votes[selected]} />
      <Button handleClick={handleNextClick} text={'next anecdote'} />
      <Button handleClick={handleVoteClick} text={'vote'} />
      <h1>Anecdote with most votes</h1>
      <MostVotes mostVotes={anecdotes[mostVotes]} />
    </div>
  )
}

export default App;
