import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BattNews from './components/BattNews'
import Footer from './components/footer'
function App() {
  

  return (
    <div className='app'>
      //header file
    <BattNews/>
      //footer file
    <Footer/>
    </div>
  )
}

export default App
