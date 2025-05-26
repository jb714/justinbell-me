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
          <h2 className="heading-2 text-center mb-12">Skills & Expertise</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skillGroup) => (
              <div
                key={skillGroup.category}
                className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6"
              >
                <h3 className="text-xl font-semibold mb-6">{skillGroup.category}</h3>
                <div className="grid grid-cols-2 gap-4">
                  {skillGroup.items.map((skill) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3 }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-3 p-3 bg-white dark:bg-gray-700 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                    >
                      <skill.icon 
                        className="w-6 h-6" 
                        style={{ color: skill.color }}
                      />
                      <span className="text-gray-700 dark:text-gray-300 font-medium">
                        {skill.name}
                      </span>
                    </motion.div>
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