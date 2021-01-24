import TextField from '@material-ui/core/TextField'
import { ChangeEvent, FormEvent, useState } from 'react'

interface Props {
    onSubmit: (searchValue: string) => void
}

const SearchForm = ({ onSubmit }: Props) => {
    const [searchValue, setSearchValue] = useState('')

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        onSubmit(searchValue)
    }

    const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
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
