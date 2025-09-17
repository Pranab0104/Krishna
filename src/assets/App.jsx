import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Chapter1 from './Pages/Chapter1'
import Chapter2 from './Pages/Chapter2'

const App = () => {
  return (
    <div className='bg-[#006A71] text-amber-50'>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Chapter1' element={<Chapter1 />} />
        <Route path='/Chapter2' element={<Chapter2 />} />
      </Routes>
    </div>
  )
}

export default App
