'use client'

import { motion } from 'framer-motion'

const projects = [
  {
    title: 'GameRelish',
    description: 'A community-driven feedback platform that helps gaming enthusiasts share constructive feedback and shape the future of their favorite games. Features include a four-tier feedback system (wishlist, relish, mustard, gamebreaker), real-time community voting, comprehensive moderation tools, email notifications for game launches, and a foundational badge system that rewards quality contributions.',
    technologies: ['Next.js 15', 'TypeScript', 'React Query', 'Supabase', 'PostgreSQL', 'Tailwind CSS'],
    image: '/gamerelish_screenshot.png',
    link: 'https://gamerelish.com',
    status: 'live',
  },
  {
    title: 'Através',
    description: 'An interactive web application that helps users find and explore the antipode (opposite point on Earth) of any location. Features include real-time map updates, address geocoding, a unique "Message in a Bottle" feature for leaving messages at antipodes, and support for 12 languages.',
    technologies: ['React', 'TypeScript', 'Google Maps API', 'Chakra UI', 'Firebase', 'Firestore'],
    image: '/atraves_screenshot.png',
    link: 'https://atraves.net',
    status: 'live',
  },
  {
    title: 'Coming Soon',
    description: 'A crowdfunding platform with a fun twist.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Solana, Supabase'],
    image: '/bread.svg',
    link: '#',
    status: 'coming_soon',
  },
  {
    title: 'Coming Soon',
    description: 'App in the real-time collaboration space.',
    technologies: ['React', 'Node.js', 'Socket.io', 'PostgreSQL'],
    image: '/bread.svg',
    link: '#',
    status: 'coming_soon',
  }
]

const Projects = () => {
  return (
    <section id="projects" className="section-padding bg-gray-50 dark:bg-gray-900/50">
      <div className="container-padding mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="heading-2 text-center mb-12 bg-gradient-to-r from-primary-500 via-accent-500 to-contrast-500 bg-clip-text text-transparent">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden shadow-[0_4px_14px_0_rgba(16,185,129,0.1)] transition-all duration-300 ${
                  project.status === 'live' 
                    ? 'hover:shadow-[0_4px_24px_0_rgba(249,115,22,0.2),0_4px_12px_0_rgba(244,63,94,0.1)]' 
                    : 'hover:shadow-sm'
                }`}
              >
                <div className="aspect-video bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                  {project.image && (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="object-cover w-full h-full"
                    />
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={tech}
                        className={`px-3 py-1 text-white rounded-full text-sm font-medium shadow-sm ${
                          techIndex % 3 === 0 ? 'bg-success-500' : 
                          techIndex % 3 === 1 ? 'bg-contrast-500' : 'bg-rose-500'
                        } ${project.status === 'coming_soon' ? 'opacity-60' : ''}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  {project.status === 'live' ? (
                    <a
                      href={project.link}
                      className="inline-block px-4 py-2 bg-primary-600 text-white rounded-xl hover:bg-primary-700 transition-all duration-200 ease-in-out shadow-md hover:shadow-lg cursor-pointer"
                    >
                      View Project
                    </a>
                  ) : (
                    <button
                      className="inline-block px-4 py-2 bg-gray-400 text-white rounded-xl opacity-80 cursor-not-allowed shadow-sm"
                      disabled
                    >
                      Coming Soon
                    </button>
                  )}
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