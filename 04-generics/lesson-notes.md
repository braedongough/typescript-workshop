# Generics

Generics are like function arguments for our types. They're denoted using the `< >`. They enable use to create flexible types and make our code more reusable.

Within React, you'll most commonly need to use generics together with `useState`. Where our state is a number, boolean, or string, the typing can be inferred, however, in the cases where you want to store an object or an array, you'll need to specify the type through the generic.

```ts
import { useState } from 'react'

interface Pokemon {
    name: string
    pokedexNumber: number
}

const [listOfPokemon, setListOfPokemon] = useState<Pokemon[]>([])

// What happens if we don't specify a generic type when setting our default value to an empty array?
```

## Creating a generic function and interface

Creating a basic useFetch hook, we could create a generic for our data since we don't know what we'll be fetching from the API.

```ts
import { useState, useEffect } from 'react'

export function useFetch<Data>(url?: string | null) {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState<Data>()
    const [error, setError] = useState<Error>()

    useEffect(() => {
        if (url) {
            setLoading(true)

            fetch(url)
                .then((res) => {
                    return res.json()
                })
                .then((parsedResponse: Data) => {
                    setData(parsedResponse)
                })
                .catch((e) => setError(e))
                .finally(() => setLoading(false))
        }

        return () => {
            setError(undefined)
        }
    }, [url])

    return { data, loading, error }
}
```

## Using Generics with Events and HTML Elements

Typing event handlers can be a bit more tricky. We'll need to compose an interface imported from the React namespace as well as use one from the global type definition file, `global.d.ts`.

This is available to us in every file like a global variable and actually comes from the types we import for React.

When typing the event for your handler functions, you must specify both the event type as well as the type of element it's triggered from. Event type interface can be imported directly from React!

```tsx
import React, { ChangeEvent } from 'react'

interface Props {
  firstName: string
  age: number
  children: React.ReactNode
}

const User = ({firstName, age, children}: Props) => {
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
