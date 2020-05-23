import React from 'react'
import logo from './logo.svg'
import './App.css'

// todo: implement props without FunctionComponent
// ? children isn't present
// todo: apply FunctionComponent interface without props
// ? children is present

const App = () => {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
            </header>
        </div>
    )
}

export default App
