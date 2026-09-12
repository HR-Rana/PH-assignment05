
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


  return (
    <div className=''>
      <div className="navigation-bar shadow-black shadow-sm bg-white py-4 sticky top-0">
        <Navbar />
      </div>
      <div className="container mx-auto">
        <div className="hero-section ">
          <Hero />
        </div>
        <div className="technologies">
          <Suspense fallback={"Loding data......."} >
            <Technologies DataPromise={DataPromise} />
          </Suspense>
        </div>
      </div>
    </div>
  )
}

export default App
