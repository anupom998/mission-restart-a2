import { useState } from 'react'
import './App.css'
import Banner from './components/Banner'
import Footer from './components/Footer'
import MainSection from './components/MainSection'
import Navbar from './components/Navbar'
import {  tickets } from "./data/tickets"

function App() {

 
  return (
    <>
     <Navbar />
     <Banner />
     <MainSection />
      <Footer />
    </>
  )
}

export default App
