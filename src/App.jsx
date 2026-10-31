import React, { useEffect } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Navbar from './Layout/Navbar'
import AppRoute from './Routes/AppRoute'
import Footer from './Layout/Footer'
import ScrollToTop from './Components/ScrollPage/ScrollToTop'
import ScrollProgressBar from './Components/Common/ScrollProgressBar'

const App = () => {
  useEffect(() => {
    // 1. Disable Right Click context menu
    const handleContextMenu = (e) => {
      e.preventDefault()
    }

    // 2. Disable Copy & Cut (allow only in form inputs and textareas)
    const handleCopyCut = (e) => {
      const tag = e.target?.tagName?.toLowerCase()
      if (tag !== 'input' && tag !== 'textarea') {
        e.preventDefault()
      }
    }

    // 3. Disable Keyboard shortcuts (Ctrl+C, Ctrl+U, Ctrl+S, F12, DevTools)
    const handleKeyDown = (e) => {
      const tag = e.target?.tagName?.toLowerCase()
      const isInput = tag === 'input' || tag === 'textarea'

      // Block Ctrl+C / Cmd+C outside inputs
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'c' && !isInput) {
        e.preventDefault()
      }

      // Block Ctrl+U (View Source)
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'u') {
        e.preventDefault()
      }

      // Block Ctrl+S (Save Page)
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 's') {
        e.preventDefault()
      }

      // Block F12 and DevTools shortcuts (Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+Shift+C)
      if (
        e.key === 'F12' ||
        ((e.ctrlKey || e.metaKey) && e.shiftKey && ['i', 'j', 'c'].includes(e.key.toLowerCase()))
      ) {
        e.preventDefault()
      }
    }

    // Attach global event listeners
    document.addEventListener('contextmenu', handleContextMenu)
    document.addEventListener('copy', handleCopyCut)
    document.addEventListener('cut', handleCopyCut)
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu)
      document.removeEventListener('copy', handleCopyCut)
      document.removeEventListener('cut', handleCopyCut)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

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
