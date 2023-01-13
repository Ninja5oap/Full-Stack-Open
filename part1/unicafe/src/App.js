import { useState } from 'react'

const Header = ({text}) => <h1>{text}</h1>

const Button = ({handleClick, text}) => <button onClick={handleClick}>{text}</button>

const Statistics = ({good, neutral, bad}) => {
  const all = good + neutral + bad

  if (all === 0){
    return (
      <>
      No feedback given
      </>
    )
  }

  else {
    const average = (good - bad) / all
    const positive = good / all * 100 + '%'

    return (
      <table>
        <tbody>
          <StatisticsLine text = "good" value = {good}/>
          <StatisticsLine text = "neutral" value = {neutral}/>
          <StatisticsLine text = "bad" value = {bad}/>
          <StatisticsLine text = "all" value = {all}/>
          <StatisticsLine text = "average" value = {average}/>
          <StatisticsLine text = "positive" value = {positive}/>
        </tbody>
      </table>
    )
  }
}

const StatisticsLine = ({text, value}) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
)

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  return (
    <>
      <Header text = "give feedback"/>
      <Button handleClick={() => setGood(good + 1)} text="good"/>
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral"/>
      <Button handleClick={() => setBad(bad + 1)} text="bad"/>
      <Header text = "statistics"/>
      <Statistics good = {good} neutral = {neutral} bad = {bad}/>
    </>
  )
}

export default App