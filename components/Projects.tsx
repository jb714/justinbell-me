'use client'

import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Através',
    description: 'An interactive web application that helps users find and explore the antipode (opposite point on Earth) of any location. Features include real-time map updates, address geocoding, a unique "Message in a Bottle" feature for leaving messages at antipodes, and support for 12 languages.',
    technologies: ['React', 'TypeScript', 'Google Maps API', 'Chakra UI', 'Firebase', 'Firestore'],
    image: '/atraves_screenshot.png',
    link: 'https://atraves.net',
  },
  {
    title: 'Coming Soon',
    description: 'A crowdfunding platform with a fun twist.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Solana, Supabase'],
    image: '/bread.svg',
    link: '#',
  },
  {
    title: 'Coming Soon',
    description: 'App in the real-time collaboration space.',
    technologies: ['React', 'Node.js', 'Socket.io', 'PostgreSQL'],
    image: '/bread.svg',
    link: '#',
  }
]

const Projects = () => {
  const getCardColors = (index: number) => {
    const colorSchemes = [
      {
        bg: 'bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20',
        border: 'border-primary-200 dark:border-primary-700',
        header: 'bg-gradient-to-r from-primary-500 to-primary-600',
        button: 'bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800'
      },
      {
        bg: 'bg-gradient-to-br from-secondary-50 to-secondary-100 dark:from-secondary-900/20 dark:to-secondary-800/20',
        border: 'border-secondary-200 dark:border-secondary-700',
        header: 'bg-gradient-to-r from-secondary-500 to-secondary-600',
        button: 'bg-gradient-to-r from-secondary-600 to-secondary-700 hover:from-secondary-700 hover:to-secondary-800'
      },
      {
        bg: 'bg-gradient-to-br from-accent-50 to-accent-100 dark:from-accent-900/20 dark:to-accent-800/20',
        border: 'border-accent-200 dark:border-accent-700',
        header: 'bg-gradient-to-r from-accent-500 to-accent-600',
        button: 'bg-gradient-to-r from-accent-600 to-accent-700 hover:from-accent-700 hover:to-accent-800'
      }
    ]
    return colorSchemes[index % colorSchemes.length]
  }

  return (
    <section id="projects" className="section-padding bg-gradient-to-br from-white via-primary-50/20 to-gray-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-br from-secondary-100 to-secondary-200 rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-48 h-48 bg-gradient-to-br from-accent-100 to-accent-200 rounded-full opacity-10 blur-3xl"></div>
      
      <div className="container-padding mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="heading-2 text-center mb-4">
            <span className="bg-gradient-to-r from-secondary-600 to-accent-600 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-secondary-500 to-accent-500 mx-auto mb-12 rounded-full"></div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => {
              const colors = getCardColors(index)
              return (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`${colors.bg} ${colors.border} rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border group`}
                  whileHover={{ scale: 1.02, y: -4 }}
                >
                  <div className={`aspect-video ${colors.header} relative overflow-hidden flex items-center justify-center`}>
                    <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-black/40"></div>
                    {project.image && (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="object-contain w-full h-full relative z-10 group-hover:scale-105 transition-transform duration-300"
                      />
                    )}
                    {!project.image && (
                      <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                        </svg>
                      </div>
                    )}
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-gray-100 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-white/80 dark:bg-gray-800/80 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium border border-gray-200 dark:border-gray-600 shadow-sm hover:shadow-md transition-shadow"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <motion.a
                      href={project.link}
                      className={`inline-flex items-center px-6 py-3 ${colors.button} text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {project.link === '#' ? 'Coming Soon' : 'View Project'}
                      {project.link !== '#' && (
                        <svg 
                          className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      )}
                    </motion.a>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects