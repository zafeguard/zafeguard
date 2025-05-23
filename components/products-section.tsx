"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Wallet, Shield, CheckCircle2 } from "lucide-react"

interface ProductsSectionProps {
  onOpenDownloadModal: () => void
}

export function ProductsSection({ onOpenDownloadModal }: ProductsSectionProps) {
  return (
    <section id="products" className="py-20 bg-[#121212]">
      <div className="container px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our <span className="text-[#FF3C00]">Products</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Two simple apps that work together to keep your crypto completely safe and easy to use.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
            <div className="bg-[#1E1E1E] rounded-3xl p-8 border border-[#2A2A2A] relative overflow-hidden group hover:border-[#FF3C00]/50 transition-all duration-300 card-hover scroll-animate">
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF3C00]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-[#FF3C00]/20 rounded-2xl flex items-center justify-center mb-6 float-on-scroll">
                  <Wallet className="w-8 h-8 text-[#FF3C00]" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Zafeguard Wallet</h3>
                <p className="text-gray-400 mb-6">
                  Your everyday crypto wallet that's beautiful and easy to use. Manage all your digital money in one
                  place.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "Manage Bitcoin, Ethereum, and hundreds of other cryptocurrencies",
                    "Beautiful, intuitive interface for easy navigation",
                    "Real-time market data and portfolio tracking",
                    "Secure transactions verified by Zafeguard Vault",
                    "Cross-platform synchronization across all your devices",
                  ].map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#FF3C00] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="bg-[#121212] rounded-2xl p-6 mb-6 border border-[#2A2A2A]">
                  <Image
                    src="/images/wallet-preview.png"
                    alt="Zafeguard Wallet Preview"
                    width={400}
                    height={250}
                    className="w-full h-auto rounded-lg"
                  />
                </div>
                <Button
                  onClick={onOpenDownloadModal}
                  className="bg-[#FF3C00] hover:bg-[#CC3000] text-white rounded-full px-6 py-2 w-full hover-lift"
                >
                  Download Wallet
                </Button>
              </div>
            </div>

            <div className="bg-[#1E1E1E] rounded-3xl p-8 border border-[#2A2A2A] relative overflow-hidden group hover:border-[#FF3C00]/50 transition-all duration-300 card-hover scroll-animate">
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF3C00]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-[#FF3C00]/20 rounded-2xl flex items-center justify-center mb-6 float-on-scroll">
                  <Shield className="w-8 h-8 text-[#FF3C00]" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Zafeguard Vault</h3>
                <p className="text-gray-400 mb-6">
                  The security app that protects your crypto keys using advanced MPC technology (think of it as your
                  digital safe).
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "Sign transactions with MPC-protected keys",
                    "Create and recover private keys with recovery phrases",
                    "Authorize transactions from Zafeguard Wallet",
                    "Distribute key shares across multiple devices for enhanced security",
                  ].map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#FF3C00] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="bg-[#121212] rounded-2xl p-6 mb-6 border border-[#2A2A2A]">
                  <Image
                    src="/images/vault-preview.png"
                    alt="Zafeguard Vault Preview"
                    width={400}
                    height={250}
                    className="w-full h-auto rounded-lg"
                  />
                </div>
                <Button
                  onClick={onOpenDownloadModal}
                  variant="outline"
                  className="border-[#FF3C00] text-[#FF3C00] hover:bg-[#FF3C00]/10 rounded-full px-6 py-2 w-full hover-lift"
                >
                  Download Vault
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-16 bg-[#1A1A1A] rounded-3xl p-8 border border-[#2A2A2A] scroll-animate">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">How They Work Together</h3>
                <p className="text-gray-400 mb-6">
                  Zafeguard Wallet and Vault work in tandem to provide a secure, seamless experience:
                </p>
                <ol className="space-y-6 relative">
                  <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-[#2A2A2A]"></div>
                  {[
                    {
                      title: "Manage your assets in Zafeguard Wallet",
                      desc: "Browse your portfolio, check balances, and initiate transactions",
                    },
                    {
                      title: "Transaction is sent to Zafeguard Vault",
                      desc: "When you make a transaction, it's securely sent to Vault for authorization",
                    },
                    {
                      title: "Vault signs with MPC technology",
                      desc: "Vault uses distributed key shares to securely sign the transaction",
                    },
                    {
                      title: "Transaction is sent to blockchain",
                      desc: "Once authorized, the signed transaction is sent to the blockchain",
                    },
                  ].map((step, i) => (
                    <li key={i} className="pl-10 relative scroll-animate">
                      <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-[#FF3C00] flex items-center justify-center text-white font-bold pulse-glow">
                        {i + 1}
                      </div>
                      <h4 className="text-lg font-semibold text-white mb-1">{step.title}</h4>
                      <p className="text-gray-400">{step.desc}</p>
                    </li>
                  ))}
                </ol>
              </div>
              <div className="bg-[#121212] rounded-2xl p-6 border border-[#2A2A2A] parallax-element" data-speed="0.05">
                <Image
                  src="/images/wallet-vault-flow.png"
                  alt="Wallet and Vault Flow"
                  width={500}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
