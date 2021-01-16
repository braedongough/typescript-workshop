export const getPokemonName = (pokemon: { name: string }): string => pokemon.name

export const getStatBaseValue = (pokemonStat: { base_stat: number }): number =>
    pokemonStat.base_stat

export const getStatName = (pokemonStat: { stat: { name: string } }): string =>
    pokemonStat.stat.name

export const getPrimaryType = (pokemon: {
    types: { type: { name: string }; slot: number }[]
}): string => {
    const types = pokemon.types

    const primaryType = types.find((pokemonType) => pokemonType.slot === 1)

    if (primaryType) {
        return primaryType.type.name
    } else {
        return 'Unknown'
    }
}
