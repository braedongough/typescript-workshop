import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CircularProgress from '@material-ui/core/CircularProgress'
import Typography from '@material-ui/core/Typography'

import { PokemonResult } from '../hooks/use-pokemon'

function ListItem({ pokemon, pokedexNumber }: { pokemon: PokemonResult; pokedexNumber: number }) {
    return (
        <Card style={{ width: 300 }}>
            <CardContent>
                <Typography gutterBottom>
                    #{pokedexNumber}: {pokemon.name}
                </Typography>
                <CardActions>
                    <Button size="small">View Stats</Button>
                </CardActions>
            </CardContent>
        </Card>
    )
}

export function ListPokemon({ listOfPokemon }: { listOfPokemon: PokemonResult[] }) {
    if (!listOfPokemon.length) {
        return <CircularProgress />
    }
    return (
        <>
            {listOfPokemon.map((pokemon, index) => (
                <ListItem pokemon={pokemon} pokedexNumber={index + 1}></ListItem>
            ))}
        </>
    )
}
