import React, { FC } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'

const Home = () => (
    <div>
        <h1>Home</h1>
        <Link to="/about">To About</Link>
    </div>
)

const About: FC = () => (
    <div>
        <h1>About</h1>
        <Link to="/">To Home</Link>
        <ul>
            <li>Your filled list should be mapped here</li>
        </ul>
    </div>
)

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route>
                    <About />
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
