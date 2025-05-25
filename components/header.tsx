"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { useState } from "react"

interface HeaderProps {
  onOpenDownloadModal: () => void
}

export function Header({ onOpenDownloadModal }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 w-full bg-[#121212]/80 backdrop-blur-sm border-b border-[#1E1E1E]">
      <div className="container flex h-16 items-center justify-between px-6">
        <div className="flex items-center gap-2">
          <Image src="/icon.png" alt="Zafeguard Logo" width={32} height={32} className="h-8 w-8" />
          <span className="text-xl font-bold text-white">Zafeguard</span>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <Link href="#products" className="text-sm font-medium text-gray-300 hover:text-[#FF3C00] transition-colors">
            Products
          </Link>
          <Link href="#security" className="text-sm font-medium text-gray-300 hover:text-[#FF3C00] transition-colors">
            Security
          </Link>
          <Link
            href="#how-it-works"
            className="text-sm font-medium text-gray-300 hover:text-[#FF3C00] transition-colors"
          >
            Learn
          </Link>
          <Link href="#faq" className="text-sm font-medium text-gray-300 hover:text-[#FF3C00] transition-colors">
            Support
          </Link>
        </nav>
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-[#121212] border-b border-[#1E1E1E] md:hidden z-50">
            <nav className="container px-6 py-4 flex flex-col gap-4">
              <a
                href="#products"
                className="text-sm font-medium text-gray-300 hover:text-[#FF3C00] transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Products
              </a>
              <a
                href="#security"
                className="text-sm font-medium text-gray-300 hover:text-[#FF3C00] transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Security
              </a>
              <a
                href="#how-it-works"
                className="text-sm font-medium text-gray-300 hover:text-[#FF3C00] transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Learn
              </a>
              <a
                href="#faq"
                className="text-sm font-medium text-gray-300 hover:text-[#FF3C00] transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Support
              </a>
            </nav>
          </div>
        )}
        <div className="flex items-center gap-4">
          <Button
            onClick={onOpenDownloadModal}
            className="bg-[#FF3C00] text-white hover:bg-[#CC3000] rounded-full px-6 py-2 font-medium hover-lift"
          >
            Download
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  )
}
