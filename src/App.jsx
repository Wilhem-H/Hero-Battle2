import { useState } from 'react'
import './App.css'

import Card from './components/Card'
import hero from './data'
import Vs from './components/Vs'



function App() {
  
  function choosePlayer(length) {
    return Math.floor(Math.random() * length)
  }
  
  

  return <>
   <Card hero={hero[choosePlayer(hero.length)]} />
   <Vs /> 
   <Card hero={hero[choosePlayer(hero.length)]}/>
   </>
}

export default App
