import { CircularProgress } from '@material-ui/core'
import React from 'react'

export function Spinner({ loading, children }) {
    if (loading) {
        return <CircularProgress />
    }
    return <>{children}</>
}

export default Spinner
