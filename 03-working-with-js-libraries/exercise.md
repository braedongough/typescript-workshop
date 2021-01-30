# Exercises Lesson 3

Working with external APIs can be a pain in TS since it can be difficult to build correct interfaces for the responses, especially when the response can be rather large in the case of the pokemon API. See: https://pokeapi.co/api/v2/pokemon/ditto <- This is the response for just one Pokemon!

Fortunately for us, there are many high quality and open-source type-definition we can leverage for the Pokemon API.

Our project already has installed [`pokeapi-v2-typescript`](https://github.com/mudkipme/pokeapi-v2-typescript).

1. Go to the [`pokeapi-v2-typescript`](https://github.com/mudkipme/pokeapi-v2-typescript) repository and open up `index.d.ts`.

2. Find the interface that represents a single Pokemon.

3. In our app, open `src/components/stats.tsx` and import this interface:

```ts
import /*<imported interface here>*/ from 'pokedex-promise-v2'
```

4. Replace the type you created in the last exercise for the `pokemon` prop with this newly imported interface.
