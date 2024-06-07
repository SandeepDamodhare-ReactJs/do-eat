import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Mainroutes from './routing/Mainroutes'
import NavBar from './components/NavBar'
import Menu from './page/Menu'

function App() {
  const [count, setCount] = useState(0)
  const [dbpath, setdbpath] = useState('http/localhost/loginsystem');

  return (
    <>
    <NavBar />
    <Mainroutes/>
    
</>
  )
}

export default App
