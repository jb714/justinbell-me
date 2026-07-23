'use client'

import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface ExperienceItem {
  title: string
  company: string
  period: string
  location: string
  intro?: string
  description: ReactNode[]
  isTwoColumn?: boolean
}

const experience: ExperienceItem[] = [
  {
    title: 'Product Engineering & Independent Projects',
    company: 'Senior Software Engineer & Product Builder',
    period: 'Jan 2025 - Present',
    location: 'Los Angeles, CA',
    description: [
      <>
        Built Sideline Reels (
        <a
          href="https://sideline-reels.vercel.app"
          className="text-text underline decoration-accent underline-offset-2 hover:text-accent transition-colors"
        >
          sideline-reels.vercel.app
        </a>
        ), a human-in-the-loop soccer video product that transforms parent-recorded footage into player-highlighted recruiting reels using Next.js and TypeScript, a Modal-hosted YOLO11/ByteTrack tracking service, and ffmpeg telestration
      </>,
      'Designed Sideline Reels’ durable media pipeline spanning resumable direct-to-R2 uploads, Trigger.dev orchestration for normalization, tracking, rendering, and multi-clip reel assembly, plus privacy-first deletion cascades for source footage and derived assets',
      <>
        Architected, launched, and independently operated GameRelish (
        <a
          href="https://gamerelish.com"
          className="text-text underline decoration-accent underline-offset-2 hover:text-accent transition-colors"
        >
          gamerelish.com
        </a>
        ), a community feedback platform live since July 2025, with 41+ row-level security policies, layered abuse prevention, optimistic React Query updates, email automation, and 250+ automated tests
      </>,
    ],
  },
  {
    title: 'Senior Software Engineer (Contract)',
    company: 'AI Product Company (Confidential; NDA bound)',
    period: 'Dec 2025 - Mar 2026',
    location: 'Los Angeles, CA',
    description: [
      'Delivered production AI-driven features across multiple full-stack TypeScript applications using React, Node.js, and GraphQL, with rapid iteration and strong automated test coverage',
    ],
  },
  {
    title: 'Senior Software Engineer / Software Engineer (Promoted Apr 2023)',
    company: 'The Washington Post (Arc XP)',
    period: 'Dec 2019 - Dec 2024',
    location: 'Los Angeles, CA',
    isTwoColumn: true,
    description: [
      'Led React rebuild of WebSked’s List View, replacing legacy AngularJS architecture to improve maintainability and scalability',
      'Architected an organization-wide, config-free user authorization system in Node.js, reducing admin support tickets by >40%',
      'Built REST APIs, automation tooling and DynamoDB schemas supporting fine-grained role-based access control',
      'Authored the solution design for Featured Media in Arc\'s highest-traffic customer app, flagging critical bottlenecks pre-build',
      'Ensured internationalization compliance (i18n) and RTL support for SLA-bound applications',
      'Maintained CI/CD pipelines and AWS cloud infrastructure; rotated through 24/7 on-call support for incident response across SLA-bound applications',
      'Led cross-functional training sessions on Arc XP’s core request-routing, authentication, and authorization systems, enabling technical and nontechnical colleagues to work more confidently across the platform',
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
