'use client'

import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about" className="section-padding bg-gradient-to-br from-gray-50 via-secondary-50/30 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full opacity-20 blur-xl"></div>
      <div className="absolute bottom-20 left-20 w-40 h-40 bg-gradient-to-br from-accent-100 to-accent-200 rounded-full opacity-20 blur-xl"></div>
      
      <div className="container-padding mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="heading-2 text-center mb-4">
            <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto mb-12 rounded-full"></div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                I'm a Senior Software Engineer with a passion for building scalable systems, streamlining architecture, and shipping thoughtful product features. At The Washington Post's Arc XP, I solution-designed and shipped features across its most-used applications—Composer, WebSked, and Trident—building and enhancing tools for thousands of internal and client users, powering experiences for tens of millions of downstream users across global sites.
              </p>
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                I'm currently on a focused career sabbatical, sharpening my system design and cloud architecture skills as I prepare for the AWS Certified Solutions Architect – Associate exam. Alongside that, I'm building full-stack applications in crowdfunding, blockchain, and real-time collaboration.
              </p>
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                Outside of engineering, I produce music, explore LA's food scene (and my own kitchen), train with rugby in mind, and cheer on the Lakers, Dodgers, and Eagles. Whether I'm coding or creating, I'm drawn to work that lives at the intersection of technology, creativity, and connection.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <motion.a
                  href="#contact"
                  className="px-6 py-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-lg hover:from-primary-700 hover:to-primary-800 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get in Touch
                </motion.a>
                <motion.a
                  href="#projects"
                  className="px-6 py-3 bg-gradient-to-r from-secondary-500 to-secondary-600 text-white rounded-lg hover:from-secondary-600 hover:to-secondary-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Projects
                </motion.a>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <motion.div 
                className="p-6 bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900/30 dark:to-primary-800/30 rounded-xl border border-primary-200 dark:border-primary-700 shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.02, y: -4 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-primary-800 dark:text-primary-200">Full-Stack Expert</h3>
                <p className="text-primary-700 dark:text-primary-300 leading-relaxed">
                  Specializing in React, TypeScript, and AWS cloud services
                </p>
              </motion.div>
              
              <motion.div 
                className="p-6 bg-gradient-to-br from-secondary-50 to-secondary-100 dark:from-secondary-900/30 dark:to-secondary-800/30 rounded-xl border border-secondary-200 dark:border-secondary-700 shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.02, y: -4 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-secondary-800 dark:text-secondary-200">System Architect</h3>
                <p className="text-secondary-700 dark:text-secondary-300 leading-relaxed">
                  Designing scalable solutions and modernizing legacy systems
                </p>
              </motion.div>
              
              <motion.div 
                className="p-6 bg-gradient-to-br from-accent-50 to-accent-100 dark:from-accent-900/30 dark:to-accent-800/30 rounded-xl border border-accent-200 dark:border-accent-700 shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.02, y: -4 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-accent-500 to-accent-600 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-accent-800 dark:text-accent-200">Team Leader</h3>
                <p className="text-accent-700 dark:text-accent-300 leading-relaxed">
                  Mentoring colleagues and leading technical initiatives
                </p>
              </motion.div>
              
              <motion.div 
                className="p-6 bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-900/30 dark:to-emerald-800/30 rounded-xl border border-emerald-200 dark:border-emerald-700 shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.02, y: -4 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C20.832 18.477 19.247 18 17.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-emerald-800 dark:text-emerald-200">Continuous Learner</h3>
                <p className="text-emerald-700 dark:text-emerald-300 leading-relaxed">
                  Pursuing AWS certification and exploring new technologies
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