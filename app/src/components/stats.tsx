import { DialogTitle, List, ListItem, ListItemText } from '@material-ui/core'
import { Pokemon } from 'pokedex-promise-v2'
import React from 'react'

interface Props {
    pokemon: Pokemon
}

const Stats = ({ pokemon }: Props) => {
    return (
        <>
            <DialogTitle>
                <div className="dialog-title">
                    <img src={pokemon?.sprites.front_default} alt={`${pokemon?.name} sprite`} />
                    {pokemon?.name}{' '}
                </div>
            </DialogTitle>
            <List dense={true}>
                {pokemon?.stats.map((stat) => (
                    <ListItem key={stat.stat.name}>
                        <ListItemText primary={stat.stat.name} secondary={stat.base_stat} />
                    </ListItem>
                ))}
            </List>
        </>
    )
}

export default Stats
