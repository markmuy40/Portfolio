import { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// components

import PageNavbar from './components/PageNavbar'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import NotFound from './components/NotFound'

import PageFooter from './components/PageFooter'



const App = () => {

  return (
    <div className='App'>
      <BrowserRouter>
        <PageNavbar />
        <Routes>
          <Route path = '/' element = {<Home/>} />
          <Route path = '/about' element = {<About/>} />
          <Route path = '/projects' element = {<Projects/>} />
          <Route path = '*' element = {<NotFound/>} />
        </Routes>
        <PageFooter />
      </BrowserRouter>
    </div>
  )
  
}

export default App
