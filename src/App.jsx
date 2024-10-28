import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar'
import About from './components/About'
import Resume from './components/Resume'

function App() {
  const [screen, setScreen] = useState("home")

  const switcher = (arg) => {
    setScreen(arg)
  }

  return (
    <>
      <NavBar switcher={switcher}/>
      <h1>JORDAN BANK</h1>
      <h3>Software Developer & Instructor</h3>
      {screen === "about" ? <About/> : null}
      {screen === "resume" ? <Resume/> : null}
    </>
  )
}

export default App
