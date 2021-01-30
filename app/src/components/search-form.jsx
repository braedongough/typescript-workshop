import TextField from '@material-ui/core/TextField'
import { useState } from 'react'

const SearchForm = ({ onSubmit }) => {
    const [searchValue, setSearchValue] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        onSubmit(searchValue)
        setSearchValue('')
    }

    const handleSearch = (event) => {
        const value = event.target.value
        setSearchValue(value)
    }
    return (
        <form onSubmit={handleSubmit}>
            <TextField
                label="Search for pokemon"
                variant="filled"
                style={{ width: 400 }}
                onChange={handleSearch}
            />
        </form>
    )
}

export default SearchForm
