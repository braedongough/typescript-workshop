import { useState, useEffect } from 'react'

// Convert this to TS during the lesson
export function useFetch(url) {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState()
    const [error, setError] = useState()

    useEffect(() => {
        if (url) {
            setLoading(true)

            fetch(url)
                .then((res) => {
                    return res.json()
                })
                .then((parsedResponse) => {
                    setData(parsedResponse)
                })
                .catch((e) => setError(e))
                .finally(() => setLoading(false))
        }

        return () => {
            setError(undefined)
        }
    }, [url])

    return { data, loading, error }
}
