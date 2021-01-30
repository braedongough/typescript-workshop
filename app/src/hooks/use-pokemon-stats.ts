import { Pokemon } from 'pokedex-promise-v2'
import { useFetch } from './use-fetch'

export function usePokemon(pokemonName: string | null) {
    const { data: pokemon, loading, error } = useFetch<Pokemon>(
        pokemonName ? `https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}` : null
    )

    return { pokemon, loading, error }
}
