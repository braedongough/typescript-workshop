import React, { FC } from 'react'
import ReactDOM from 'react-dom'

import { CatFact, getRandomCatFacts } from './get-random-cat-facts'

type Status = 'idle' | 'loading' | 'resolved' | 'error'

interface Props {
    catFacts: CatFact[]
    status: Status
}

const CatFactList: FC<Props> = ({ catFacts, status }) => {
    switch (status) {
        case 'idle':
            return <div>No cat facts to display</div>
        case 'loading':
            return <div>loading...</div>
        case 'error':
            return <div>error!</div>
        case 'resolved':
            return (
                <ul>
                    {catFacts.map((fact) => (
                        <li key={fact._id}>{fact.text}</li>
                    ))}
                </ul>
            )
        default:
            return null
    }
}

const App = () => {
    const [catFacts, setCatFacts] = React.useState<CatFact[]>([])
    const [status, setStatus] = React.useState<Status>('idle')

    React.useEffect(() => {
        const getFiveCatFacts = async () => {
            try {
                setStatus('loading')
                const facts = await getRandomCatFacts(5)
                setCatFacts(facts)
                setStatus('resolved')
            } catch {
                setStatus('error')
            }
        }

        getFiveCatFacts()
    }, [])

    return (
        <>
            <h1>Best Facts about Cats!</h1>
            <CatFactList catFacts={catFacts} status={status} />
        </>
    )
}

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
)
