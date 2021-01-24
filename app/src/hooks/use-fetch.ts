import { useState, useEffect } from 'react'

// Convert this to TS during the lesson
export function useFetch<Data>(url?: string | null) {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState<Data>()
    const [error, setError] = useState<Error>()

    useEffect(() => {
        if (url) {
            setLoading(true)

            fetch(url)
                .then((res) => {
                    return res.json()
                })
                .then((parsedResponse: Data) => {
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
