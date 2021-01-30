import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

interface Props {
    pokemonName: string
    pokedexNumber: number
    onViewStats: (pokemonName: string) => void
}

function PokemonCard({ pokemonName, pokedexNumber, onViewStats }: Props) {
    const handleViewStats = () => {
        onViewStats(pokemonName)
    }

    return (
        <Card style={{ width: 400 }}>
            <CardContent>
                <Typography gutterBottom>
                    #{pokedexNumber}: {pokemonName}
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
