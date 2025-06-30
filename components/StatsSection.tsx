'use client'

import { motion } from 'framer-motion'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'

const stats = [
  {
    value: 100,
    label: 'Projects Completed',
    suffix: '+',
    icon: '/icons/project.png',
  },
  {
    value: 10,
    label: 'Permanent Clients',
    suffix: '+',
    icon: '/icons/client.png',
  },
  {
    value: 2,
    label: 'Years of Experience',
    suffix: '+',
    icon: '/icons/work.png',
  },
  {
    value: 15,
    label: 'Tech Stack use',
    suffix: '+',
    icon: '/icons/tech.png',
  },
]

export default function StatsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  return (
    <section
      ref={ref}
      className="relative mt-10 z-10 bg-grayDark bg-opacity-40 backdrop-blur-md text-white py-8 px-6 rounded-3xl border-2 border-[#41F3B2]"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-10 text-center">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            className="flex flex-col items-center space-y-3"
          >
            <Image
              src={stat.icon}
              alt={stat.label}
              width={40}
              height={40}
              className="opacity-80"
            />
            <h2 className="text-4xl font-bold text-mint">
              {inView ? (
                <CountUp end={stat.value} duration={2} />
              ) : (
                0
              )}
              {stat.suffix}
            </h2>
            <p className="text-sm text-gray-300">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
