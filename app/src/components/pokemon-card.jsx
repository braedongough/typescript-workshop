import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

function PokemonCard({ pokemonName, pokedexNumber, onViewStats }) {
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
