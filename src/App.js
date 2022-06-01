import React, { useState } from 'react'
import Name from './components/name'
import FilterFun from './components/filter'
import NewPerson from './components/person'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas',number:'040-1234123', id: 1},
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 

  const [newNum, setNewNum] = useState('')
  const [newName, setNewName] = useState('')
  const [filter, setNewFilter] = useState('')
  const [showAll, setShowAll] = useState(true)

  const addName = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNum,
      id: persons.length + 1,
    }
    setPersons(persons.concat(personObject))
    setNewName('')
    setNewNum('')
  }
  
  const handleFilterChange = (event) => {
    console.log(event.target.value)
    setShowAll(event.target.value)
  }

  const nameToShow = filter === showAll ? persons : persons.filter(per => per.name.toLowerCase().includes(filter.toLowerCase()) === true)
  

  return (
    <div>
      <h2>Phonebook</h2>
      <FilterFun filter = {filter} setNewFilter= {setNewFilter}/>
      <h2>add a new</h2>
      <NewPerson newName = {newName} newNum = {newNum} setNewName = {setNewName} setNewNum = {setNewNum}/>
      <form onSubmit={addName}>
        <div>
          <button type="submit" onChange={handleFilterChange}>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
        <div>{nameToShow.map(per => <Name key = {per.id} per = {per}/>)}</div>

        
        {console.log(nameToShow)}
        
    </div>
  )
}

export default App
