'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Services from '@/components/Services'
import Footer from '@/components/Footer'
import StatsSection from '@/components/StatsSection'
import OurWork from '@/components/OurWork'
import ClientSayPage from '@/components/ClientSayPage'
import TechStackShowcase from '@/components/TechStackShowcase'
import FaqSection from '@/components/FaqSection'
import ContactForm from '@/components/ContactForm'


export default function Home() {
  return (
    <main className="relative min-h-screen text-white font-sans overflow-hidden">
      <div className="relative z-10">
        <Navbar />
        <section className="flex min-h-screen flex-col items-center text-center py-24 px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-mint mt-8 mb-8">
              Build Bold. Design Smart. <br /> Deploy Fast.
            </h1>
            <p className="text-lg mb-6 text-gray-300 max-w-xl mx-auto">
              At PixelMint.tech, we craft stunning, fast, and secure websites & apps using the latest tech — from startups to scaleups.
            </p>
            <button
              className="bg-mint hover:bg-neon text-black px-6 py-3 font-semibold rounded-xl transition"
              onClick={() => {
                const el = document.getElementById('contact');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Get a Free Quote
            </button>
            <StatsSection />
          </motion.div>
        </section>
        <Services />
        <TechStackShowcase />
        <OurWork />
        <ClientSayPage />
        <ContactForm />
        <FaqSection />
        <Footer />
      </div>
    </main>
  )
}
