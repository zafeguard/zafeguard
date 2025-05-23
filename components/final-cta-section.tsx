"use client"

import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

interface FinalCtaSectionProps {
  onOpenDownloadModal: () => void
  onOpenContactModal: () => void
}

export function FinalCtaSection({ onOpenDownloadModal, onOpenContactModal }: FinalCtaSectionProps) {
  return (
    <section className="py-20 bg-[#1A1A1A]">
      <div className="container px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8 scroll-animate">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Ready for better <span className="text-[#FF3C00]">crypto security</span>?
            </h2>
            <p className="text-xl text-gray-400">
              Download both Zafeguard Wallet and Vault to experience next-generation security for your digital assets.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={onOpenDownloadModal}
              className="bg-[#FF3C00] hover:bg-[#CC3000] text-white rounded-full px-8 py-3 text-lg font-medium flex items-center gap-2 hover-lift"
            >
              <Download className="w-5 h-5" />
              Download Apps
            </Button>
            <Button
              onClick={onOpenContactModal}
              variant="outline"
              className="border-gray-700 text-gray-300 hover:bg-[#1E1E1E] rounded-full px-8 py-3 text-lg font-medium hover-lift"
            >
              Contact Us
            </Button>
          </div>

          <p className="text-gray-500 text-sm">
            ✅ Both apps free to download • ✅ 5-minute setup • ✅ Works on all devices
          </p>
        </div>
      </div>
    </section>
  )
}
