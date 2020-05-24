# Using Interfaces to share types

### What is an interface?

You'll often want to share the types you create across multiple functions and components. It would be impractical to type everything by hand. Interfaces enable us to name these types and create a shared contract across our app.

```tsx
import React from 'react'
import ReactDOM from 'react-dom'

interface User {
    firstName: string
    lastName: number
    age: number
}

const getUserName = (user: User) => `${user.firstName} ${user.lastName}`

function UserProfile(props: User) {
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

In the above example, by implementing our `User` interface, we've guaranteed that our UserProfile component will always receive the props firstName, lastName, and age. Since `getUserName` has implement the same interface, we can pass out props directly to the function without any complaints from Typescript.

### Composing interfaces

Using an interface inside an interface:

```ts
interface User {
    firstName: string
    lastName: number
    age: number
}

interface Props {
    getUserName: (user: User) => string
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
