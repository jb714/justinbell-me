'use client'

import { motion } from 'framer-motion'
import { 
  SiReact, 
  SiNextdotjs, 
  SiTypescript, 
  SiTailwindcss,
  SiNodedotjs,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiSass,
  SiMongodb,
  SiAmazon,
  SiGit,
  SiJira,
  SiCypress,
  SiJest,
  SiDjango,
  SiExpress,
  SiFirebase,
  SiAngular,
  SiChakraui,
  SiAwslambda,
  SiAmazoncloudwatch,
  SiAmazons3
} from 'react-icons/si'

const skills = [
  {
    category: 'Frontend',
    items: [
      { name: 'React', icon: SiReact, color: '#61DAFB' },
      { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
      { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
      { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
      { name: 'CSS3', icon: SiCss3, color: '#1572B6' },
      { name: 'Bootstrap', icon: SiBootstrap, color: '#7952B3' },
      { name: 'SASS', icon: SiSass, color: '#CC6699' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
      { name: 'AngularJS', icon: SiAngular, color: '#DD0031' },
      { name: 'Chakra UI', icon: SiChakraui, color: '#319795' },
    ],
  },
  {
    category: 'Backend & Database',
    items: [
      { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
      { name: 'Express', icon: SiExpress, color: '#000000' },
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
      { name: 'Django', icon: SiDjango, color: '#092E20' },
      { name: 'Firebase', icon: SiFirebase, color: '#FFCA28' },
    ],
  },
  {
    category: 'Testing & Tools',
    items: [
      { name: 'Cypress', icon: SiCypress, color: '#17202C' },
      { name: 'Jest', icon: SiJest, color: '#C21325' },
      { name: 'Git', icon: SiGit, color: '#F05032' },
      { name: 'JIRA', icon: SiJira, color: '#0052CC' },
    ],
  },
  {
    category: 'AWS Services',
    items: [
      { name: 'AWS Lambda', icon: SiAwslambda, color: '#FF9900' },
      { name: 'CloudWatch', icon: SiAmazoncloudwatch, color: '#FF9900' },
      { name: 'S3', icon: SiAmazons3, color: '#FF9900' },
      { name: 'CloudFront', icon: SiAmazon, color: '#FF9900' },
      { name: 'CloudFormation', icon: SiAmazon, color: '#FF9900' },
      { name: 'CodePipeline', icon: SiAmazon, color: '#FF9900' },
      { name: 'CodeBuild', icon: SiAmazon, color: '#FF9900' },
      { name: 'Container Services', icon: SiAmazon, color: '#FF9900' },
    ],
  },
]

const Skills = () => {
  return (
    <section id="skills" className="section-padding bg-white dark:bg-gray-900">
      <div className="container-padding mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="heading-2 text-center mb-12">
            <span className="text-gray-900 dark:text-gray-100">Skills & Expertise</span>
            <div className="w-24 h-1 bg-gradient-to-r from-accent-500 to-primary-500 mx-auto mt-4 rounded-full"></div>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skillGroup, groupIndex) => (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
                viewport={{ once: true }}
                className={`rounded-lg p-6 border ${
                  groupIndex === 0 
                    ? 'bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 border-primary-200 dark:border-primary-700'
                    : groupIndex === 1
                    ? 'bg-gradient-to-br from-secondary-50 to-secondary-100 dark:from-secondary-900/20 dark:to-secondary-800/20 border-secondary-200 dark:border-secondary-700'
                    : 'bg-gradient-to-br from-accent-50 to-accent-100 dark:from-accent-900/20 dark:to-accent-800/20 border-accent-200 dark:border-accent-700'
                }`}
              >
                <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-gray-100">{skillGroup.category}</h3>
                <div className="grid grid-cols-2 gap-4">
                  {skillGroup.items.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-3 p-3 bg-white/80 dark:bg-gray-800/80 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200 dark:border-gray-600 group"
                      whileHover={{ scale: 1.05, y: -2 }}
                    >
                      <skill.icon 
                        className="w-6 h-6 transition-all duration-300 group-hover:scale-110" 
                        style={{ 
                          color: skill.color,
                          filter: 'drop-shadow(0 0 8px rgba(0,0,0,0.1))'
                        }}
                      />
                      <span className="text-gray-700 dark:text-gray-300 font-medium group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills 