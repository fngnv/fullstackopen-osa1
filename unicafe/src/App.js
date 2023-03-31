import { useState } from 'react'

const StatisticLine = (props)=>{
  if(props.total === 0){
    return (
      <p>No feedback given</p>
    )
  }
    const{amount, text} = props;
    return(
      <tbody><tr><td>{text}</td><td>{amount}</td></tr></tbody>
    )
}

const Button = (props) =>{
  console.log('buttons props', props);
  const {handleClick, text} = props;
  return (
    <button onClick={handleClick}>{text}</button>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  const [sum, setSum] = useState(0)
  const [avg, setAvg] = useState(0)
  const [positive, setPositive] = useState(0)

  const handleGoodClick = () =>{
    console.log('good before', good);
    const updatedGood = good + 1;
    const updatedSum = sum + 1;
    const updatedTotal = total + 1;
    const updatedPositive = updatedGood * 100 / updatedTotal;
    setGood(updatedGood);
    setTotal(updatedTotal);
    setSum(updatedSum);
    console.log('sum', sum);
    setPositive(updatedPositive);
    setAvg(updatedSum / updatedTotal);
    console.log('good after', good);
  }

  const handleNeutralClick = () =>{
    console.log('neutral before', neutral);
    const updatedNeutral = neutral + 1;
    const updatedTotal = total + 1;
    const updatedPositive = good * 100 / updatedTotal;
    setNeutral(updatedNeutral);
    setTotal(total + 1);
    console.log('sum', sum);
    setPositive(updatedPositive);
    setAvg(sum / updatedTotal);
    console.log('neutral after', neutral);
  }

  const handleBadClick = () =>{
    console.log('bad before', bad);
    const updatedBad = bad + 1;
    const updatedTotal = total + 1;
    const updatedSum = sum - 1;
    const updatedPositive = good * 100 / updatedTotal;
    setBad(updatedBad);
    setTotal(updatedTotal);
    setSum(updatedSum);
    console.log('sum', sum);
    setPositive(updatedPositive);
    setAvg(updatedSum / updatedTotal);
    console.log('bad after', bad);
  }

  if(total === 0){
    return(
      <div>
      <h1>give feedback</h1>
      <Button handleClick={handleGoodClick} text='good' />
      <Button handleClick={handleNeutralClick} text='neutral' />
      <Button handleClick={handleBadClick} text='bad' />
      <h1>statistics</h1>
      <StatisticLine total={total} />
    </div>
    )
  }
  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleGoodClick} text='good' />
      <Button handleClick={handleNeutralClick} text='neutral' />
      <Button handleClick={handleBadClick} text='bad' />
      <h1>statistics</h1>
      <table>
      <StatisticLine total={total} />
      <StatisticLine amount={good} text='good' />
      <StatisticLine amount={neutral} text='neutral' />
      <StatisticLine amount={bad} text='bad' />
      <StatisticLine amount={total} text='total' />
      <StatisticLine amount={avg} text='average' />
      <StatisticLine amount={positive} text='positive' />
      </table>
    </div>
  )
}

export default App
