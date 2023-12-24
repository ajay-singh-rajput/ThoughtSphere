import React, { useState } from 'react'
import Nav from './components/Nav'
import { Routes, Link, Route } from 'react-router-dom'
import Create from './components/Create'




const App = () => {
  const [thoughts, setthoughts] = useState(JSON.parse(localStorage.getItem('thoughts')) || [])
  return (
    <>
    <div className='flex flex-col relative justify-between gap-5 h-[100vh]'>
      
    <Nav />

    <Routes>
      {/* <Route path="/"/>  */}
      <Route path="/Create" element={<Create thoughts={thoughts} setthoughts={setthoughts}/>}/> 

    </Routes>
    </div>
    </>
  )
}

export default App