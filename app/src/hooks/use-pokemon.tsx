import { useEffect, useState } from 'react'

const BASE_URL = 'https://pokeapi.co/api/v2/'
const RESPONSE_LIMIT = 10

export interface PokemonResult {
    name: string
    url: string
}

type ListPokemonResponse = {
    count: 1118
    next: string
    previous: string | null
    results: PokemonResult[]
}

export function usePokemon() {
    const [pokemon, setPokemon] = useState<PokemonResult[]>([])
    const [offset, setOffset] = useState(0)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        fetch(`${BASE_URL}pokemon?limit=${RESPONSE_LIMIT}&offset=${offset}`)
            .then((res) => {
                setLoading(true)
                return res.json()
            })
            .then((parsedResponse: ListPokemonResponse) => {
                setPokemon((currentPokemon) => [...currentPokemon, ...parsedResponse.results])
            })
            .finally(() => setLoading(false))
    }, [offset])

    const loadMore = () => setOffset(offset + RESPONSE_LIMIT)

    return { loadMore, pokemon, loading }
}
