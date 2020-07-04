import React from 'react'
// todo: install for styled-components
// import styled from 'styled-components'
import logo from './logo.svg'
// todo: add types for package https://github.com/shinnn/count-days-in-month
import countDaysInMonth from 'count-days-in-month'
import './App.css'

function App() {
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
      </header>
    </div>
  )
}

export default App
