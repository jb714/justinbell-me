'use client'

import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container-padding mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="heading-1 mb-6">
            <span className="bg-gradient-to-r from-primary-500 via-accent-500 to-contrast-500 bg-clip-text text-transparent">Hi, I'm Justin Bell</span>
            <br />
            Senior Software Engineer
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            I build elegant solutions to complex problems, focusing on creating
            performant and user-friendly applications.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-primary-600 text-white rounded-xl hover:bg-primary-700 transition-all duration-200 ease-in-out shadow-md hover:shadow-lg"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-contrast-500 text-contrast-500 rounded-xl hover:bg-contrast-500 hover:text-white transition-all duration-200 ease-in-out shadow-md hover:shadow-lg"
            >
              Contact Me
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero 