'use client'

import { motion } from 'framer-motion'
import { FaLaptopCode, FaMobileAlt, FaPaintBrush } from 'react-icons/fa'

const services = [
  {
    title: 'Website Development',
    desc: 'Modern, fast, SEO-optimized websites using Next.js, React, and Tailwind CSS. Responsive, scalable, and built for growth.',
    icon: <FaLaptopCode className="text-mint text-4xl mb-4" />,
    features: [
      'Next.js & React',
      'Tailwind CSS',
      'SEO & Performance',
      'Custom Integrations',
    ],
  },
  {
    title: 'App Development',
    desc: 'Cross-platform mobile apps for Android with Firebase backend. Smooth, secure, and user-friendly experiences.',
    icon: <FaMobileAlt className="text-mint text-4xl mb-4" />,
    features: [
      'Android Development',
      'Firebase Backend',
      'Using React-Native',
      'Only Development',
    ],
  },
  {
    title: 'Graphic Design',
    desc: 'Pixel-perfect YouTube Thumbnail, branding, and graphics. Modern, creative, and tailored to your brand’s identity.',
    icon: <FaPaintBrush className="text-mint text-4xl mb-4" />,
    features: [
      'YT Thumbnail Design',
      'Branding Posters',
      'Instagram Posts',
      'Responsive Graphics',
    ],
  },
]

const cardVariants = {
  offscreen: { opacity: 0, y: 40, scale: 0.95 },
  onscreen: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: 'spring', bounce: 0.3, duration: 0.8 },
  },
}

export default function Services() {
  return (
    <section id="services" className="py-20 bg-dark px-6">
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-center mb-12 text-mint"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        Our Services
      </motion.h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-grayDark p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-gray-800 hover:border-mint group flex flex-col items-center"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
            whileHover={{ scale: 1.04, boxShadow: '0 8px 32px 0 rgba(65,243,178,0.15)' }}
          >
            {service.icon}
            <h3 className="text-xl font-semibold mb-2 text-white text-center group-hover:text-mint transition">{service.title}</h3>
            <p className="text-gray-400 mb-4 text-center">{service.desc}</p>
            <ul className="text-gray-300 text-sm space-y-1 mb-2">
              {service.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="inline-block w-2 h-2 bg-mint rounded-full" />
                  {feature}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
