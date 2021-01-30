import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import Alert from '@material-ui/lab/Alert'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'

import Spinner from './components/loading-spinner'
import Stats from './components/stats'
import PokemonCard from './components/pokemon-card'
import { useListPokemon } from './hooks/use-list-pokemon'
import { usePokemon } from './hooks/use-pokemon-stats'
import { getPokemonName } from './utils'

import './App.css'
import SearchForm from './components/search-form'

function App() {
    const [selectedPokemon, setSelectedPokemon] = useState<string | null>(null)
    const [open, setOpen] = useState(false)

    const { listOfPokemon, loadMore, loading: loadingList } = useListPokemon()
    const { pokemon, loading: loadingStats, error } = usePokemon(selectedPokemon)

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const onViewStats = (pokemonName: string) => {
        handleOpen()
        setSelectedPokemon(pokemonName)
    }

    return (
        <>
            <div className="center">
                <SearchForm onSubmit={onViewStats} />
                <Spinner loading={!listOfPokemon}>
                    {listOfPokemon.map((it, index) => (
                        <PokemonCard
                            key={index}
                            pokemonName={getPokemonName(it)}
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
                    {!!pokemon && !error ? <Stats pokemon={pokemon} /> : null}

                    {error && (
                        <Alert
                            severity="error"
                            action={
                                <IconButton
                                    aria-label="close"
                                    color="inherit"
                                    size="small"
                                    onClick={handleClose}
                                >
                                    <CloseIcon fontSize="inherit" />
                                </IconButton>
                            }
                        >
                            Pokemon not found!
                        </Alert>
                    )}
                </Spinner>
            </Dialog>
        </>
    )
}

export default App
