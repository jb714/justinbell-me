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
          <h2 className="heading-2 text-center mb-12 bg-gradient-to-r from-primary-600 via-rose-500 to-amber-500 bg-clip-text text-transparent">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-gray-600 dark:text-gray-300">
              I'm a Senior Software Engineer with a passion for building scalable systems, streamlining architecture, and shipping thoughtful product features. At The Washington Post’s Arc XP, I solution-designed and shipped features across its most-used applications—Composer, WebSked, and Trident—building and enhancing tools for thousands of internal and client users, powering experiences for tens of millions of downstream users across global sites.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
              I'm currently on a focused career sabbatical, sharpening my system design and cloud architecture skills as I prepare for the AWS Certified Solutions Architect – Associate exam. During this time, I’ve been modernizing Através, a legacy geolocation and messaging app; architecting and scaling GameRelish, a feedback marketplace for games; and building additional full-stack applications in crowdfunding, blockchain, and real-time collaboration.         </p>
              <p className="text-gray-600 dark:text-gray-300">
              Outside of engineering, I produce music, explore LA’s food scene (and my own kitchen), train with rugby in mind, and cheer on the Lakers, Dodgers, and Eagles. Whether I’m coding or creating, I’m drawn to work that lives at the intersection of technology, creativity, and connection.              </p>
              <div className="flex gap-4">
                <a
                  href="#contact"
                  className="px-6 py-3 bg-primary-600 text-white rounded-xl hover:bg-primary-700 transition-all duration-200 ease-in-out shadow-md hover:shadow-lg"
                >
                  Get in Touch
                </a>
                <a
                  href="#projects"
              className="px-6 py-3 border border-amber-500 text-amber-500 rounded-xl hover:bg-amber-500 hover:text-white transition-all duration-200 ease-in-out shadow-md hover:shadow-lg"
                >
                  View Projects
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-[0_4px_14px_0_rgba(16,185,129,0.1)] hover:shadow-[0_4px_20px_0_rgba(249,115,22,0.2)] transition-all duration-300">
                <h3 className="text-xl font-semibold mb-2">Full-Stack Expert</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Specializing in React, TypeScript, and AWS cloud services
                </p>
              </div>
              <div className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-[0_4px_14px_0_rgba(16,185,129,0.1)] hover:shadow-[0_4px_20px_0_rgba(249,115,22,0.2)] transition-all duration-300">
                <h3 className="text-xl font-semibold mb-2">System Architect</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Designing scalable solutions and modernizing legacy systems
                </p>
              </div>
              <div className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-[0_4px_14px_0_rgba(16,185,129,0.1)] hover:shadow-[0_4px_20px_0_rgba(249,115,22,0.2)] transition-all duration-300">
                <h3 className="text-xl font-semibold mb-2">Team Leader</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Mentoring colleagues and leading technical initiatives
                </p>
              </div>
              <div className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-[0_4px_14px_0_rgba(16,185,129,0.1)] hover:shadow-[0_4px_20px_0_rgba(249,115,22,0.2)] transition-all duration-300">
                <h3 className="text-xl font-semibold mb-2">Continuous Learner</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Pursuing AWS certification and exploring new technologies
                </p>
              </div>
            </div>
          </div>

          {/* Interests Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <h3 className="heading-3 text-center mb-8 bg-gradient-to-r from-contrast-500 via-coral-500 to-accent-500 bg-clip-text text-transparent">Interests & Passions</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-4xl mx-auto">
              <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <span className="text-2xl mb-2 block">🎵</span>
                <p className="text-sm font-medium">Music Production</p>
              </div>
              <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <span className="text-2xl mb-2 block">✈️</span>
                <p className="text-sm font-medium">Travel</p>
              </div>
              <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <span className="text-2xl mb-2 block">✍️</span>
                <p className="text-sm font-medium">Writing</p>
              </div>
              <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <span className="text-2xl mb-2 block">🌍</span>
                <p className="text-sm font-medium">Social Enterprise</p>
              </div>
              <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <span className="text-2xl mb-2 block">🏀⚾</span>
                <p className="text-sm font-medium">LA Sports</p>
              </div>
              <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg col-span-2 md:col-span-1">
                <span className="text-2xl mb-2 block">🍳</span>
                <p className="text-sm font-medium">Cooking</p>
              </div>
              <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg col-span-2 md:col-span-2 lg:col-span-1">
                <span className="text-2xl mb-2 block">🍴</span>
                <p className="text-sm font-medium">Food Explorer</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About 