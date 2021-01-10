import { NamedAPIResource, NamedAPIResourceList } from 'pokedex-promise-v2'
import { useEffect, useState } from 'react'

const RESPONSE_LIMIT = 10

export interface PokemonListResult {
    name: string
    url: string
}

export function useListPokemon() {
    const [listOfPokemon, setListOfPokemon] = useState<NamedAPIResource<string>[]>([])
    const [offset, setOffset] = useState(0)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        fetch(`https://pokeapi.co/api/v2/pokemon?limit=${RESPONSE_LIMIT}&offset=${offset}`)
            .then((res) => {
                return res.json()
            })
            .then((parsedResponse: NamedAPIResourceList<string>) => {
                setListOfPokemon((currentPokemon) => [...currentPokemon, ...parsedResponse.results])
            })
            .finally(() => setLoading(false))
    }, [offset])

    const loadMore = () => setOffset(offset + RESPONSE_LIMIT)

    return { loadMore, listOfPokemon, loading }
}
