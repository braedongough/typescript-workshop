enum Api {
    baseUrl = 'https://cat-fact.herokuapp.com',
    randomFactEndpoint = '/facts/random',
}

export interface CatFact {
    createdAt: string
    deleted: boolean
    source: string
    status: { verified: boolean; sentCount: number }
    text: string
    type: string
    updatedAt: string
    used: false
    user: string
    __v: number
    _id: string
}

export const getRandomCatFacts = (amount: number): Promise<CatFact[]> =>
    fetch(
        `${Api.baseUrl}${Api.randomFactEndpoint}?amount=${amount}`
    ).then((res) => res.json())
