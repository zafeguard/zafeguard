import Image from "next/image"
import Link from "next/link"
import { Github, Twitter, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-[#1E1E1E] bg-[#121212]">
      <div className="container px-6 py-12">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Image src="/images/zafeguard-logo.png" alt="Zafeguard Logo" width={32} height={32} className="h-8 w-8" />
              <span className="text-xl font-bold text-white">Zafeguard</span>
            </div>
            <p className="text-gray-400 max-w-md">
              Protecting your digital assets with next-generation MPC technology. Our dual-app approach with Wallet and
              Vault provides unmatched security.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-gray-500 hover:text-[#FF3C00] transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-500 hover:text-[#FF3C00] transition-colors">
                <Github className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-500 hover:text-[#FF3C00] transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              <Link href="#products" className="text-gray-400 hover:text-[#FF3C00] transition-colors">
                Products
              </Link>
              <Link href="#security" className="text-gray-400 hover:text-[#FF3C00] transition-colors">
                Security
              </Link>
              <Link href="#how-it-works" className="text-gray-400 hover:text-[#FF3C00] transition-colors">
                Learn
              </Link>
              <Link href="#faq" className="text-gray-400 hover:text-[#FF3C00] transition-colors">
                Support
              </Link>
              <Link href="/about" className="text-gray-400 hover:text-[#FF3C00] transition-colors">
                About
              </Link>
              <Link href="/support" className="text-gray-400 hover:text-[#FF3C00] transition-colors">
                Help Center
              </Link>
              <Link href="/contact" className="text-gray-400 hover:text-[#FF3C00] transition-colors">
                Contact
              </Link>
              <Link href="#enterprise" className="text-gray-400 hover:text-[#FF3C00] transition-colors">
                Enterprise
              </Link>
            </div>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-12 pt-6 border-t border-[#1E1E1E] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">© {new Date().getFullYear()} Zafeguard. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-sm text-gray-500 hover:text-[#FF3C00] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-gray-500 hover:text-[#FF3C00] transition-colors">
              Terms of Service
            </Link>
            <Link href="/support" className="text-sm text-gray-500 hover:text-[#FF3C00] transition-colors">
              Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
