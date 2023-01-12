import { useState } from 'react'

const Header = (props) => (
  <h1>
    {props.text}
  </h1>
)

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Statistics = (props) => {
  if (props.good == 0 && props.neutral == 0 && props.bad == 0){
    return (
      <>
      No feedback given
      </>
    )
  }

  else{
    return (
      <table>
        <tbody>
          <StatisticsLine text = "good" value = {props.good}/>
          <StatisticsLine text = "neutral" value = {props.neutral}/>
          <StatisticsLine text = "bad" value = {props.bad}/>
          <StatisticsLine text = "all" value = {props.all}/>
          <StatisticsLine text = "average" value = {props.average}/>
          <StatisticsLine text = "positive" value = {props.positive}/>
        </tbody>
      </table>
    )
  }
}

const StatisticsLine = (props) => (
  <tr>
    <td>{props.text}</td>
    <td>{props.value}</td>
  </tr>
)

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const all = good + neutral + bad
  const average = (good - bad) / all
  const positive = good / all * 100 + '%'

  return (
    <>
      <Header text = "give feedback" />
      <Button handleClick={() => setGood(good + 1)} text="good"/>
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral"/>
      <Button handleClick={() => setBad(bad + 1)} text="bad"/>
      <Header text = "statistics" />
      <Statistics good = {good} neutral = {neutral} bad = {bad} all = {all} average = {average} positive = {positive}/>
    </>
  )
}

export default App