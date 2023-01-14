import {useState} from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import People from './components/People'

const App = () => {
  const [persons, setPersons] = useState([{name: 'Arto Hellas', number: "123-456-7890", id: 1}]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    
    if (persons.map(person => person.name).includes(newName)){
      window.alert(`${newName} is already added to phonebook`)
    }
    
    else {
      const person = {
        name: newName,
        number: newNumber,
        id: persons.length + 1
      }

      setPersons(persons.concat(person))
      setNewName('')
      setNewNumber('')
    }
  }

  const handleNameChange = (event) => setNewName(event.target.value)
  const handleNumberChange = (event) => setNewNumber(event.target.value)
  const handleFilterChange = (event) => setNewFilter(event.target.value)
  
  return (
    <>
      <h2>Phonebook</h2>
      <Filter newFilter={newFilter} handleFilterChange={handleFilterChange}/>
      
      <h2>Add New</h2>
      <PersonForm addPerson = {addPerson} newName = {newName} handleNameChange = {handleNameChange} newNumber = {newNumber} 
      handleNumberChange = {handleNumberChange}/>
      
      <h2>Numbers</h2>
      <People people = {persons.filter(person => person.name.toLowerCase().includes(newFilter.toLowerCase()))}/>
    </>
  )
}

export default App