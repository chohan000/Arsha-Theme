import { useState } from 'react'
import Navbar from './components/Navbar';
import Firstsec from './components/Firstsec';
import SecondSec from './components/SecondSec';
import ThirdSec from './components/ThirdSec';
import ForthSec from './components/ForthSec';
import FifthSec from './components/FifthSec';
import SixthSec from './components/SixthSec';
import SeventhSec from './components/SeventhSec';
import Footer from './components/Footer';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
    <Firstsec />
    <SecondSec/>
    <ThirdSec/>
    <ForthSec/>
    <FifthSec/>
    <SixthSec/>
    <SeventhSec/>
    <Footer/>
    </>
  )
}

export default App
