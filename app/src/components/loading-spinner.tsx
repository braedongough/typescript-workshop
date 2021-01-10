import { CircularProgress } from '@material-ui/core'
import React from 'react'

export function Spinner({
    loading,
    children,
}: {
    loading: boolean
    children: React.ReactElement[] | React.ReactElement | null
}) {
    if (loading) {
        return <CircularProgress />
    }
    return <>{children}</>
}

export default Spinner
