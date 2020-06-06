# Exercise: Composing Types - 30min

Often in components you'll see a this pattern or something similar:

```tsx
const App: FC<{loading: boolean; error: boolean}> = ({loading, error}) => {
  if (loading) {
    return <div>Loading..</div>
  }

  if (error) {
    return <div>Error</div>
  }

  return <div>the real component</div>
}
```

It works but there is no way we can be sure that `error` and `loading` won't both be true at the same time.

In this exercise we'll use a string literal union type to make that guarantee.

See also: [String Literal Types and Union Types](https://mariusschulz.com/blog/string-literal-types-in-typescript#string-literal-types-and-union-types)

1. Create a component `CatFactsList` and return it from the App component. It should take two props, `catFacts` which is an array of `catFacts` and `status`

2. `status` should be a string literal union type with four options: idle, loading, resolved, and error.

3. The state of this status should be toggled based on our call to `getRandomCatFacts` in the try/catch block. idle is our default state for status.

4. Inside of `CatFactsList`, you should switch on the `status` prop, appropriately returning a message for each possible status. For resolved, you should simply map over the facts, returning an unordered list, displaying the `text` property from the fact as the list item. The default case can be `null`

_bonus_: Replace the default case of `null` with an exhaustive check. See [Exhaustiveness checking](https://www.typescriptlang.org/docs/handbook/advanced-types.html#exhaustiveness-checking)
