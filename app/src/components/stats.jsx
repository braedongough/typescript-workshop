import React from 'react'

import { DialogTitle, List, ListItem, ListItemText } from '@material-ui/core'
import { getPokemonName, getStatName, getStatBaseValue, getPrimaryType } from '../utils'

const Stats = ({ pokemon }) => {
    const pokemonName = getPokemonName(pokemon)
    return (
        <>
            <DialogTitle>
                <div className="dialog-title">
                    <img src={pokemon.sprites.front_default} alt={`${pokemonName} sprite`} />
                    {pokemonName}{' '}
                </div>
            </DialogTitle>
            <List dense={true}>
                <ListItem>
                    <ListItemText primary="Primary type" secondary={getPrimaryType(pokemon)} />
                </ListItem>
                {pokemon?.stats.map((stat, index) => (
                    <ListItem key={index}>
                        <ListItemText
                            primary={getStatName(stat)}
                            secondary={getStatBaseValue(stat)}
                        />
                    </ListItem>
                ))}
            </List>
        </>
    )
}

export default Stats
