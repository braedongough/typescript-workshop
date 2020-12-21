import Button from '@material-ui/core/Button'
import React from 'react'

import { ListPokemon } from './components/list'
import { usePokemon } from './hooks/use-pokemon'

import './App.css'

function App() {
    const { pokemon, loadMore, loading } = usePokemon()

    return (
        <div className="center">
            <ListPokemon listOfPokemon={pokemon} />
            <Button onClick={loadMore} disabled={loading}>
                load more
            </Button>
        </div>
    )
}

export default App
