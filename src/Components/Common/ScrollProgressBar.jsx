import React from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'

/**
 * ScrollProgressBar
 * Renders a glowing top-edge scroll progress indicator that advances smoothly
 * as the user scrolls down any page on the website.
 */
const ScrollProgressBar = () => {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 150,
    damping: 25,
    restDelta: 0.001,
  })

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#004658] via-[#00D8FF] to-emerald-400 origin-left z-[60] pointer-events-none shadow-[0_0_12px_rgba(0,216,255,0.6)]"
      style={{ scaleX }}
    />
  )
}

export default ScrollProgressBar
