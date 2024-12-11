import './App.css'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './components/HomePage'
import Favorites from './components/Favorites'
import FilmCard from './components/FilmCard'

function App() {
 
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/favorites' element={<Favorites/>} />
        <Route path='/movies/:id' element={<FilmCard/>} />
      </Routes>
    </Router>
    </>
  )
}

export default App
