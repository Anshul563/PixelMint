'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const techs = [
  { name: 'React.js', logo: '/tech/react.png', category: 'Frontend' },
  { name: 'Next.js', logo: '/tech/next.png', category: 'Frontend' },
  { name: 'Tailwind CSS', logo: '/tech/tailwind.png', category: 'Frontend' },
  { name: 'JavaScript', logo: '/tech/js.png', category: 'Frontend' },
  { name: 'React-Native', logo: '/tech/native.png', category: 'Frontend' },
  { name: 'Firebase', logo: '/tech/firebase.png', category: 'Backend' },
  { name: 'Node.js', logo: '/tech/node.png', category: 'Backend' },
  { name: 'MongoDB', logo: '/tech/mongodb.png', category: 'Database' },
  { name: 'MySQL', logo: '/tech/mysql.png', category: 'Database' },
  { name: 'PhotoShop', logo: '/tech/photoshop.png', category: 'Graphic Design' },
  { name: 'Canva', logo: '/tech/canva.png', category: 'Graphic Design' },
  { name: 'Framer Motion', logo: '/tech/framer.png', category: 'Other' },
  { name: 'GitHub', logo: '/tech/github.png', category: 'Other' },
]

const categories = ['All', 'Frontend', 'Backend', 'Database', 'Graphic Design', 'Other']

const gridVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 120 } },
  exit: { opacity: 0, y: 30, scale: 0.9, transition: { duration: 0.2 } },
}

export default function TechStackShowcase() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredTechs =
    activeCategory === 'All'
      ? techs
      : techs.filter((tech) => tech.category === activeCategory)

  return (
    <section className="bg-dark text-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-mint mb-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Our Tech Stack
        </motion.h2>
        <p className="text-gray-400 mb-10">Explore the tools we use daily.</p>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full border ${
                activeCategory === cat
                  ? 'bg-mint text-black font-semibold'
                  : 'border-gray-700 text-gray-400 hover:text-white hover:border-mint'
              } transition`}
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.08 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        {/* Tech Grid */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 justify-items-center"
          variants={gridVariants}
          initial="hidden"
          animate="visible"
        >
          <AnimatePresence>
            {filteredTechs.map((tech) => (
              <motion.div
                key={tech.name}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                whileHover={{
                  scale: 1.12,
                  boxShadow: '0 8px 32px 0 rgba(65,243,178,0.15)',
                  rotate: [0, 2, -2, 0],
                }}
                transition={{ type: 'spring', stiffness: 200, damping: 12 }}
                className="flex flex-col items-center space-y-2 bg-grayDark/60 rounded-xl p-4 shadow-md border border-gray-800 hover:border-mint transition-all"
              >
                <Image
                  src={tech.logo}
                  alt={tech.name}
                  width={60}
                  height={60}
                  className="hover:scale-110 transition-transform duration-300"
                />
                <p className="text-sm text-gray-300">{tech.name}</p>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
