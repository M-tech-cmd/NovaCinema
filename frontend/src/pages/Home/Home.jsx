import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Banner from '../../components/Banner/Banner'
import Movies from '../../components/Movies/Movies'
import Trailers from '../../components/Trailers/Trailers'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <Movies/>
      <Trailers/>
      <Footer/>
    </div>
  )
}

export default Home
