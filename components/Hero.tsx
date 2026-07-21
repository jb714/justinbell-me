'use client'

import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section
      id="home"
      className="px-10 pt-[120px] pb-24"
      style={{
        backgroundImage: 'linear-gradient(var(--hero-grid) 1px, transparent 1px), linear-gradient(90deg, var(--hero-grid) 1px, transparent 1px)',
        backgroundSize: '54px 54px',
      }}
    >
      <div className="max-w-[1160px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="font-mono text-[13px] text-accent tracking-wide mb-7">
            // senior software engineer
          </div>

          <h1 className="font-display text-[44px] leading-none tracking-tighter font-semibold max-w-[16ch] mb-8 sm:text-[52px] md:text-[68px] lg:text-[80px]">
            I craft reliable systems & intuitive experiences.
          </h1>

          <p className="text-[19px] leading-relaxed text-muted max-w-[56ch] mb-11">
            Scalable architecture, streamlined systems, and thoughtful product features — performant and user-friendly. Five years shipping to tens of millions of users at The Washington Post (Arc XP).
          </p>

          <div className="flex gap-3.5 flex-wrap">
            <a
              href="#projects"
              className="bg-accent text-accent-ink px-7 py-[15px] rounded-[9px] text-[14.5px] font-semibold hover:opacity-90 transition-opacity"
            >
              View my work →
            </a>
            <a
              href="#contact"
              className="border border-line px-7 py-[15px] rounded-[9px] text-[14.5px] font-medium hover:border-muted transition-colors"
            >
              Contact me
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-line text-muted px-7 py-[15px] rounded-[9px] text-[14.5px] font-medium hover:text-text hover:border-muted transition-colors"
            >
              Download résumé
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero 