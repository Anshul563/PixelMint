import Image from 'next/image'
import Link from 'next/link'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-grayDark text-white py-14 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Logo & Tagline */}
        <div>
          <Image src="/logo6.png" alt="PixelMint Logo" width={140} height={40} />
          <p className="text-gray-400 mt-4 text-sm">
            PixelMint.tech crafts fast, modern digital experiences using the latest technologies.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-mint mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link href="/" className="hover:text-mint">Home</Link></li>
            <li><Link href="/#services" className="hover:text-mint">Services</Link></li>
            <li><Link href="/contact" className="hover:text-mint">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-mint mb-4">Contact</h3>
          <ul className="text-sm text-gray-300 space-y-2">
            <li>Email: <a href="mailto:pixelminttt@gmail.com" className="hover:text-mint">pixelminttt@gmail.com</a></li>
            <li>Phone: <a href="tel:+91000000000" className="hover:text-mint">+91 00000 00000</a></li>
            <li>Location: India</li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-mint mb-4">Follow Us</h3>
          <div className="flex space-x-4 text-gray-300 text-lg">
            <a href="#" target="_blank" className="hover:text-mint"><FaFacebookF /></a>
            <a href="https://www.instagram.com/pixelmint.tech?utm_source=ig_web_button_share_sheet&igsh=MTUyY2JkcHZ4anMwNA==" target="_blank" className="hover:text-mint"><FaInstagram /></a>
            <a href="#" target="_blank" className="hover:text-mint"><FaLinkedinIn /></a>
            <a href="#" target="_blank" className="hover:text-mint"><FaGithub /></a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-12 border-t border-gray-700 pt-6 pb-4 text-sm text-gray-500 text-center">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-2">
          <Link href="/privacy-policy" className="hover:text-mint">Privacy Policy</Link>
          <span className="hidden sm:inline">|</span>
          <Link href="/terms" className="hover:text-mint">Terms & Conditions</Link>
          <span className="hidden sm:inline">|</span>
          <Link href="/refund-policy" className="hover:text-mint">Refund Policy</Link>
        </div>
        <p>© {new Date().getFullYear()} PixelMint.tech. All rights reserved.</p>
      </div>
    </footer>
  )
}
