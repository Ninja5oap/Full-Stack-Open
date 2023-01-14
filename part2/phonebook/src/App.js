import { useState } from 'react'
import People from './components/People'

const App = () => {
  const [persons, setPersons] = useState([{name: 'Arto Hellas', number: "123-456-7890", id: 1}]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    
    if (persons.map(person => person.name).includes(newName)){
      window.alert(`${newName} is already added to phonebook`)
    }
    
    else {
      const noteObject = {
        name: newName,
        number: newNumber,
        id: persons.length + 1
      }

      setPersons(persons.concat(noteObject))
      setNewName('')
      setNewNumber('')
    }
  }

  const handleNameChange = (event) => setNewName(event.target.value)
  const handleNumberChange = (event) => setNewNumber(event.target.value)
  
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      
      {persons.map(person => <People key = {person.id} name = {person.name} number = {person.number}/>)}
    </div>
  )
}

export default App