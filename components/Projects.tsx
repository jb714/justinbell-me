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
  return (
    <section id="projects" className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container-padding mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="heading-2 text-center mb-12">
            <span className="text-gray-900 dark:text-gray-100">Featured Projects</span>
            <div className="w-24 h-1 bg-gradient-to-r from-secondary-500 to-accent-500 mx-auto mt-4 rounded-full"></div>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${
                  index % 3 === 0 
                    ? 'bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900/30 dark:to-primary-800/30 border border-primary-200 dark:border-primary-700'
                    : index % 3 === 1
                    ? 'bg-gradient-to-br from-secondary-50 to-secondary-100 dark:from-secondary-900/30 dark:to-secondary-800/30 border border-secondary-200 dark:border-secondary-700'
                    : 'bg-gradient-to-br from-accent-50 to-accent-100 dark:from-accent-900/30 dark:to-accent-800/30 border border-accent-200 dark:border-accent-700'
                }`}
                whileHover={{ scale: 1.02 }}
              >
                <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-400/20 to-secondary-400/20"></div>
                  {project.image && (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="object-contain w-full h-full"
                    />
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-white/80 dark:bg-gray-800/80 text-gray-700 dark:text-gray-300 rounded-full text-sm border border-gray-200 dark:border-gray-600 shadow-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <motion.a
                    href={project.link}
                    className="inline-block px-4 py-2 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-lg hover:from-primary-700 hover:to-primary-800 transition-all duration-300 shadow-md hover:shadow-lg"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Project
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects 