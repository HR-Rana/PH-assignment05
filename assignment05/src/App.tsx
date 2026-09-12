import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Navbar from './components/navBar/Navbar'
import Hero from './components/HeroSection/Hero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="navigation-bar">
        <Navbar />
      </div>
      <div className="hero-section ">
        <Hero />
      </div>
    </>
  )
}

export default App
