'use client'

import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Sideline Reels',
    description: 'A human-in-the-loop soccer video product that turns parent-recorded game footage into player-highlighted recruiting reels through GPU tracking, ffmpeg telestration, and durable media orchestration.',
    technologies: ['Next.js', 'TypeScript', 'Trigger.dev', 'Modal'],
    image: '/sideline-reels_screenshot.png',
    link: 'https://sideline-reels.vercel.app',
  },
  {
    title: 'GameRelish',
    description: 'A community-driven feedback platform helping gaming enthusiasts share constructive feedback and shape the future of their favorite games — a four-tier feedback system, real-time voting, moderation tools, and email notifications.',
    technologies: ['Next.js 15', 'TypeScript', 'Supabase', 'PostgreSQL'],
    image: '/gamerelish_screenshot.png',
    link: 'https://gamerelish.com',
  },
  {
    title: 'Através',
    description: 'An interactive web app to discover the antipode — the exact opposite point on Earth for any location. Real-time map rendering, geocoding, 12-language support, and a whimsical "Message in a Bottle" system.',
    technologies: ['React', 'Google Maps', 'Firebase', 'Firestore'],
    image: '/atraves_screenshot.png',
    link: 'https://atraves.net',
  },
]

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-10 border-t border-line">
      <div className="max-w-[1160px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="font-mono text-xs text-accent tracking-wider uppercase mb-3.5">
            03 — PROJECTS
          </div>
          <h2 className="font-display text-[40px] tracking-tight font-semibold mb-12">
            Featured projects
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="border border-line rounded-2xl overflow-hidden bg-panel"
              >
                <div
                  className="h-[260px] bg-panel-2 bg-cover bg-top border-b border-line"
                  style={{ backgroundImage: `url(${project.image})` }}
                />
                <div className="p-[30px]">
                  <div className="font-display text-[22px] font-semibold mb-3">
                    {project.title}
                  </div>
                  <div className="text-sm leading-relaxed text-muted mb-5">
                    {project.description}
                  </div>
                  <div className="flex gap-[7px] flex-wrap mb-[22px] font-mono text-[11.5px] text-accent">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="border border-card-tint-border bg-card-tint px-2.5 py-[5px] rounded-2xl"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    className="inline-block text-sm font-semibold text-text border-b-[1.5px] border-accent pb-0.5 hover:text-accent transition-colors"
                  >
                    View project →
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
