import { NamedAPIResource, NamedAPIResourceList } from 'pokedex-promise-v2'
import { useEffect, useState } from 'react'
import { useFetch } from './use-fetch'

const RESPONSE_LIMIT = 10

export function useListPokemon() {
    const [listOfPokemon, setListOfPokemon] = useState<NamedAPIResource<string>[]>([])
    const [offset, setOffset] = useState(0)

    const { data, loading } = useFetch<NamedAPIResourceList<string>>(
        `https://pokeapi.co/api/v2/pokemon?limit=${RESPONSE_LIMIT}&offset=${offset}`
    )

    useEffect(() => {
        if (data) {
            setListOfPokemon((currentPokemon) => [...currentPokemon, ...data?.results])
        }
    }, [data])

    const loadMore = () => setOffset(offset + RESPONSE_LIMIT)

    return { loadMore, listOfPokemon, loading }
}
