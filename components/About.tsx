'use client'

import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about" className="section-padding bg-white dark:bg-gray-900">
      <div className="container-padding mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="heading-2 text-center mb-12">
            <span className="text-gray-900 dark:text-gray-100">About Me</span>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-secondary-500 mx-auto mt-4 rounded-full"></div>
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-gray-600 dark:text-gray-300">
                I'm a passionate software engineer with a strong foundation in modern web technologies
                and a keen eye for creating intuitive user experiences. My journey in software
                development has equipped me with the skills to tackle complex challenges and
                deliver robust solutions.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                When I'm not coding, you can find me exploring new technologies, contributing to
                open-source projects, or sharing my knowledge with the developer community. I
                believe in continuous learning and staying up-to-date with industry best practices.
              </p>
              <div className="flex gap-4">
                <motion.a
                  href="#contact"
                  className="px-6 py-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-lg hover:from-primary-700 hover:to-primary-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get in Touch
                </motion.a>
                <motion.a
                  href="#projects"
                  className="px-6 py-3 border-2 border-secondary-500 text-secondary-600 dark:text-secondary-400 rounded-lg hover:bg-secondary-50 dark:hover:bg-secondary-900/20 transition-all duration-300 transform hover:-translate-y-1"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Projects
                </motion.a>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <motion.div 
                className="p-6 bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900/30 dark:to-primary-800/30 rounded-lg border border-primary-200 dark:border-primary-700"
                whileHover={{ scale: 1.02, y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <h3 className="text-xl font-semibold mb-2 text-primary-700 dark:text-primary-300">Problem Solver</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Breaking down complex problems into manageable solutions
                </p>
              </motion.div>
              <motion.div 
                className="p-6 bg-gradient-to-br from-secondary-50 to-secondary-100 dark:from-secondary-900/30 dark:to-secondary-800/30 rounded-lg border border-secondary-200 dark:border-secondary-700"
                whileHover={{ scale: 1.02, y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <h3 className="text-xl font-semibold mb-2 text-secondary-700 dark:text-secondary-300">Clean Code</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Writing maintainable and scalable code
                </p>
              </motion.div>
              <motion.div 
                className="p-6 bg-gradient-to-br from-accent-50 to-accent-100 dark:from-accent-900/30 dark:to-accent-800/30 rounded-lg border border-accent-200 dark:border-accent-700"
                whileHover={{ scale: 1.02, y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <h3 className="text-xl font-semibold mb-2 text-accent-700 dark:text-accent-300">Team Player</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Collaborating effectively in diverse teams
                </p>
              </motion.div>
              <motion.div 
                className="p-6 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-lg border border-gray-200 dark:border-gray-600"
                whileHover={{ scale: 1.02, y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <h3 className="text-xl font-semibold mb-2 text-gray-700 dark:text-gray-300">Fast Learner</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Quickly adapting to new technologies and challenges
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About 