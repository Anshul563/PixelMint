'use client'

import { motion } from 'framer-motion'

const testimonials = [
	{
		name: 'Ankit Sharma',
		company: 'NovaTech Pvt Ltd',
		text: 'PixelMint.tech transformed our ideas into a beautiful and functional app. Their team is fast, responsive, and full of great design sense.',
	},
	{
		name: 'Priya Mehra',
		company: 'BrightPath Digital',
		text: 'We were amazed by their work speed and quality. PixelMint helped us launch faster and scale smarter.',
	},
	{
		name: 'Rohit Verma',
		company: 'HyperBits Inc.',
		text: 'Professional, creative, and detail-focused. PixelMint is now our go-to for all web & mobile development needs.',
	},
]

export default function ClientSayPage() {
	return (
		<section className="py-20 px-4 sm:px-6">
			<div className="max-w-5xl mx-auto text-center">
				<motion.h1
					className="text-4xl font-bold text-mint mb-4"
					initial={{ opacity: 0, y: -20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
				>
					What Our Clients Say
				</motion.h1>
				<p className="text-gray-400 mb-12">
					Hear directly from the people we've helped build, launch, and grow.
				</p>

				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
					{testimonials.map((t, i) => (
						<motion.div
							key={i}
							className="bg-grayDark bg-opacity-40 backdrop-blur-md p-6 rounded-xl shadow-lg border border-gray-700"
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: i * 0.2 }}
							viewport={{ once: true }}
						>
							<div className="mb-4">
								<h3 className="font-semibold text-white">{t.name}</h3>
								<p className="text-xs text-gray-400">{t.company}</p>
							</div>
							<p className="text-sm text-gray-300 italic">“{t.text}”</p>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	)
}
