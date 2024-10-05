import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Service from './components/Service'
import Banner from './components/Banner'
import Cards from './components/Cards'
import Banner2 from './components/Banner2'
import Footer from './components/footer'

const App = () => {
  return (
    <main className='overflow-x-hidden'>
      <Navbar/>
      <Hero/>
      <Service/>
      <Banner/>
      <Cards/>
      <Banner2/>
      <Footer/>
    </main>
  )
}

export default App
