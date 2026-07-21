'use client'

import { motion } from 'framer-motion'

interface ExperienceItem {
  title: string
  company: string
  period: string
  location: string
  intro?: string
  description: string[]
  isTwoColumn?: boolean
}

const experience: ExperienceItem[] = [
  {
    title: 'Product Engineering & Independent Projects',
    company: 'Software Engineer & Product Builder',
    period: 'Jan 2025 - Present',
    location: 'Los Angeles, CA',
    description: [
      'Architected, built, and launched GameRelish (gamerelish.com) - a community feedback platform for gaming franchises with enterprise-grade architecture: 41+ RLS policies with role-based access, multi-tiered abuse prevention, React Query with optimistic updates, email automation, and Next.js 15 with 100% TypeScript coverage and comprehensive test suite',
      'Modernized Através (atraves.net) - React/Firebase application (previously built in Angular 1) for cross-world messaging via antipodal maps with geospatial queries, location fuzzing for privacy, and multilingual support (12 languages)'
    ],
  },
  {
    title: 'Senior Software Engineer (Contract)',
    company: 'AI Product Company (Confidential; NDA bound)',
    period: 'Dec 2025 - Mar 2026',
    location: 'Los Angeles, CA',
    description: [
      'Owned and delivered AI-driven product features across multiple full-stack TypeScript environments (React, Node.js, GraphQL), shipping high-quality, production-ready functionality in fast-paced iteration cycles with strong test coverage'
    ],
  },
  {
    title: 'Senior Software Engineer / Software Engineer (Promoted Apr 2023)',
    company: 'Washington Post (Arc XP)',
    period: 'Dec 2019 - Dec 2024',
    location: 'Los Angeles, CA',
    isTwoColumn: true,
    description: [
      'Led rebuild of WebSked\'s List View using React, refactoring legacy AngularJS CMS code for scalability and maintainability',
      'Crafted React components for Arc internal UI libraries (built with Tailwind/Bootstrap); tested with Chai, Jest, and Cypress',
      'Architected an org-wide config-free user authorization system in Node.js, reducing admin support tickets by >40%',
      'Created AWS S3 metadata aggregation tools for customer deployment visibility and CI/CD debugging',
      'Built REST APIs, automation scripts and DynamoDB schemas enabling fine-grained RBAC',
      'Consolidated monthly usage data using AWS Lambda-based services',
      'Authored solution design for Featured Media in Arc\'s highest-traffic customer app, flagging critical bottlenecks pre-build',
      'Led cross-functional "Trident Training Sessions" to help colleagues interface with our backend systems more confidently',
      'Ensured internationalization compliance (i18n) and RTL support for SLA-bound applications',
      'Rotated in 24/7 on-call support for live triaging and Slack-based incident response',
      'Implemented and maintained CI/CD pipelines and AWS cloud infrastructure',
    ],
  },
]

const education = [
  {
    school: 'Hack Reactor / Telegraph Academy',
    degree: 'Software Engineering Immersive',
    year: '2016',
  },
  {
    school: 'Dartmouth College',
    degree: 'BA in Sociology',
    year: '2012',
  },
]

const Resume = () => {
  return (
    <section id="resume" className="py-24 px-10 border-t border-line bg-panel-2">
      <div className="max-w-[1160px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="font-mono text-xs text-accent tracking-wider uppercase mb-3.5">
            02 — EXPERIENCE
          </div>
          <h2 className="font-display text-[40px] tracking-tight font-semibold mb-12">
            Professional experience
          </h2>

          <div className="flex flex-col gap-4">
            {experience.map((job, index) => (
              <motion.div
                key={job.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-panel border border-line rounded-[14px] p-8"
              >
                <div className="flex justify-between flex-wrap gap-2 items-baseline mb-1.5">
                  <div className="font-display text-xl font-semibold">{job.title}</div>
                  <div className="font-mono text-[12.5px] text-accent">{job.period}</div>
                </div>
                <div className="text-sm text-muted mb-5">
                  {job.company} · {job.location}
                </div>
                <ul className={`pl-[18px] text-muted text-[14.5px] leading-[1.65] ${job.isTwoColumn ? 'md:columns-2 md:gap-10' : 'space-y-2'}`}>
                  {job.description.map((item, i) => (
                    <li key={i} className={job.isTwoColumn ? 'mb-2' : ''}>{item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Education Section */}
          <div className="mt-9 grid grid-cols-1 md:grid-cols-2 gap-4">
            {education.map((edu, index) => (
              <motion.div
                key={edu.school}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-panel border border-line rounded-[14px] px-8 py-[26px]"
              >
                <div className="font-mono text-[11.5px] text-muted mb-2.5">education · {edu.year}</div>
                <div className="font-display text-[17px] font-semibold">{edu.school}</div>
                <div className="text-sm text-muted mt-1">{edu.degree}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Resume 