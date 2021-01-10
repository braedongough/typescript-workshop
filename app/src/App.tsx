import { useState } from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'

import Spinner from './components/loading-spinner'
import Stats from './components/stats'
import PokemonCard from './components/pokemon-card'
import { useListPokemon } from './hooks/use-list-pokemon'
import { usePokemon } from './hooks/use-pokemon-stats'

import './App.css'

function App() {
    const [selectedPokemon, setSelectedPokemon] = useState<string | null>(null)
    const [open, setOpen] = useState(false)

    const { listOfPokemon, loadMore, loading: loadingList } = useListPokemon()
    const { pokemon, clearStats, loading: loadingStats } = usePokemon(selectedPokemon)

    const clearSelection = () => {
        clearStats()
        setSelectedPokemon(null)
    }

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
        clearSelection()
    }

    const onViewStats = (pokemonName: string) => {
        handleOpen()
        setSelectedPokemon(pokemonName)
    }

    return (
        <>
            <div className="center">
                <Spinner loading={!listOfPokemon}>
                    {listOfPokemon.map((pokemon, index) => (
                        <PokemonCard
                            key={index}
                            pokemon={pokemon}
                            pokedexNumber={index + 1}
                            onViewStats={onViewStats}
                        />
                    ))}
                </Spinner>
                <Button variant="contained" onClick={loadMore} disabled={loadingList}>
                    {loadingList ? 'loading...' : 'load more'}
                </Button>
            </div>
            <Dialog open={open} onClose={handleClose}>
                <Spinner loading={loadingStats}>
                    {pokemon ? <Stats pokemon={pokemon} /> : null}
                </Spinner>
            </Dialog>
        </>
    )
}

export default App
