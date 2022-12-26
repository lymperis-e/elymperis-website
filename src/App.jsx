import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Navbar from './components/Navbar'
import Home from './routes/Home'
import Bio from './routes/Bio'
import Projects from './routes/Projects'



import './App.css'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div id='wrapper'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path="/bio" element={<Bio />} />
            <Route path="/projects" element={<Projects />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App


