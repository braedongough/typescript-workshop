import { Pokemon } from 'pokedex-promise-v2'
import { useEffect, useState } from 'react'

export function usePokemon(pokemonName: string | null) {
    const [pokemon, setPokemon] = useState<Pokemon | null>(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if (pokemonName) {
            setLoading(true)
            fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
                .then((res) => {
                    return res.json()
                })
                .then((parsedResponse: Pokemon) => {
                    setPokemon(parsedResponse)
                })
                .finally(() => setLoading(false))
        }
    }, [pokemonName])

    const clearStats = () => setPokemon(null)

    return { pokemon, loading, clearStats }
}
