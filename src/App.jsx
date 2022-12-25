import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import ProfileCard from './components/ProfileCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div id='wrapper'>
      
      <Navbar />
      <ProfileCard />
     

    </div>
  )
}

export default App
