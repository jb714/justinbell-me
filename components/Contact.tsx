'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')

    try {
      const response = await fetch('https://formspree.io/f/xpwdgnjj', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch (error) {
      setStatus('error')
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-gray-50 via-secondary-50/30 to-white dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-br from-secondary-100 to-secondary-200 rounded-full opacity-15 blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-48 h-48 bg-gradient-to-br from-accent-100 to-accent-200 rounded-full opacity-15 blur-3xl"></div>
      
      <div className="container-padding mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="heading-2 text-center mb-4">
            <span className="bg-gradient-to-r from-secondary-600 to-accent-600 bg-clip-text text-transparent">
              Get in Touch
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-secondary-500 to-accent-500 mx-auto mb-12 rounded-full"></div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 rounded-xl p-8 border border-primary-200 dark:border-primary-700 shadow-lg"
            >
              <h3 className="text-2xl font-bold mb-4 text-primary-800 dark:text-primary-200">
                Let's Connect
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-8 text-lg leading-relaxed">
                I'm always open to discussing new projects, creative ideas, and opportunities to be part of your visions.
              </p>
              
              <div className="space-y-6">
                <motion.a
                  href="mailto:justin@justinbell.me"
                  className="flex items-center p-4 bg-white/80 dark:bg-gray-800/80 rounded-lg hover:bg-white dark:hover:bg-gray-800 transition-all duration-300 shadow-md hover:shadow-lg border border-primary-200 dark:border-primary-700 group"
                  whileHover={{ scale: 1.02, x: 4 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-gray-100 group-hover:text-primary-700 dark:group-hover:text-primary-300 transition-colors">
                      Email
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                      justin@justinbell.me
                    </p>
                  </div>
                </motion.a>

                {/* <motion.a
                  href="https://github.com/justinrbell"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 bg-white/80 dark:bg-gray-800/80 rounded-lg hover:bg-white dark:hover:bg-gray-800 transition-all duration-300 shadow-md hover:shadow-lg border border-secondary-200 dark:border-secondary-700 group"
                  whileHover={{ scale: 1.02, x: 4 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-gray-100 group-hover:text-secondary-700 dark:group-hover:text-secondary-300 transition-colors">
                      GitHub
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                      @justinrbell
                    </p>
                  </div>
                </motion.a> */}

                <motion.a
                  href="https://linkedin.com/in/jbell7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 bg-white/80 dark:bg-gray-800/80 rounded-lg hover:bg-white dark:hover:bg-gray-800 transition-all duration-300 shadow-md hover:shadow-lg border border-blue-200 dark:border-blue-700 group"
                  whileHover={{ scale: 1.02, x: 4 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-gray-100 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors">
                      LinkedIn
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                      /in/jbell7
                    </p>
                  </div>
                </motion.a>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-xl p-8 border border-gray-200 dark:border-gray-700 shadow-lg"
            >
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">
                Send a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300"
                    required
                    disabled={status === 'submitting'}
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-secondary-500 focus:border-secondary-500 transition-all duration-300"
                    required
                    disabled={status === 'submitting'}
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-all duration-300 resize-none"
                    required
                    disabled={status === 'submitting'}
                    placeholder="Tell me about your project or idea..."
                  />
                </div>
                
                <motion.button
                  type="submit"
                  className="w-full px-6 py-4 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl hover:from-primary-700 hover:to-secondary-700 transition-all duration-300 transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  disabled={status === 'submitting'}
                  whileHover={{ scale: status === 'submitting' ? 1 : 1.02 }}
                  whileTap={{ scale: status === 'submitting' ? 1 : 0.98 }}
                >
                  {status === 'submitting' ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    'Send Message'
                  )}
                </motion.button>
                
                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-700 rounded-lg"
                  >
                    <p className="text-emerald-700 dark:text-emerald-300 text-center font-medium">
                      ✨ Message sent successfully! I'll get back to you soon.
                    </p>
                  </motion.div>
                )}
                
                {status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700 rounded-lg"
                  >
                    <p className="text-red-700 dark:text-red-300 text-center font-medium">
                      Failed to send message. Please try again or email me directly.
                    </p>
                  </motion.div>
                )}
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact