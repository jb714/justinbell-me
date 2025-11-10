'use client'

import { motion } from 'framer-motion'

interface ExperienceItem {
  title: string
  company: string
  period: string
  location: string
  intro?: string
  description: string[]
}

const experience: ExperienceItem[] = [
  {
    title: 'Stealth Startup & Independent Projects',
    company: 'Software Engineer & Product Builder',
    period: 'Jan 2025 - Present',
    location: 'Los Angeles, CA',
    intro: 'Following organizational restructuring at The Washington Post (Arc XP), continuing professional development through product building and engineering:',
    description: [
      'Contributing to early-stage platform development for a stealth startup in the renewable energy sector',
      'Architected, built, and launched GameRelish (gamerelish.com) - a community feedback platform for gaming franchises featuring enterprise-grade architecture: 41+ RLS policies with role-based access, multi-tiered abuse prevention, React Query with optimistic updates, email automation, and Next.js 15 with 100% TypeScript coverage and comprehensive test suite',
      'Modernized Através (atraves.net) - React/Firebase application (previously built in Angular 1) for cross-world messaging via antipodal maps with geospatial queries, location fuzzing for privacy, and multilingual support (12 languages)',
      'Preparing for AWS Solutions Architect - Associate certification to deepen cloud infrastructure expertise gained from 5 years at The Washington Post (Arc XP)',
      'Building new full-stack applications and modernizing legacy projects with current best practices (Next.js, TypeScript, serverless) while exploring AI/ML integration for real-time collaboration and scalability'
    ],
  },
  {
    title: 'Senior Software Engineer / Software Engineer (Promoted Apr 2023)',
    company: 'Washington Post (Arc XP)',
    period: 'Dec 2019 - Dec 2024 (Role eliminated in organizational restructuring)',
    location: 'Los Angeles, CA',
    description: [
      'Led rebuild of WebSked\'s List View using React, refactoring legacy AngularJS CMS code for scalability and maintainability',
      'Crafted React components for Arc internal UI libraries (built with Tailwind/Bootstrap); tested with Chai, Jest, and Cypress',
      'Architected an org-wide config-free user authorization system in Node.js reducing admin support tickets by >40%',
      'Created AWS S3 metadata aggregation tools for customer deployment visibility and CI/CD debugging',
      'Built REST APIs, automation scripts and DynamoDB schemas enabling fine-grained RBAC',
      'Consolidated monthly usage data using AWS Lambda-based services',
      'Solution designed Featured Media appending in most used customer facing app and identified critical bottlenecks',
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
    <section id="resume" className="section-padding bg-white dark:bg-gray-900">
      <div className="container-padding mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="heading-2 text-center mb-12 bg-gradient-to-r from-primary-500 via-accent-500 to-contrast-500 bg-clip-text text-transparent">Professional Experience</h2>
          
          <div className="space-y-8">
            {experience.map((job, index) => (
              <motion.div
                key={job.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-semibold">{job.title}</h4>
                    <p className="text-gray-600 dark:text-gray-300">{job.company}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{job.location}</p>
                  </div>
                  <span className="text-primary-600 dark:text-primary-400 font-medium mt-2 md:mt-0">
                    {job.period}
                  </span>
                </div>
                {job.intro && (
                  <p className="mb-3 text-gray-600 dark:text-gray-300">{job.intro}</p>
                )}
                <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                  {job.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Education Section */}
          <h3 className="heading-3 text-center mt-16 mb-8 bg-gradient-to-r from-contrast-500 via-coral-500 to-accent-500 bg-clip-text text-transparent">Education</h3>
          <div className="space-y-4 max-w-2xl mx-auto">
            {education.map((edu, index) => (
              <motion.div
                key={edu.school}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-[0_4px_14px_0_rgba(16,185,129,0.1)] hover:shadow-[0_4px_20px_0_rgba(249,115,22,0.2)] transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <h4 className="text-lg font-semibold">{edu.school}</h4>
                    <p className="text-gray-600 dark:text-gray-300">{edu.degree}</p>
                  </div>
                  <span className="text-primary-600 dark:text-primary-400 font-medium mt-2 md:mt-0">
                    {edu.year}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Download Resume Button */}
          <div className="text-center mt-12">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-200 ease-in-out group text-sm border border-gray-300 dark:border-gray-600 rounded-full hover:border-primary-500 dark:hover:border-primary-400"
            >
              <svg
                className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform duration-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Download Resume
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Resume 