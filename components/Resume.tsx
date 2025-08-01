'use client'

import { motion } from 'framer-motion'

const experience = [
  {
    title: 'Career Sabbatical / Professional Development',
    company: 'Founder / Senior Software Engineer',
    period: 'Jan 2025 - Present',
    location: 'Los Angeles, CA',
    description: [
      'Architected and launched gamerelish.com, a production-ready feedback platform for gaming franchises, featuring:',
      '• Enterprise-grade security with 41+ RLS policies and tiered access (user, moderator, admin, owner)',
      '• Multi-tiered abuse prevention system with honeypots, intelligent rate limiting, IP logging, and CAPTCHA integration',
      '• Advanced React Query architecture using optimistic updates, cache invalidation, and automatic rollback patterns',
      '• Next.js 15 application with dynamic routing middleware, 100% TypeScript coverage, and runtime Zod validation',
      '• Supabase/Postgres backend with real-time sync, RLS, granular access control, and multi-franchise schema support',
      '• Email automation system with user onboarding, preference management, and feedback alerts',
      '• SEO optimization, progressive web app (PWA) support, and integrated analytics for performance and discoverability',
      '• Comprehensive test suite with 100+ passing unit and integration tests across backend and frontend',
      'Leveraged AI-assisted development workflow with ChatGPT, Claude, and Cursor to accelerate feature development',
      'Modernized atraves.net, a React/Firebase app for cross-world messaging via antipodal maps with geospatial queries, location fuzzing for privacy, and multilingual support (12 languages)',
      'Developing early-stage applications in crowdfunding and collaborative writing',
      'Studying for the AWS Solutions Architect Associate exam (Oct 2025), focused on core AWS services and architectures',
    ],
  },
  {
    title: 'Senior Software Engineer / Software Engineer',
    company: 'Washington Post (Arc XP)',
    period: 'Dec 2019 - Dec 2024',
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
              className="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                className="w-5 h-5 mr-2"
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