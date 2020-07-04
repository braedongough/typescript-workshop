import React, {ChangeEvent} from 'react'
import logo from './logo.svg'
import './App.css'

interface Electric {
  sizeOfBattery: string
  range: number
  getNumberOfRecharges: () => number
}

interface Gas {
  kmPerLiter: number
  typeOfFuel: string // diesel or petrol
  getDateOfLastOilChange: () => string
}

interface Vehicle<TypeOfVehicle> {
  color: string
  topSpeed: number
  registerNewOwner: (ownerName: string) => void
  specs: TypeOfVehicle
}

// interface Props {
//   vehicle: Vehicle
// }

const App = () => {
  // todo: Implement the handle change method
  // const [value, setValue] = React.useState('')

  // const handleChange = (event:) => {
  //   setValue(event.target.value)
  // }
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
      </header>
    </div>
  )
}

export default App
