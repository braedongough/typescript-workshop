import Button from '@material-ui/core/Button'
import Modal from '@material-ui/core/Modal'
import React from 'react'

import { ListPokemon, ListItem } from './components/list'
import { useListPokemon } from './hooks/use-list-pokemon'

import './App.css'

// todo add styles to modal

function App() {
    const { listOfPokemon, loadMore, loading } = useListPokemon()
    const [open, setOpen] = React.useState(false)

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const onViewStats = () => {
        handleOpen()
        // todo handle setting of state to fetch individual pokemon
    }

    return (
        <>
            <div className="center">
                <ListPokemon loading={!listOfPokemon}>
                    {listOfPokemon.map((pokemon, index) => (
                        <ListItem
                            key={index}
                            pokemon={pokemon}
                            pokedexNumber={index + 1}
                            onViewStats={onViewStats}
                        />
                    ))}
                </ListPokemon>
                <Button variant="contained" onClick={loadMore} disabled={loading}>
                    {loading ? 'loading...' : 'load more'}
                </Button>
            </div>
            <Modal open={open} onClose={handleClose}>
                <div>this is v spicy</div>
            </Modal>
        </>
    )
}

export default App
