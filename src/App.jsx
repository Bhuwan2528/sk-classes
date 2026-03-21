import React from 'react'
import Home from './Pages/Home/Home'
import { Route, Routes } from 'react-router-dom'
import About from './Pages/About'
import Ielts from './Pages/Ielts'
import Contact from './Pages/Contact/Contact'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/ielts' element={<Ielts/>} />
      </Routes>
    </div>
  )
}

export default App