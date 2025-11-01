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
              I'm a Senior Software Engineer with a passion for building scalable systems, streamlining architecture, and shipping thoughtful product features. At The Washington Post (Arc XP), I solution-designed and shipped features across its most-used applications—Composer, WebSked, and Trident—building and enhancing tools for thousands of internal and client users, powering experiences for tens of millions of downstream users across global sites.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
              Following organizational restructuring at The Washington Post (Arc XP), I'm continuing professional development through product building and contract engineering. I'm currently a Contract Engineer for a stealth startup in the renewable energy sector, contributing to early-stage platform development. I've also architected and launched GameRelish, a community feedback platform for gaming franchises, and modernized Através, a React/Firebase app for cross-world messaging via antipodal maps. As I prepare for the AWS Certified Solutions Architect – Associate exam, I'm deepening the cloud infrastructure expertise I gained over 5 years at The Washington Post.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                Regardless of what I'm doing exactly, I’m always drawn to work that lives at the intersection of technology, creativity, and connection.
              </p>
              <div className="flex gap-4">
                <a
                  href="#contact"
                  className="px-6 py-3 bg-primary-600 text-white rounded-xl hover:bg-primary-700 transition-all duration-200 ease-in-out shadow-md hover:shadow-lg"
                >
                  Get in Touch
                </a>
                <a
                  href="#projects"
                  className="px-6 py-3 border border-contrast-500 text-contrast-500 rounded-xl hover:bg-contrast-500 hover:text-white transition-all duration-200 ease-in-out shadow-md hover:shadow-lg"
                >
                  View Projects
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-[0_4px_14px_0_rgba(16,185,129,0.1)] hover:shadow-[0_4px_20px_0_rgba(249,115,22,0.2)] transition-all duration-300">
                <h3 className="text-xl font-semibold mb-2">System Thinker</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Designing resilient architectures with a product-first mindset
                </p>
              </div>
              <div className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-[0_4px_14px_0_rgba(16,185,129,0.1)] hover:shadow-[0_4px_20px_0_rgba(249,115,22,0.2)] transition-all duration-300">
                <h3 className="text-xl font-semibold mb-2">Full-Stack Craftsman</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Obsessed with clean code, smart tooling, and end-to-end polish
                </p>
              </div>
              <div className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-[0_4px_14px_0_rgba(16,185,129,0.1)] hover:shadow-[0_4px_20px_0_rgba(249,115,22,0.2)] transition-all duration-300">
                <h3 className="text-xl font-semibold mb-2">Product-Driven Engineer</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Bridging design, dev, and business goals with minimal ego
                </p>
              </div>
              <div className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-[0_4px_14px_0_rgba(16,185,129,0.1)] hover:shadow-[0_4px_20px_0_rgba(249,115,22,0.2)] transition-all duration-300">
                <h3 className="text-xl font-semibold mb-2">Collaborative Partner</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Brings momentum, clarity, and calm to high-trust teams
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
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
              <div className="text-center p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-[0_4px_14px_0_rgba(16,185,129,0.1)] hover:shadow-[0_4px_20px_0_rgba(249,115,22,0.2)] transition-all duration-300">
                <span className="text-2xl mb-2 block">🔧</span>
                <p className="text-sm font-medium">Product Engineering</p>
              </div>
              <div className="text-center p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-[0_4px_14px_0_rgba(16,185,129,0.1)] hover:shadow-[0_4px_20px_0_rgba(249,115,22,0.2)] transition-all duration-300">
                <span className="text-2xl mb-2 block">🎵</span>
                <p className="text-sm font-medium">Music Production</p>
              </div>
              <div className="text-center p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-[0_4px_14px_0_rgba(16,185,129,0.1)] hover:shadow-[0_4px_20px_0_rgba(249,115,22,0.2)] transition-all duration-300">
                <span className="text-2xl mb-2 block">💪</span>
                <p className="text-sm font-medium">Physical Fitness</p>
              </div>
              <div className="text-center p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-[0_4px_14px_0_rgba(16,185,129,0.1)] hover:shadow-[0_4px_20px_0_rgba(249,115,22,0.2)] transition-all duration-300">
                <span className="text-2xl mb-2 block">🌲</span>
                <p className="text-sm font-medium">Nature & the Outdoors</p>
              </div>
              <div className="text-center p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-[0_4px_14px_0_rgba(16,185,129,0.1)] hover:shadow-[0_4px_20px_0_rgba(249,115,22,0.2)] transition-all duration-300">
                <span className="text-2xl mb-2 block">✍️</span>
                <p className="text-sm font-medium">Fictional Writing</p>
              </div>
              <div className="text-center p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-[0_4px_14px_0_rgba(16,185,129,0.1)] hover:shadow-[0_4px_20px_0_rgba(249,115,22,0.2)] transition-all duration-300">
                <span className="text-2xl mb-2 block">🤝</span>
                <p className="text-sm font-medium">Community Impact</p>
              </div>
              <div className="text-center p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-[0_4px_14px_0_rgba(16,185,129,0.1)] hover:shadow-[0_4px_20px_0_rgba(249,115,22,0.2)] transition-all duration-300">
                <span className="text-2xl mb-2 block">🏀⚾🏈</span>
                <p className="text-sm font-medium">Sports: Lakers/Dodgers/Eagles</p>
              </div>
              <div className="text-center p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-[0_4px_14px_0_rgba(16,185,129,0.1)] hover:shadow-[0_4px_20px_0_rgba(249,115,22,0.2)] transition-all duration-300">
                <span className="text-2xl mb-2 block">🍳🍴</span>
                <p className="text-sm font-medium">Food (Cooking & Eating)</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About 