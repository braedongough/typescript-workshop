import { useFetch } from './use-fetch'

export function usePokemon(pokemonName) {
    const { data: pokemon, loading, error } = useFetch(
        pokemonName ? `https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}` : null
    )

    return { pokemon, loading, error }
}
