import React from 'react'
import { motion } from 'framer-motion'

// Page change transition variants
const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.25, 0.1, 0.25, 1.0],
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.25,
      ease: [0.25, 0.1, 0.25, 1.0],
    },
  },
}

export const PageWrapper = ({ children }) => {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="w-full min-h-screen"
    >
      {children}
    </motion.div>
  )
}

/**
 * ScrollReveal Component
 * Triggers smooth animation when the element enters viewport on scroll.
 */
export const ScrollReveal = ({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.6,
  className = '',
}) => {
  const getInitialOffsets = () => {
    switch (direction) {
      case 'up':
        return { opacity: 0, y: 40, x: 0 }
      case 'down':
        return { opacity: 0, y: -40, x: 0 }
      case 'left':
        return { opacity: 0, x: 40, y: 0 }
      case 'right':
        return { opacity: 0, x: -40, y: 0 }
      case 'zoom':
        return { opacity: 0, scale: 0.92, y: 20 }
      default:
        return { opacity: 0, y: 40, x: 0 }
    }
  }

  return (
    <motion.div
      initial={getInitialOffsets()}
      whileInView={{ opacity: 1, y: 0, x: 0, scale: 1 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

/**
 * StaggerContainer
 * Automatically staggers child elements when scrolled into view.
 */
export const StaggerContainer = ({
  children,
  staggerDelay = 0.15,
  className = '',
}) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

/**
 * StaggerItem
 * Child item inside StaggerContainer
 */
export const StaggerItem = ({ children, className = '' }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.55,
            ease: [0.22, 1, 0.36, 1],
          },
        },
      }}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default PageWrapper
