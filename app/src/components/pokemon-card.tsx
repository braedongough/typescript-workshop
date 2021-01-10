import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import { NamedAPIResource } from 'pokedex-promise-v2'

interface ListItemProps {
    pokemon: NamedAPIResource
    pokedexNumber: number
    onViewStats: (pokemonName: string) => void
}

function PokemonCard({ pokemon, pokedexNumber, onViewStats }: ListItemProps) {
    const handleViewStats = () => {
        onViewStats(pokemon.name)
    }

    return (
        <Card style={{ width: 300 }}>
            <CardContent>
                <Typography gutterBottom>
                    #{pokedexNumber}: {pokemon.name}
                </Typography>
                <CardActions>
                    <Button size="small" onClick={handleViewStats}>
                        View Stats
                    </Button>
                </CardActions>
            </CardContent>
        </Card>
    )
}

export default PokemonCard
