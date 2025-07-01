'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const projects = [
  {
    title: 'Blood Donation Website',
    desc: 'A fast and modern platform for blood donation, built with React.js, Tailwind CSS, and Firebase. Features include donor registration, authentication, and an admin dashboard for managing donations.',
    image: '/work/blood.png',
    link: 'https://blood-donation-two-cyan.vercel.app/',
    tags: ['React.js', 'Tailwind', 'Firebase'],
  },
  {
    title: 'Portfolio Website',
    desc: 'A sleek and interactive portfolio website showcasing skills, projects, and achievements. Built for performance and smooth animations using React and Tailwind CSS.',
    image: '/work/portfolio.png',
    link: 'https://devx-project.vercel.app/',
    tags: ['React', 'Tailwind', 'JavaScript'],
  },
  {
    title: 'Protect Wild Life',
    desc: 'A creative branding and awareness site for wildlife protection. Features interactive galleries, smooth transitions, and a custom CMS for content management.',
    image: '/work/wild.png',
    link: '#',
    tags: ['React', 'Tailwind', 'Animations'],
  },
]

import type { Variants } from 'framer-motion'

const cardVariants: Variants = {
  offscreen: { opacity: 0, y: 60, scale: 0.95 },
  onscreen: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: 'spring' as const, bounce: 0.3, duration: 0.9 },
  },
}

export default function OurWork() {
  return (
    <section id="ourwork" className="py-20 bg-gradient-to-br from-grayDark to-dark px-6">
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-center mb-12 text-mint"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        Our Work
      </motion.h2>
      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {projects.map((project, idx) => (
          <motion.a
            key={idx}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-[#0D1B18] rounded-2xl shadow-xl border border-gray-800 hover:border-mint transition-all overflow-hidden flex flex-col"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
            whileHover={{ scale: 1.04, boxShadow: '0 8px 32px 0 rgba(65,243,178,0.15)' }}
          >
            <div className="relative w-full h-56 overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              />
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-mint transition">{project.title}</h3>
              <p className="text-gray-300 mb-4 flex-1">{project.desc}</p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-mint/10 text-mint px-3 py-1 rounded-full text-xs font-semibold border border-mint/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.a>
        ))}
      </div>
      
    </section>
  )
}