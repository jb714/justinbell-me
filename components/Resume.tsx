'use client'

import { motion } from 'framer-motion'

const experience = [
  {
    title: 'Career Sabbatical / Professional Development',
    company: 'Self-directed',
    period: 'Jan 2025 - Present',
    location: 'Los Angeles, CA',
    description: [
      'Studying for the AWS Solutions Architect – Associate exam (July 2025 target), with emphasis on core services and distributed systems design',
      'Modernizing legacy side projects and developing early-stage, potentially monetizable applications in crowdfunding, blockchain, collaborative writing, and user feedback—leveraging full-stack technologies including React, TypeScript, Node, and AWS',
    ],
  },
  {
    title: 'Senior Software Engineer',
    company: 'Washington Post (Arc XP)',
    period: 'Dec 2019 - Dec 2024',
    location: 'Chicago, IL & Los Angeles, CA',
    description: [
      'Led the complete rebuild of WebSked\'s List View; refactoring a complex legacy AngularJS CMS to use React, enhancing feature set and ensuring scalability and maintainability',
      'Crafted numerous React components using Bootstrap, Tailwind and CSS that were adapted into internal component libraries and used Chai, Jest and Cypress for unit, integration and end to end testing of single page applications comprised of said components',
      'Architected an org-wide, config-free user authorization system simplifying access control across all applications in Node.js and reduced client admin support requests by more than 40%',
      'Built a Node.js and AWS S3 metadata aggregation tool, providing real-time deployment/configuration visibility for each client instance/environment within Arc XP making CI/CD and container level debugging much easier to reason about',
      'Developed RESTful APIs, automation scripts, DynamoDB schemas enabling granular role-based access control (RBAC)',
      'Created a Lambda based, Node.js application that consolidated organization metadata and was used for monthly metering numbers',
      'Solution designed the ability to append featured media in Arc XP\'s most used user facing application (Composer) identifying a critical bottleneck in another team\'s backend service and facilitating a fix to keep the project\'s release timeline on track',
      'Acted as lead instructor for numerous "Trident Training Sessions" enabling colleagues across various teams to be confident ambassadors and GitHub reviewers for Trident, an app under our team\'s purview and the most used backend application at Arc XP',
      'Regularly performed i18n audits and text/string translation submissions to ensure our applications were fully translated and interpolated for all of our SLA languages and were right to left (RTL) compliant for the requisite languages',
      'Provided 24/7 rotational on-call support, handling questions in Slack and triaging bugs and support requests',
      'Implemented CI/CD best practices to oversee and validate numerous feature deployments within the AWS ecosystem, contributing to the setup and maintenance of cloud infrastructure and system health',
    ],
  },
  {
    title: 'Frontend Developer',
    company: 'GoFundMe (CrowdRise by GoFundMe)',
    period: 'Oct 2018 - May 2019',
    location: 'Los Angeles, CA',
    description: [
      'Developed Account Settings and Button Management projects using React, Redux, and modern frontend tools',
      'Sole frontend developer on the then new Report Center project, leveraging Symfony/Twig, jQuery, and CSS3',
      'Contributed to platform features, including enabling users to publish and unpublish campaigns',
    ],
  },
  {
    title: 'Technical Program Management Fellow',
    company: 'Microsoft (Azure Hybrid Networking ExpressRoute)',
    period: 'Mar 2018 - Jun 2018',
    location: 'Redmond, WA',
    description: [
      'Procured, diagrammed, and deployed over $800,000 of networking equipment for Ashburn and Seattle labs',
      'Optimized team-managed lab intake processes to expedite testing of new features and customer scenarios',
    ],
  },
]

const Resume = () => {
  const getJobColors = (index: number) => {
    const colorSchemes = [
      {
        bg: 'bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-900/20 dark:to-emerald-800/20',
        border: 'border-emerald-200 dark:border-emerald-700',
        accent: 'bg-gradient-to-r from-emerald-500 to-emerald-600',
        text: 'text-emerald-700 dark:text-emerald-300',
        badge: 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-200 border-emerald-200 dark:border-emerald-700'
      },
      {
        bg: 'bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20',
        border: 'border-primary-200 dark:border-primary-700',
        accent: 'bg-gradient-to-r from-primary-500 to-primary-600',
        text: 'text-primary-700 dark:text-primary-300',
        badge: 'bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-200 border-primary-200 dark:border-primary-700'
      },
      {
        bg: 'bg-gradient-to-br from-secondary-50 to-secondary-100 dark:from-secondary-900/20 dark:to-secondary-800/20',
        border: 'border-secondary-200 dark:border-secondary-700',
        accent: 'bg-gradient-to-r from-secondary-500 to-secondary-600',
        text: 'text-secondary-700 dark:text-secondary-300',
        badge: 'bg-secondary-100 dark:bg-secondary-900/30 text-secondary-800 dark:text-secondary-200 border-secondary-200 dark:border-secondary-700'
      },
      {
        bg: 'bg-gradient-to-br from-accent-50 to-accent-100 dark:from-accent-900/20 dark:to-accent-800/20',
        border: 'border-accent-200 dark:border-accent-700',
        accent: 'bg-gradient-to-r from-accent-500 to-accent-600',
        text: 'text-accent-700 dark:text-accent-300',
        badge: 'bg-accent-100 dark:bg-accent-900/30 text-accent-800 dark:text-accent-200 border-accent-200 dark:border-accent-700'
      }
    ]
    return colorSchemes[index % colorSchemes.length]
  }

  return (
    <section id="resume" className="section-padding bg-gradient-to-br from-white via-emerald-50/20 to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-10 left-20 w-72 h-72 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full opacity-10 blur-3xl"></div>
      
      <div className="container-padding mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="heading-2 text-center mb-4">
            <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              Professional Experience
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto mb-12 rounded-full"></div>
          
          <div className="space-y-8">
            {experience.map((job, index) => {
              const colors = getJobColors(index)
              return (
                <motion.div
                  key={job.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`${colors.bg} ${colors.border} rounded-xl p-8 border shadow-lg hover:shadow-xl transition-all duration-300 group`}
                  whileHover={{ scale: 1.01, y: -2 }}
                >
                  <div className={`w-full h-1 ${colors.accent} rounded-full mb-6`}></div>
                  
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div className="flex-1">
                      <h4 className="text-2xl font-bold mb-2 text-gray-900 dark:text-gray-100 group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors">
                        {job.title}
                      </h4>
                      <p className={`text-lg font-semibold mb-1 ${colors.text}`}>
                        {job.company}
                      </p>
                      <p className="text-gray-600 dark:text-gray-400 flex items-center">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {job.location}
                      </p>
                    </div>
                    <div className="mt-4 lg:mt-0">
                      <span className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold ${colors.badge} border`}>
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {job.period}
                      </span>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    {job.description.map((item, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: i * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start space-x-3"
                      >
                        <div className={`w-2 h-2 ${colors.accent} rounded-full mt-2 flex-shrink-0`}></div>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                          {item}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Download Resume Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <motion.a
              href="/resume.pdf"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-accent-600 to-accent-700 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl hover:from-accent-700 hover:to-accent-800 transition-all duration-300 transform hover:-translate-y-1 group"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg
                className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform"
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
              <svg 
                className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Resume