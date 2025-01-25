import Link from "next/link"
import { Facebook, Twitter, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-4">Hotel Tanahun Vyas</h3>
            <p className="mb-4">Experience luxury and comfort in the heart of the city.</p>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-primary">
                <Facebook className="w-6 h-6" />
              </Link>
              <Link href="#" className="hover:text-primary">
                <Twitter className="w-6 h-6" />
              </Link>
              <Link href="#" className="hover:text-primary">
                <Instagram className="w-6 h-6" />
              </Link>
            </div>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/rooms" className="hover:text-primary">
                  Rooms
                </Link>
              </li>
              <li>
                <Link href="/amenities" className="hover:text-primary">
                  Amenities
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <p className="mb-2">Naya Buspark, Kathmandu 44600</p>
            <p className="mb-2">Phone: +977 234 567 890</p>
            <p>Email: info@hoteltanahunbyas.com</p>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p>&copy; {new Date().getFullYear()} Hotel Tanahun Vyas. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

