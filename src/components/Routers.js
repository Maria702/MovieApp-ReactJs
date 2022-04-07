import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from '../components/About';
import SignUp from '../components/SignUp';
import Login from '../components/Login';
import MovieApi from '../components/MoiveApi';
import { Footer } from './Footer';
const Routers = () => {
  return (
    <>
    <Router>
        <Footer />
        <Routes>
            <Route path='/' elemen={ <MovieApi/>  } />
            <Route path='/About' element={ <About/> } />
            <Route path='/SignUp' element={ <SignUp/> } />
            <Route path='/Login' element={ <Login /> } />
        </Routes>
    </Router>
    </>
  )
}

export default Routers