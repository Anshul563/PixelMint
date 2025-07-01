'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'

export default function ContactPage() {
    const [formData, setFormData] = useState({ name: '', email: '', mobile: '', message: '' })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        emailjs
            .send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
                formData,
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
            )
            .then(() => {
                alert('✅ Message sent successfully!')
                setFormData({ name: '', email: '', mobile: '', message: '' })
            })
            .catch((err) => {
                console.error(err)
                alert('❌ Failed to send message. Try again.')
            })
    }

    return (
        <div className="min-h-screen flex items-center justify-center text-white">
            <section id="contact" className="bg-dark text-white py-24 px-4 sm:px-8">
                <div className="max-w-3xl mx-auto">
                    {/* Heading */}
                    <motion.h2
                        className="text-center text-4xl sm:text-5xl font-bold text-mint mb-4"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        Let's Work Together
                    </motion.h2>

                    <motion.p
                        className="text-center text-gray-400 mb-12"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        Have a project or idea? Send us a message and we’ll get back within 12 hours.
                    </motion.p>

                    {/* Form Container */}
                    <motion.form
                        onSubmit={handleSubmit}
                        className="backdrop-blur-md bg-[#121212]/60 border border-gray-700 rounded-2xl p-8 sm:p-10 shadow-xl space-y-6"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        {/* Name Field */}
                        <div className="relative">
                            <input
                                type="text"
                                name="name"
                                required
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full bg-transparent border border-gray-600 text-white rounded-md px-4 pt-6 pb-2 focus:outline-none focus:ring-2 focus:ring-mint placeholder-transparent"
                                placeholder="Your Name"
                            />
                            <label className="absolute left-4 top-2 text-sm text-gray-400 pointer-events-none transition-all">
                                Your Name
                            </label>
                        </div>

                        {/* Mobile Number Field */}
                        <div className="relative">
                            <input
                                type="tel"
                                name="mobile"
                                required
                                value={formData.mobile}
                                onChange={handleChange}
                                className="w-full bg-transparent border border-gray-600 text-white rounded-md px-4 pt-6 pb-2 focus:outline-none focus:ring-2 focus:ring-mint placeholder-transparent"
                                placeholder="Mobile Number"
                                pattern="[0-9]{10,15}"
                                maxLength={15}
                            />
                            <label className="absolute left-4 top-2 text-sm text-gray-400 pointer-events-none transition-all">
                                Mobile Number
                            </label>
                        </div>

                        {/* Email Field */}
                        <div className="relative">
                            <input
                                type="email"
                                name="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full bg-transparent border border-gray-600 text-white rounded-md px-4 pt-6 pb-2 focus:outline-none focus:ring-2 focus:ring-mint placeholder-transparent"
                                placeholder="Email"
                            />
                            <label className="absolute left-4 top-2 text-sm text-gray-400 pointer-events-none transition-all">
                                Email
                            </label>
                        </div>

                        {/* Message Field */}
                        <div className="relative">
                            <textarea
                                name="message"
                                rows={5}
                                required
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full bg-transparent border border-gray-600 text-white rounded-md px-4 pt-6 pb-2 focus:outline-none focus:ring-2 focus:ring-mint placeholder-transparent"
                                placeholder="Your Message"
                            />
                            <label className="absolute left-4 top-2 text-sm text-gray-400 pointer-events-none transition-all">
                                Your Message
                            </label>
                        </div>

                        {/* Submit Button */}
                        <motion.button
                            whileHover={{ scale: 1.05, boxShadow: '0 0 15px #00FFB2' }}
                            whileTap={{ scale: 0.95 }}
                            type="submit"
                            className="bg-mint text-black font-bold w-full py-3 rounded-full transition-all shadow-lg"
                        >
                            Send Message
                        </motion.button>
                    </motion.form>
                </div>
            </section>
        </div>
    )
}
