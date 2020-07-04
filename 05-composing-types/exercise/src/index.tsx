import React, { FC } from 'react'
import ReactDOM from 'react-dom'

import { CatFact, getRandomCatFacts } from './get-random-cat-facts'

const App: FC = () => {
    const [catFacts, setCatFacts] = React.useState<CatFact[]>([])

    React.useEffect(() => {
        const getFiveCatFacts = async () => {
            try {
                const facts = await getRandomCatFacts(5)
                setCatFacts(facts)
            } catch {}
        }

        getFiveCatFacts()
    }, [])
    console.log(catFacts)
    return (
        <>
            <h1>Best Facts about Cats!</h1>
            <div>To be replaced with CatFactsList</div>
        </>
    )
}

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
)
