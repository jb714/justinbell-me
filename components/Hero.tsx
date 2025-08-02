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
          I craft reliable systems and intuitive experiences, focusing on performant and user-friendly applications
          </p>
          <div className="flex flex-col items-center gap-6">
            <div className="flex flex-col sm:flex-row gap-4">
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
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-200 ease-in-out group text-sm border border-gray-300 dark:border-gray-600 rounded-full hover:border-primary-500 dark:hover:border-primary-400"
            >
              <svg
                className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform duration-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Download Resume
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero 