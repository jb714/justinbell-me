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
          <h2 className="heading-2 text-center mb-12">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-gray-600 dark:text-gray-300">
              I'm a Senior Software Engineer with a passion for building scalable systems, streamlining architecture, and shipping thoughtful product features. At The Washington Post’s Arc XP, I solution-designed and shipped features across its most-used applications—Composer, WebSked, and Trident—building and enhancing tools for thousands of internal and client users, powering experiences for tens of millions of downstream users across global sites.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
              I'm currently on a focused career sabbatical, sharpening my system design and cloud architecture skills as I prepare for the AWS Certified Solutions Architect – Associate exam. Alongside that, I'm building full-stack applications in crowdfunding, blockchain, and real-time collaboration.              </p>
              <p className="text-gray-600 dark:text-gray-300">
              Outside of engineering, I produce music, explore LA’s food scene (and my own kitchen), train with rugby in mind, and cheer on the Lakers, Dodgers, and Eagles. Whether I’m coding or creating, I’m drawn to work that lives at the intersection of technology, creativity, and connection.              </p>
              <div className="flex gap-4">
                <a
                  href="#contact"
                  className="px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                >
                  Get in Touch
                </a>
                <a
                  href="#projects"
                  className="px-6 py-3 border border-primary-600 text-primary-600 rounded-lg hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors"
                >
                  View Projects
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Full-Stack Expert</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Specializing in React, TypeScript, and AWS cloud services
                </p>
              </div>
              <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">System Architect</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Designing scalable solutions and modernizing legacy systems
                </p>
              </div>
              <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Team Leader</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Mentoring colleagues and leading technical initiatives
                </p>
              </div>
              <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Continuous Learner</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Pursuing AWS certification and exploring new technologies
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About 