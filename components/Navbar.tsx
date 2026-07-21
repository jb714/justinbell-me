'use client'

import { useState } from 'react'
import { useTheme } from 'next-themes'
import Link from 'next/link'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  const navItems = [
    { name: 'about', href: '#about' },
    { name: 'experience', href: '#resume' },
    { name: 'projects', href: '#projects' },
    { name: 'skills', href: '#skills' },
    { name: 'contact', href: '#contact' },
  ]

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-10 py-[18px] border-b border-line backdrop-blur-[12px]" style={{ background: 'var(--nav-bg)' }}>
      {/* Left: Logo with teal dot */}
      <Link href="#home" className="flex items-center gap-2.5 font-display text-[17px] font-semibold tracking-[0.01em]">
        <span className="w-2 h-2 rounded-full bg-accent" style={{ boxShadow: '0 0 12px var(--accent)' }}></span>
        Justin Bell
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-[30px] font-mono text-[12.5px]">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="text-muted hover:text-text transition-colors duration-[180ms]"
          >
            {item.name}
          </Link>
        ))}
        <button
          onClick={toggleTheme}
          className="border border-line rounded-[20px] px-3.5 py-1.5 text-text select-none min-w-[78px] text-center cursor-pointer hover:border-muted transition-colors duration-[180ms]"
        >
          {theme === 'dark' ? '☀ Light' : '☾ Dark'}
        </button>
      </div>

      {/* Mobile Navigation Button */}
      <button
        className="md:hidden p-2 text-muted hover:text-text transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg
          className="h-6 w-6"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {isOpen ? (
            <path d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 md:hidden border-b border-line backdrop-blur-[12px]" style={{ background: 'var(--nav-bg)' }}>
          <div className="px-10 py-4 space-y-1 font-mono text-[12.5px]">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-2 text-muted hover:text-text transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <button
              onClick={toggleTheme}
              className="w-full text-left py-2 text-text"
            >
              {theme === 'dark' ? '☀ Light mode' : '☾ Dark mode'}
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar 