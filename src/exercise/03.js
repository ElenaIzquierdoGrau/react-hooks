// Lifting state
// http://localhost:3000/isolated/exercise/03.js

import * as React from 'react'

function Name({name, onNameChange}) {
  return (
    <div>
      <label htmlFor="name">Name: </label>
      <input id="name" value={name} onChange={onNameChange} />
    </div>
  )
}

function FavoriteAnimal({animal, onNameChange}) {
  return (
    <div>
      <label htmlFor="animal">Favorite Animal: </label>
      <input
        id="animal"
        value={animal}
        onChange={onNameChange}
      />
    </div>
  )
}

function Display({name, animal}) {
  return <div>{`Hey ${name}, your favorite animal is: ${animal}!`}</div>
}


function App() {
  const [name, setName] = React.useState('')
  const [animalName, setAnimalName] = React.useState('')
  return (
    <form>
      <Name name={name} onNameChange={event => setName(event.target.value)} />
      <FavoriteAnimal name={animalName} onNameChange={event => setAnimalName(event.target.value)}/>
      <Display name={name} animal={animalName}/>
    </form>
  )
}

export default App
