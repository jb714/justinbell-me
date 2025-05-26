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
          <h2 className="heading-2 text-center mb-12">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg"
              >
                <div className="aspect-video bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                  {project.image && (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="object-contain w-full h-full"
                    />
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    className="inline-block px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                  >
                    View Project
                  </a>
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