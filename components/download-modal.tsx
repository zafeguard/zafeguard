"use client"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { X, Smartphone, Download } from "lucide-react"

interface DownloadModalProps {
  isOpen: boolean
  onClose: () => void
}

export function DownloadModal({ isOpen, onClose }: DownloadModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <div className="relative bg-[#1E1E1E] rounded-3xl p-8 max-w-2xl w-full mx-4 border border-[#2A2A2A] shadow-2xl max-h-[90vh] overflow-y-auto">
        {/* Close button */}
        <button onClick={onClose} className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors">
          <X className="w-6 h-6" />
        </button>

        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Image src="/images/zafeguard-logo.png" alt="Zafeguard Logo" width={32} height={32} className="h-8 w-8" />
            <span className="text-xl font-bold text-white">Zafeguard</span>
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">Choose Your Platform</h2>
          <p className="text-gray-400">Download both Zafeguard Wallet and Vault for maximum security</p>
        </div>

        {/* Platform Selection */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Android */}
          <div className="bg-[#121212] rounded-2xl p-6 border border-[#2A2A2A]">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center">
                <Smartphone className="w-6 h-6 text-green-500" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Android</h3>
                <p className="text-sm text-gray-400">Google Play Store</p>
              </div>
            </div>

            <div className="space-y-3">
              <Button className="w-full bg-[#FF3C00] hover:bg-[#CC3000] text-white rounded-xl py-3 flex items-center gap-2">
                <Image src="/images/google-play-icon.png" alt="Google Play" width={20} height={20} />
                Download Wallet
              </Button>
              <Button
                variant="outline"
                className="w-full border-[#FF3C00] text-[#FF3C00] hover:bg-[#FF3C00]/10 rounded-xl py-3 flex items-center gap-2"
              >
                <Image src="/images/google-play-icon.png" alt="Google Play" width={20} height={20} />
                Download Vault
              </Button>
            </div>
          </div>

          {/* iOS */}
          <div className="bg-[#121212] rounded-2xl p-6 border border-[#2A2A2A]">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
                <Smartphone className="w-6 h-6 text-blue-500" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">iOS</h3>
                <p className="text-sm text-gray-400">App Store</p>
              </div>
            </div>

            <div className="space-y-3">
              <Button className="w-full bg-[#FF3C00] hover:bg-[#CC3000] text-white rounded-xl py-3 flex items-center gap-2">
                <Image src="/images/app-store-icon.png" alt="App Store" width={20} height={20} />
                Download Wallet
              </Button>
              <Button
                variant="outline"
                className="w-full border-[#FF3C00] text-[#FF3C00] hover:bg-[#FF3C00]/10 rounded-xl py-3 flex items-center gap-2"
              >
                <Image src="/images/app-store-icon.png" alt="App Store" width={20} height={20} />
                Download Vault
              </Button>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-8 p-4 bg-[#121212] rounded-xl border border-[#2A2A2A]">
          <div className="flex items-start gap-3">
            <Download className="w-5 h-5 text-[#FF3C00] flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm font-semibold text-white mb-1">Installation Order</h4>
              <p className="text-sm text-gray-400">
                For the best experience, install Zafeguard Vault first to set up your MPC keys, then install Wallet and
                connect it to Vault.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-6">
          <p className="text-xs text-gray-500">
            Both apps are free to download • Compatible with Android 8.0+ and iOS 13.0+
          </p>
        </div>
      </div>
    </div>
  )
}
