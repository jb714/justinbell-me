'use client'

import { motion } from 'framer-motion'

const skills = [
  {
    path: '~/languages & frameworks',
    items: [
      'TypeScript',
      'JavaScript',
      'React',
      'Next.js',
      'Node.js',
      'GraphQL',
      'Tailwind',
      'NestJS',
    ],
  },
  {
    path: '~/backend & data',
    items: [
      'REST APIs',
      'PostgreSQL',
      'DynamoDB',
      'Supabase',
      'Firebase',
      'Redis',
      'Row-level security',
    ],
  },
  {
    path: '~/cloud & infrastructure',
    items: [
      'AWS',
      'Cloudflare R2',
      'Docker',
      'CI/CD',
      'GitHub Actions',
      'Trigger.dev',
      'Modal',
    ],
  },
  {
    path: '~/applied ai & media',
    items: [
      'Computer vision integration',
      'GPU inference workflows',
      'ffmpeg',
      'Human-in-the-loop system design',
    ],
  },
  {
    path: '~/testing',
    items: [
      'Jest',
      'Cypress',
      'Chai',
    ],
  },
]

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-10 border-t border-line bg-panel-2">
      <div className="max-w-[1160px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="font-mono text-xs text-accent tracking-wider uppercase mb-3.5">
            04 — SKILLS
          </div>
          <h2 className="font-display text-[40px] tracking-tight font-semibold mb-12">
            Skills & expertise
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-x-14">
            {skills.map((skillGroup) => (
              <div key={skillGroup.path}>
                <div className="font-mono text-xs text-accent mb-4">
                  {skillGroup.path}
                </div>
                <div className="flex gap-[9px] flex-wrap font-mono text-[13px]">
                  {skillGroup.items.map((skill) => (
                    <span
                      key={skill}
                      className="border border-line bg-panel px-3.5 py-2 rounded-lg"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
