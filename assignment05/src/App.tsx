
import './App.css'
import Navbar from './components/navBar/Navbar'
import Hero from './components/HeroSection/Hero'
import Technologies from './components/ExploreTechnologies/Technologies'
import { Suspense } from 'react'


const DataFetch = async () => {
  const Res = await fetch('/data/Data.json')
  const data = await Res.json();
  return data
}




function App() {

  const DataPromise = DataFetch();
  console.log(DataPromise)

  return (
    <>
      <div className="navigation-bar">
        <Navbar />
      </div>
      <div className="hero-section ">
        <Hero />
      </div>
      <div className="technologies">
        <Suspense fallback={"Loding data......."} >
          <Technologies DataPromise={DataPromise} />
        </Suspense>
      </div>
    </>
  )
}

export default App
