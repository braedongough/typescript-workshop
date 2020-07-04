# Generics

Generics are like function arguments for our types. They're denoted using the `< >`. They enable use to create flexible types and make our code more reusable.

```ts
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
```

Our vehicle interface accepts a generic of type of vehicle. This allows us to implement common logic all vehicles might have while also enabling us to pass dynamic values for the features based on the type of vehicle this interface is representing.

## Using Generics with Events and HTML Elements

Typing event handlers can be a bit more tricky. We'll need to compose an interface imported from the React namespace as well as use one from the global type definition file, `global.d.ts`. This is available to us in every file like a global variable and actually comes from the types we import for React.

```tsx
import React from 'react'

interface Props {
  firstName: string
  age: number
  children: React.ReactNode
}

const User = ({firstName, age, children}) => {
  const [value, setValue] = React.useState('')

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }
  return (
    <div>
      <input type="text" onChange={handleChange} value={value}>
      <div>name: {firstName}</div>
      <div>age: {age}</div>
      <div>{children}</div>
    </div>
  )
}
```
