import React, { FC } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import filledArray from 'filled-array'

const Home = () => (
    <div>
        <h1>Home</h1>
        <Link to="/about">To About</Link>
    </div>
)

const About: FC<{ list: string[] }> = ({ list }) => (
    <div>
        <h1>About</h1>
        <Link to="/">To Home</Link>
        <ul>
            {list.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    </div>
)

const App = () => {
    const list = filledArray('braedon', 20)

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route>
                    <About list={list} />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
)
