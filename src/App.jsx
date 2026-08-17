import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Navbar from './Layout/Navbar'
import AppRoute from './Routes/AppRoute'
import Footer from './Layout/Footer'
import ScrollToTop from './Components/ScrollPage/ScrollToTop'
import ScrollProgressBar from './Components/Common/ScrollProgressBar'

const App = () => {
  return (
    <>
      <Router>
        <ScrollProgressBar />
        <ScrollToTop />
        <Navbar />
        <AppRoute />
        <Footer />
      </Router>
    </>
  )
}

export default App