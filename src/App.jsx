import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"

import NavbarComponent from './components/Navbar'
import Home from './routes/Home'
import Bio from './routes/Bio'
import Projects from './routes/Projects'
import Maps from './routes/Maps'

import Blog from './routes/Blog'
import BlogPost from './components/Blog/BlogPost'


import './App.css'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div id='wrapper'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavbarComponent />}>
            <Route index element={<Home />} />
            <Route path="/bio" element={<Bio />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/maps" element={<Maps />} />
            <Route path="/blog/:slug" element={<Blog />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App


