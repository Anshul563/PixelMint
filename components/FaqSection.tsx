'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiChevronDown } from 'react-icons/fi'

const faqs = [
  {
    question: 'What services does PixelMint.tech offer?',
    answer:
      'We specialize in custom web and app development using React.js, Next.js, Firebase, and Tailwind CSS. We handle UI/UX, backend, and deployment too.',
  },
  {
    question: 'How long does a typical project take?',
    answer:
      'Most small-to-medium projects are delivered within 2-4 weeks. Timelines depend on project scope and features.',
  },
  {
    question: 'Do you offer ongoing maintenance?',
    answer:
      'Yes! We offer affordable maintenance plans for updates, security, bug fixes, and performance improvements.',
  },
  {
    question: 'What is your payment process?',
    answer:
      'We typically take 30-50% upfront, and the rest upon project completion or delivery milestones.',
  },
]

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i)
  }

  return (
    <section className="bg-dark text-white px-6 py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-mint text-center mb-10">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border border-gray-700 rounded-xl overflow-hidden bg-grayDark"
            >
              <button
                className="w-full flex justify-between items-center px-6 py-4 text-left text-white hover:text-mint transition"
                onClick={() => toggle(i)}
              >
                <span className="text-sm sm:text-base font-medium">{faq.question}</span>
                <motion.span
                  animate={{ rotate: openIndex === i ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <FiChevronDown className="text-xl" />
                </motion.span>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-6 pb-4 text-gray-400 text-sm sm:text-base"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
