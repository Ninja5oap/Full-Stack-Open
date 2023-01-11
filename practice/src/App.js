import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const App = () => {
  const [value, setValue] = useState(10)

  const hello = (who) => () => {
    console.log('hello', who)
  }

  return (
    <div>
      {value}
      <Button onClick={hello('world')}>button</Button>
      <Button onClick={hello('react')}>button</Button>
      <Button onClick={hello('function')}>button</Button>
    </div>
  )
}

export default App