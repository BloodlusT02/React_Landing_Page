import { Fragment, useState } from 'react'
import './App.css'
import LandingPage from './components/LandingPage'
import Main from './components/Main'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Fragment>
      <LandingPage />
      <Main />
    </Fragment>
  )
}

export default App
