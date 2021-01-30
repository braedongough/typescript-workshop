export const getPokemonName = (pokemon) => pokemon.name

export const getStatBaseValue = (pokemonStat) =>
    pokemonStat.base_stat

export const getStatName = (pokemonStat) =>
    pokemonStat.stat.name

export const getPrimaryType = (pokemon) => {
    const types = pokemon.types

    const primaryType = types.find((pokemonType) => pokemonType.slot === 1)

    if (primaryType) {
        return primaryType.type.name
    } else {
        return 'Unknown'
    }
}
