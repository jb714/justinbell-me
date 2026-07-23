'use client'

import { motion } from 'framer-motion'

const About = () => {
  const interests = [
    'Product Engineering',
    'Music Production',
    'Physical Fitness',
    'Nature & the Outdoors',
    'Fictional Writing',
    'Community Impact',
    'Sports — Lakers / Dodgers / Eagles',
    'Cooking & Eating',
  ]

  return (
    <section id="about" className="py-24 px-10 border-t border-line">
      <div className="max-w-[1160px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="font-mono text-xs text-accent tracking-wider uppercase mb-3.5">
            01 — ABOUT
          </div>
          <h2 className="font-display text-[40px] tracking-tight font-semibold mb-10">
            About me
          </h2>

          <div className="grid gap-14 items-start" style={{ gridTemplateColumns: '1.4fr 1fr' }}>
            {/* Left: Bio */}
            <div className="text-[16.5px] leading-[1.72] text-muted flex flex-col gap-5">
              <p>
                I'm a Senior Software Engineer focused on building scalable systems, streamlining architecture, and shipping thoughtful product features. At <span className="text-text">The Washington Post (Arc XP)</span>, I solution-designed and shipped features across its most-used applications — Composer, WebSked, and Trident — building tools for thousands of internal and client users, powering experiences for tens of millions downstream.
              </p>
              <p>
                Since then, I've been building products end-to-end: <span className="text-text">Sideline Reels</span>, a human-in-the-loop soccer video product; <span className="text-text">GameRelish</span>, a community feedback platform for gaming franchises; and <span className="text-text">Através</span>, a React/Firebase app for cross-world messaging via antipodal maps. Most recently, I completed a senior engineering contract shipping AI-driven product features across full-stack TypeScript environments.
              </p>
              <p>
                Regardless of what I'm doing exactly, I'm always drawn to work that lives at the intersection of technology, creativity, and connection.
              </p>
            </div>

            {/* Right: Value Cards */}
            <div className="grid grid-cols-1 gap-3.5">
              <div className="border border-line bg-panel rounded-xl p-6">
                <div className="font-mono text-[11px] text-accent mb-2.5">01</div>
                <div className="text-base font-semibold mb-1.5">System Thinker</div>
                <div className="text-[13.5px] leading-relaxed text-muted">Resilient architectures with a product-first mindset.</div>
              </div>
              <div className="border border-line bg-panel rounded-xl p-6">
                <div className="font-mono text-[11px] text-accent mb-2.5">02</div>
                <div className="text-base font-semibold mb-1.5">Full-Stack Craftsman</div>
                <div className="text-[13.5px] leading-relaxed text-muted">Obsessed with clean code, smart tooling, and end-to-end polish.</div>
              </div>
              <div className="border border-line bg-panel rounded-xl p-6">
                <div className="font-mono text-[11px] text-accent mb-2.5">03</div>
                <div className="text-base font-semibold mb-1.5">Product-Driven Engineer</div>
                <div className="text-[13.5px] leading-relaxed text-muted">Bridging design, dev, and business goals with minimal ego.</div>
              </div>
              <div className="border border-line bg-panel rounded-xl p-6">
                <div className="font-mono text-[11px] text-accent mb-2.5">04</div>
                <div className="text-base font-semibold mb-1.5">Collaborative Partner</div>
                <div className="text-[13.5px] leading-relaxed text-muted">Brings momentum, clarity, and calm to high-trust teams.</div>
              </div>
            </div>
          </div>

          {/* Interests */}
          <div className="mt-12 border-t border-line pt-8">
            <div className="font-mono text-xs text-muted mb-[18px]">interests & passions</div>
            <div className="flex gap-2.5 flex-wrap">
              {interests.map((interest) => (
                <span
                  key={interest}
                  className="border border-line bg-panel px-[15px] py-2 rounded-lg text-[13.5px]"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
