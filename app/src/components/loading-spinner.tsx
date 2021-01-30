import { CircularProgress } from '@material-ui/core'
import React, { ReactNode } from 'react'

export function Spinner({ loading, children }: { loading: boolean; children: ReactNode }) {
    if (loading) {
        return <CircularProgress />
    }
    return <>{children}</>
}

export default Spinner
