import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import MyBooking from './pages/MyBooking'
import SeatLayout from './pages/SeatLayout'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Movies from './pages/Movies'
import Favourite from './pages/Favourite'
import MovieDetails from './pages/MovieDetails'
const App = () => {
  // To check if the current route is an admin route
  const isAdminRoute = useLocation().pathname.startsWith('/admin');
  return (
    <div>
      {!isAdminRoute && <Navbar />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movies' element={<Movies />} />
        <Route path='/movie/:id' element={<MovieDetails />} />
        <Route path='/favourite' element={<Favourite />} /> 
        <Route path='/mybooking' element={<MyBooking />} /> 
        <Route path='/seatlayout' element={<SeatLayout />} /> 
      </Routes>
      {!isAdminRoute && <Footer />}

    </div>
  )
}

export default App
