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
  return (
    <section id="resume" className="section-padding bg-white dark:bg-gray-900">
      <div className="container-padding mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="heading-2 text-center mb-12">
            <span className="text-gray-900 dark:text-gray-100">Professional Experience</span>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-secondary-500 mx-auto mt-4 rounded-full"></div>
          </h2>
          
          <div className="space-y-8">
            {experience.map((job, index) => (
              <motion.div
                key={job.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`rounded-lg p-6 border transition-all duration-300 hover:shadow-lg ${
                  index % 2 === 0 
                    ? 'bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 border-primary-200 dark:border-primary-700'
                    : 'bg-gradient-to-br from-secondary-50 to-secondary-100 dark:from-secondary-900/20 dark:to-secondary-800/20 border-secondary-200 dark:border-secondary-700'
                }`}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-100">{job.title}</h4>
                    <p className="text-gray-600 dark:text-gray-300">{job.company}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{job.location}</p>
                  </div>
                  <span className={`font-medium mt-2 md:mt-0 px-3 py-1 rounded-full text-sm ${
                    index % 2 === 0 
                      ? 'bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 border border-primary-200 dark:border-primary-700'
                      : 'bg-secondary-100 dark:bg-secondary-900/30 text-secondary-700 dark:text-secondary-300 border border-secondary-200 dark:border-secondary-700'
                  }`}>
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

          {/* Download Resume Button */}
          <div className="text-center mt-12">
            <motion.a
              href="/resume.pdf"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-accent-500 to-accent-600 text-white rounded-lg hover:from-accent-600 hover:to-accent-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
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
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Resume 