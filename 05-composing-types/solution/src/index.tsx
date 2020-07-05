import React from 'react'
import ReactDOM from 'react-dom'

const myPets = [
  {lovesToBark: false, name: 'Spot', favoriteFetchToy: 'tennis ball'},
  {lovesToBark: true, name: 'Penny', favoriteFetchToy: 'tree branch'},
  {firstName: 'Teddy', drinksMilk: true, favoriteNappingSpot: 'on the bed'},
]

interface Dog {
  lovesToBark: boolean
  name: string
  favoriteFetchToy: string
}

interface Cat {
  drinksMilk: boolean
  firstName: string
  favoriteNappingSpot: string
}

// type Pet =

interface CatProps {
  cat: Cat
}

const Cat = ({cat}: CatProps) => (
  <div style={{border: '1px solid blue'}}>
    <div>Name: {cat.firstName}</div>
    <div>Drinks milk: {cat.drinksMilk ? '✅' : '❌'}</div>
    <div>You can find them sleeping here: {cat.favoriteNappingSpot}</div>
  </div>
)

interface DogProps {
  dog: Dog
}

const Dog = ({dog}: DogProps) => (
  <div style={{border: '1px solid red'}}>
    <div>Name: {dog.name}</div>
    <div>Drinks milk: {dog.lovesToBark ? '✅' : '❌'}</div>
    <div>Wann play fetch? Make sure you bring a {dog.favoriteFetchToy}! </div>
  </div>
)

interface PetListProps {
  pets: // user your Pet type here
}

const PetList = ({pets}: PetListProps) => {
  return (
    <div style={{display: 'grid', gap: 10}}>{/* {map over pets here!} */}</div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <PetList />
  </React.StrictMode>,
  document.getElementById('root')
)
