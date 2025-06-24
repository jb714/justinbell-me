'use client'

import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden">
      {/* Animated background patterns */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary-200 to-primary-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-secondary-200 to-secondary-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-40 left-40 w-60 h-60 bg-gradient-to-br from-accent-200 to-accent-300 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-pulse" style={{animationDelay: '4s'}}></div>
        <div className="absolute bottom-40 right-40 w-60 h-60 bg-gradient-to-br from-emerald-200 to-emerald-300 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-pulse" style={{animationDelay: '6s'}}></div>
      </div>
      
      <div className="container-padding mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="heading-1 mb-6">
            <span className="bg-gradient-to-r from-primary-600 via-secondary-600 to-primary-700 bg-clip-text text-transparent font-bold drop-shadow-sm">
              Hi, I'm Justin Bell
            </span>
            <br />
            <span className="text-gray-800 dark:text-gray-200">Senior Software Engineer</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            I build elegant solutions to complex problems, focusing on creating
            performant and user-friendly applications.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.a
              href="#projects"
              className="px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl hover:from-primary-700 hover:to-primary-800 transition-all duration-300 transform hover:-translate-y-1"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.a>
            <motion.a
              href="#contact"
              className="px-8 py-4 bg-gradient-to-r from-secondary-500 to-secondary-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl hover:from-secondary-600 hover:to-secondary-700 transition-all duration-300 transform hover:-translate-y-1"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero 