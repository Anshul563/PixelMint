'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-dark bg-opacity-30 backdrop-blur-md px-6 py-4 flex justify-around items-center shadow-sm">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <Image
          src="/logo6.png"
          alt="PixelMint Logo"
          width={130}
          height={40}
          priority
        />
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-8 text-sm items-center">
        <Link href="/" className="hover:text-mint text-gray-300 transition">Home</Link>
        <Link href="#services" className="hover:text-mint text-gray-300 transition">Services</Link>
        <Link href="#contact" className="hover:text-mint text-gray-300 transition">Contact</Link>

      </div>

      {/* Mobile Hamburger */}
      <button
        className="md:hidden flex flex-col justify-center items-center w-10 h-10"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span className={`block w-6 h-0.5 bg-white mb-1 transition-transform duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
        <span className={`block w-6 h-0.5 bg-white mb-1 transition-opacity duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
        <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-grayDark flex flex-col items-center py-5 space-y-5 md:hidden shadow-lg z-40">
          <Link href="/" className="hover:text-mint text-gray-300 transition" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="#services" className="hover:text-mint text-gray-300 transition" onClick={() => setMenuOpen(false)}>Services</Link>
          <Link href="/contact" className="hover:text-mint text-gray-300 transition" onClick={() => setMenuOpen(false)}>Contact</Link>
          
        </div>
      )}
    </nav>
  )
}
