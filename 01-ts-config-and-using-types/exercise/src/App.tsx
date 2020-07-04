import React from 'react'
import logo from './logo.svg'
import './App.css'

const user = {
  firstName: 'Braedon',
  lastName: 'Gough',
}

function App() {
  // const getUsername = * function definition goes here *
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
        <div>{/* user: {getUserName(user)} */}</div>
      </header>
    </div>
  )
}

export default App
