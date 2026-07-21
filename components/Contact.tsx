'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')

    try {
      const response = await fetch('https://formspree.io/f/xpwdgnjj', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch (error) {
      setStatus('error')
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <section id="contact" className="py-24 px-10 border-t border-line">
      <div className="max-w-[1160px] mx-auto grid md:grid-cols-2 gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="font-mono text-xs text-accent tracking-wider uppercase mb-3.5">
            05 — CONTACT
          </div>
          <h2 className="font-display text-[46px] tracking-tight-sm font-semibold leading-[1.05] mb-5">
            Let's connect.
          </h2>
          <p className="text-[16.5px] leading-relaxed text-muted max-w-[44ch] mb-8">
            I'm always excited to discuss new projects, product challenges, and collaboration opportunities.
          </p>
          <div className="flex flex-col gap-3 font-mono text-sm">
            <a
              href="mailto:justin@justinbell.me"
              className="flex items-center gap-3 text-text hover:text-accent transition-colors"
            >
              <span className="text-accent">→</span>
              justin@justinbell.me
            </a>
            <a
              href="https://linkedin.com/in/jbell7"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-text hover:text-accent transition-colors"
            >
              <span className="text-accent">→</span>
              linkedin.com/in/jbell7
            </a>
          </div>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          className="flex flex-col gap-3.5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="bg-panel border border-line text-text rounded-[9px] px-4 py-3.5 text-[14.5px] outline-none focus:border-accent transition-colors placeholder:text-muted"
            required
            disabled={status === 'submitting'}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="bg-panel border border-line text-text rounded-[9px] px-4 py-3.5 text-[14.5px] outline-none focus:border-accent transition-colors placeholder:text-muted"
            required
            disabled={status === 'submitting'}
          />
          <textarea
            name="message"
            placeholder="Message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            className="bg-panel border border-line text-text rounded-[9px] px-4 py-3.5 text-[14.5px] outline-none focus:border-accent transition-colors resize-vertical placeholder:text-muted"
            required
            disabled={status === 'submitting'}
          />
          <button
            type="submit"
            className="bg-accent text-accent-ink border-none rounded-[9px] px-4 py-[15px] text-[14.5px] font-semibold cursor-pointer hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={status === 'submitting'}
          >
            {status === 'submitting' ? 'Sending...' : 'Send message'}
          </button>
          {status === 'success' && (
            <p className="text-accent text-center text-sm">
              Message sent successfully!
            </p>
          )}
          {status === 'error' && (
            <p className="text-red-400 text-center text-sm">
              Failed to send message. Please try again or email me directly.
            </p>
          )}
        </motion.form>
      </div>
    </section>
  )
}

export default Contact 