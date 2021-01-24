# Exercises Lesson 4

1. Pull in the lesson changes so that your `useFetch` function includes types, if you haven't already done that.

2. Our useFetch hook takes a generic argument. Convert `use-pokemon-stats.js` to `use-pokemon-stats.ts` and add the correct typings, including the correct type for the `Data` generic on useFetch.

_hint: you'll need to import the `Pokemon` interface from 'pokedex-promise-v2'_

3. Convert `use-list-pokemon.js` to `use-list-pokemon.ts`. Add the correct types to our useState hooks where necessary as well as our useFetch hook.

_hint: you'll need to import the `NamedAPIResource` & `NamedAPIResourceList` interface from 'pokedex-promise-v2'_

4. Convert `search-form.jsx` to `search-form.tsx`. Add the correct typings to the component, making sure to use the correct event typing and HTMLElement typing for the event handler functions.

_hint: you'll need to import the `ChangeEvent` & `FormEvent` interface from 'react'_
