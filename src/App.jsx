import React from 'react'
import './App.css'
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import TopHeader from './components/TopHeader'
import Footer from './components/Footer'
export default function App() {
  return (
   <>
   <TopHeader/>
   <Header/>
   <Routes>
    <Route path='/' element={<Home/>}/>
   </Routes>
   <Footer/>
   </>
  )
}
