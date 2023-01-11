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

const Statistics = (props) => (
  <div>
    {props.text} {props.value}
  </div>
)

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const sum = good + neutral + bad
  const avg = (good - bad) / sum
  const positive = good / sum

  return (
    <>
      <Header text = "give feedback" />
      <Button handleClick={() => setGood(good + 1)} text="good"/>
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral"/>
      <Button handleClick={() => setBad(bad + 1)} text="bad"/>
      <Header text = "statistics" />
      <Statistics text = "good" value = {good}/>
      <Statistics text = "neutral" value = {neutral}/>
      <Statistics text = "bad" value = {bad}/>
      <Statistics text = "all" value = {sum}/>
      <Statistics text = "average" value = {isNaN(avg) ? "" : avg}/>
      <Statistics text = "positive" value = {isNaN(positive) ? "" : positive * 100 +'%'}/>
    </>
  )
}

export default App