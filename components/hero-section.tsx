"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Shield, Download } from "lucide-react"

interface HeroSectionProps {
  onOpenDownloadModal: () => void
}

export function HeroSection({ onOpenDownloadModal }: HeroSectionProps) {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-[#121212] to-[#1E1E1E] relative overflow-hidden">
      <div className="absolute inset-0 parallax-bg" data-speed="0.1">
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#FF3C00]/10 rounded-full blur-3xl float-animation"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-[#FF3C00]/5 rounded-full blur-3xl float-animation-delayed"></div>
      </div>
      <div className="container px-6 relative">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4 scroll-animate">
            <p className="text-gray-400 text-lg">Next-generation crypto security with MPC technology</p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-none">
              Your crypto{" "}
              <span className="relative">
                <Shield className="inline w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 text-[#FF3C00] icon-glow" />
              </span>
              <br />
              fortress awaits
            </h1>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 scroll-animate">
            <Button
              onClick={onOpenDownloadModal}
              className="bg-[#FF3C00] hover:bg-[#CC3000] text-white rounded-full px-8 py-3 text-lg font-medium flex items-center gap-2 hover-lift"
            >
              <Download className="w-5 h-5" />
              Download Apps
            </Button>
            <Button
              variant="outline"
              className="border-gray-700 text-gray-300 hover:bg-[#1E1E1E] rounded-full px-8 py-3 text-lg font-medium hover-lift"
              onClick={onOpenDownloadModal}
            >
              Choose Platform
            </Button>
          </div>

          <p className="text-gray-500 text-sm pt-4 scroll-animate">
            Both apps available on Android and iOS.{" "}
            <Link href="#security" className="text-[#FF3C00] hover:underline">
              Learn more
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}
