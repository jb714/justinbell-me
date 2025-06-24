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
  const getCategoryColors = (index: number) => {
    const colorSchemes = [
      {
        bg: 'bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20',
        border: 'border-primary-200 dark:border-primary-700',
        header: 'text-primary-800 dark:text-primary-200',
        headerBg: 'bg-gradient-to-r from-primary-500 to-primary-600'
      },
      {
        bg: 'bg-gradient-to-br from-secondary-50 to-secondary-100 dark:from-secondary-900/20 dark:to-secondary-800/20',
        border: 'border-secondary-200 dark:border-secondary-700',
        header: 'text-secondary-800 dark:text-secondary-200',
        headerBg: 'bg-gradient-to-r from-secondary-500 to-secondary-600'
      },
      {
        bg: 'bg-gradient-to-br from-accent-50 to-accent-100 dark:from-accent-900/20 dark:to-accent-800/20',
        border: 'border-accent-200 dark:border-accent-700',
        header: 'text-accent-800 dark:text-accent-200',
        headerBg: 'bg-gradient-to-r from-accent-500 to-accent-600'
      },
      {
        bg: 'bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-900/20 dark:to-emerald-800/20',
        border: 'border-emerald-200 dark:border-emerald-700',
        header: 'text-emerald-800 dark:text-emerald-200',
        headerBg: 'bg-gradient-to-r from-emerald-500 to-emerald-600'
      }
    ]
    return colorSchemes[index % colorSchemes.length]
  }

  return (
    <section id="skills" className="section-padding bg-gradient-to-br from-gray-50 via-accent-50/20 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 right-10 w-56 h-56 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-full opacity-15 blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-64 h-64 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full opacity-15 blur-3xl"></div>
      
      <div className="container-padding mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="heading-2 text-center mb-4">
            <span className="bg-gradient-to-r from-accent-600 to-primary-600 bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-500 to-primary-500 mx-auto mb-12 rounded-full"></div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skillGroup, groupIndex) => {
              const colors = getCategoryColors(groupIndex)
              return (
                <motion.div
                  key={skillGroup.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
                  viewport={{ once: true }}
                  className={`${colors.bg} ${colors.border} rounded-xl p-6 border shadow-lg hover:shadow-xl transition-all duration-300 group`}
                  whileHover={{ scale: 1.02, y: -4 }}
                >
                  <div className={`w-full h-2 ${colors.headerBg} rounded-full mb-6`}></div>
                  <h3 className={`text-xl font-bold mb-6 ${colors.header}`}>
                    {skillGroup.category}
                  </h3>
                  
                  <div className="space-y-3">
                    {skillGroup.items.map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        viewport={{ once: true }}
                        className="flex items-center space-x-3 p-3 bg-white/80 dark:bg-gray-800/80 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-white/50 dark:border-gray-700/50 group-hover:bg-white/90 dark:group-hover:bg-gray-800/90"
                        whileHover={{ scale: 1.02, x: 4 }}
                      >
                        <div className="relative">
                          <div 
                            className="absolute inset-0 rounded-full blur-sm opacity-30"
                            style={{ backgroundColor: skill.color }}
                          ></div>
                          <skill.icon 
                            className="w-7 h-7 relative z-10 transition-transform duration-300 hover:scale-110" 
                            style={{ color: skill.color }}
                          />
                        </div>
                        <span className="text-gray-800 dark:text-gray-200 font-medium text-sm group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors">
                          {skill.name}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </div>
          
          {/* Fun fact section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <div className="bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-xl p-6 border border-primary-200 dark:border-primary-700 shadow-lg">
              <p className="text-gray-700 dark:text-gray-300 text-lg">
                <span className="font-semibold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                  Always learning:
                </span>{' '}
                Currently pursuing AWS Solutions Architect certification and exploring cutting-edge technologies in blockchain and real-time collaboration.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills