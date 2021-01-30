# Composing Types using Type Aliases, Unions and Intersections

## Type Aliases

In addition to interfaces we can create types using the `type` keyword. For example, you could use a type alias to type the props on a component for example:

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
export function usePokemon(pokemonName: string | null) {
    const { data: pokemon, loading, error } = useFetch<Pokemon>(
        pokemonName ? `https://pokeapi.co/api/v2/pokemon/${pokemonName}` : null
    )

    return { pokemon, loading, error }
}
```

Dealing with unions can get tricky fast and sometimes results in confusing checks for potentially undefined properties.
