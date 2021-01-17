# Composing Types Using Interfaces, Type Aliases, Unions, Intersections and Enums

## Type Aliases

In addition to interfaces we can create Type Aliases using the `type` keyword. For example, you could use a Type Alias to type the props on a component for example:

```ts
type Props = {
    firstName: string
    lastName: string
    age: number
}

function App(props: Props) {...}
```

There are subtle differences between `Type` and `Interface`, however, the docs generally recommend using interfaces over types when possible.

See: [Interfaces vs Type Aliases](https://www.typescriptlang.org/docs/handbook/advanced-types.html#interfaces-vs-type-aliases)

## Unions and Intersections

The easiest way to start thinking about Unions and Intersections are by comparing them to the logical `||` and `&&` operators. With that in mind, it's easier to dig into more of the nuance surrounding these concepts.

### Intersections

When you need to combine multiple types together, that's when you'll reach for `&`

```ts
interface User {
    firstName: string
    lastName: string
    age: number
}

type Address = {
    streetName: string
    houseNumber: number
    country: string
}

type UserWithAddress = User & Address

const obj: UserWithAddress = {
    firstName: 'Doug',
    lastName: 'Butterson',
    age: 54,
    streetName: 'Main st.',
    houseNumber: 32,
    country: 'Canada',
}
```

### Unions

I find unions more difficult to reason about since they are far more nuanced compared to the logical `||` operator. Unions allow us to assign multiple _potential_ types to a value, however, in some cases this means we'll have to check which type we're operating on:

```ts
interface Company {
    legalName: string
    address: string
}

interface Person {
    name: string
    address: string
}

type Entity = Person | Company

const getEntityName = (entity: Entity) => {
    if ('name' in entity) {
        return entity.name
    } else {
        return entity.legalName
    }
}
```

In the example above we use the `in` keyword to act as a narrowing expression for types, ensuring we have the property that exists before we act on it. Dealing with unions can get tricky fast and sometimes results in confusing checks for potentially undefined properties.

Unions can also use `Literal Types`. Sometimes the primitives can be too broad and we need to narrow the scope of our types even further:

```tsx
interface Props {
    children: ReactNode
    color: 'red' | 'blue' | 'green'
}

const Button = ({ color, children }: Props) => (
    <button style={{ backgroundColor: color }}>{children}</button>
)
```

In the context of React, using unions can give use some really cool autocomplete on our components, making the api of our components clear

### Enums

Instead of storing static values in a constant, in Typescript, we can reach for Enums:

```ts
enum Role {
    ADMIN = 'Admin',
    EMPLOYEE = 'Employee',
    GUEST = 'Guest',
}

interface User {
    firstName: string
    lastName: string
    role: Role
}

const user: User = {
    firstName: 'Doug',
    lastName: 'Butterson',
    role: Role.ADMIN,
}
```

Enums are real objects at runtime which can be useful if we want to dynamically map over all of the values:

```tsx
enum Role {
    ADMIN = 'Admin',
    EMPLOYEE = 'Employee',
    GUEST = 'Guest',
}

const SelectUserRole: FC = () => {
    const roles = Object.values(Role)

    return (
        <select placeholder="Select a role for the user">
            {roles.map((role) => (
                <option key={role} value={role}>
                    {role}
                </option>
            ))}
        </select>
    )
}
```
