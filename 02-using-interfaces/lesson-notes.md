# Using Interfaces to share types

> One of TypeScript’s core principles is that type checking focuses on the shape that values have.
>
> -- <cite><a href="https://www.typescriptlang.org/docs/handbook/interfaces.html">Typescript Handbook</a></cite>

### What is an interface?

You'll often want to share the common types across multiple functions and components. Interfaces enable us to name these types and create a shared contract across our app.

In React, you'll most commonly be using interfaces to define the shape of props passed to your components.

```tsx
import React from 'react'
import ReactDOM from 'react-dom'

interface Props {
    firstName: string
    lastName: number
    age: number
}

function UserProfile(props: Props) {
    return (
        <>
            <div>name: {getUserName(props)}</div>
            <div>age: {props.age}</div>
        </>
    )
}

ReactDOM.render(
    <UserProfile firstName="Braedon" lastName="Gough" age={25} />,
    document.getElementById('root')
)
```

In the above example, by implementing our `Props` interface, we've guaranteed that our UserProfile component will always receive the props firstName, lastName, and age.

### Composing interfaces

Using an interface inside an interface:

```ts
interface User {
    firstName: string
    lastName: number
    age: number
}

interface Props {
    // * method syntax
    getUserName(user: User): string
    // * arrow function syntax
    getUserAge: () => number
    user: User[]
    fetching: boolean
}
```

Extending an interface:

```ts
interface Timestamps {
    createdAt: string
    updatedAt?: string
    deletedAt?: string
}

interface User extends Timestamps {
    firstName: string
    lastName: number
    age: number
}

const user: User = {
    firstName: 'Braedon',
    lastName: 'Gough',
    age: 25,
    createAt: '2020-05-1700:00:00Z',
}
// updatedAt and deletedAt are optional!
```
