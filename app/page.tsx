"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Shield,
  Lock,
  Smartphone,
  Key,
  Wallet,
  Github,
  Twitter,
  Linkedin,
  FileText,
  MessageSquare,
  Cloud,
  Users,
  Menu,
  CheckCircle2,
  Download,
  Code,
  Zap,
  Globe,
} from "lucide-react"
import { ParallaxEffect } from "@/components/parallax-effect"
import { useState } from "react"
import { DownloadModal } from "@/components/download-modal"
import { ContactModal } from "@/components/contact-modal"

export default function LandingPage() {
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false)
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  return (
    <div className="flex min-h-screen flex-col bg-[#121212] text-white">
      <ParallaxEffect />
      <header className="sticky top-0 z-40 w-full bg-[#121212]/80 backdrop-blur-sm border-b border-[#1E1E1E]">
        <div className="container flex h-16 items-center justify-between px-6">
          <div className="flex items-center gap-2">
            <Image src="/images/zafeguard-logo.png" alt="Zafeguard Logo" width={32} height={32} className="h-8 w-8" />
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
          <div className="flex items-center gap-4">
            <Button
              onClick={() => setIsDownloadModalOpen(true)}
              className="bg-[#FF3C00] text-white hover:bg-[#CC3000] rounded-full px-6 py-2 font-medium hover-lift"
            >
              Download
            </Button>
            <Button variant="ghost" size="sm" className="md:hidden text-white">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
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
                  onClick={() => setIsDownloadModalOpen(true)}
                  className="bg-[#FF3C00] hover:bg-[#CC3000] text-white rounded-full px-8 py-3 text-lg font-medium flex items-center gap-2 hover-lift"
                >
                  <Download className="w-5 h-5" />
                  Download Apps
                </Button>
                <Button
                  variant="outline"
                  className="border-gray-700 text-gray-300 hover:bg-[#1E1E1E] rounded-full px-8 py-3 text-lg font-medium hover-lift"
                  onClick={() => setIsDownloadModalOpen(true)}
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

        {/* Products Section */}
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
                      onClick={() => setIsDownloadModalOpen(true)}
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
                      onClick={() => setIsDownloadModalOpen(true)}
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
                  <div
                    className="bg-[#121212] rounded-2xl p-6 border border-[#2A2A2A] parallax-element"
                    data-speed="0.05"
                  >
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

        {/* Cryptographic Curves Section */}
        <section className="py-20 bg-[#1A1A1A]">
          <div className="container px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16 scroll-animate">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  Supported <span className="text-[#FF3C00]">Cryptographic Curves</span>
                </h2>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                  Zafeguard Vault supports multiple elliptic curves for maximum compatibility and security across
                  different blockchain networks.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    name: "SECP256k1",
                    icon: <Code className="w-6 h-6" />,
                    description: "The curve used by Bitcoin and Ethereum",
                    features: ["Bitcoin transactions", "Ethereum signatures", "Most DeFi protocols"],
                    color: "bg-orange-500/20 text-orange-400",
                  },
                  {
                    name: "ED25519",
                    icon: <Zap className="w-6 h-6" />,
                    description: "Modern, high-performance elliptic curve",
                    features: ["Solana blockchain", "Fast signature verification", "Enhanced security"],
                    color: "bg-purple-500/20 text-purple-400",
                  },
                  {
                    name: "ED448",
                    icon: <Shield className="w-6 h-6" />,
                    description: "High-security curve for sensitive applications",
                    features: ["Maximum security", "Government-grade", "Future-proof encryption"],
                    color: "bg-blue-500/20 text-blue-400",
                  },
                  {
                    name: "P-256",
                    icon: <Globe className="w-6 h-6" />,
                    description: "NIST standard curve for enterprise use",
                    features: ["Enterprise systems", "FIPS compliance", "Wide compatibility"],
                    color: "bg-green-500/20 text-green-400",
                  },
                  {
                    name: "P-384",
                    icon: <Lock className="w-6 h-6" />,
                    description: "Higher security NIST curve",
                    features: ["Enhanced security", "Government approved", "Long-term protection"],
                    color: "bg-red-500/20 text-red-400",
                  },
                  {
                    name: "P-512",
                    icon: <Key className="w-6 h-6" />,
                    description: "Maximum security NIST curve",
                    features: ["Top-tier security", "Critical applications", "Military-grade"],
                    color: "bg-yellow-500/20 text-yellow-400",
                  },
                ].map((curve, i) => (
                  <div
                    key={i}
                    className="bg-[#121212] rounded-3xl p-6 border border-[#2A2A2A] hover:border-[#FF3C00]/50 transition-all duration-300 card-hover scroll-animate"
                  >
                    <div
                      className={`w-12 h-12 ${curve.color} rounded-2xl flex items-center justify-center mb-4 float-on-scroll`}
                    >
                      {curve.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{curve.name}</h3>
                    <p className="text-gray-400 mb-4 text-sm">{curve.description}</p>
                    <ul className="space-y-2">
                      {curve.features.map((feature, j) => (
                        <li key={j} className="flex items-center gap-2 text-sm text-gray-300">
                          <div className="w-1.5 h-1.5 bg-[#FF3C00] rounded-full flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="mt-12 text-center scroll-animate">
                <div className="bg-[#121212] rounded-2xl p-6 border border-[#2A2A2A] inline-block">
                  <p className="text-gray-400 mb-2">
                    <span className="text-[#FF3C00] font-semibold">More curves coming soon!</span>
                  </p>
                  <p className="text-sm text-gray-500">
                    We're constantly adding support for new cryptographic curves to ensure maximum compatibility.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-[#121212]">
          <div className="container px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16 scroll-animate">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  Why choose <span className="text-[#FF3C00]">Zafeguard</span>?
                </h2>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                  Simple security that actually works. No complicated setup, just better protection for your crypto.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    icon: <Shield className="w-6 h-6 text-[#FF3C00]" />,
                    title: "Dual-App Security",
                    description:
                      "Separation of wallet and signing functions creates an additional security layer against attacks.",
                  },
                  {
                    icon: <Lock className="w-6 h-6 text-[#FF3C00]" />,
                    title: "MPC Key Protection",
                    description:
                      "Your private keys are never stored in one place, making them virtually impossible to steal.",
                  },
                  {
                    icon: <Smartphone className="w-6 h-6 text-[#FF3C00]" />,
                    title: "Multi-Device Support",
                    description: "Connect multiple devices to create a secure network for authorizing transactions.",
                  },
                  {
                    icon: <Key className="w-6 h-6 text-[#FF3C00]" />,
                    title: "Recovery Options",
                    description:
                      "Create recovery phrases with Vault for secure backup and restoration of your private keys.",
                  },
                  {
                    icon: <Wallet className="w-6 h-6 text-[#FF3C00]" />,
                    title: "Multi-Chain Support",
                    description:
                      "Manage assets across Bitcoin, Ethereum, and hundreds of other cryptocurrencies in one place.",
                  },
                  {
                    icon: <Shield className="w-6 h-6 text-[#FF3C00]" />,
                    title: "Transaction Verification",
                    description:
                      "Every transaction requires explicit approval through Vault, preventing unauthorized transfers.",
                  },
                ].map((feature, i) => (
                  <div
                    key={i}
                    className="bg-[#1E1E1E] rounded-3xl p-8 hover:bg-[#252525] transition-colors border border-[#2A2A2A] card-hover scroll-animate"
                  >
                    <div className="w-12 h-12 bg-[#FF3C00]/20 rounded-2xl flex items-center justify-center mb-6 float-on-scroll">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-400">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* MPC Technology Section */}
        <section id="security" className="py-20 bg-[#1A1A1A]">
          <div className="container px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-8 scroll-animate">
                  <div className="space-y-4">
                    <h2 className="text-4xl md:text-5xl font-bold text-white">
                      Keep your crypto safe with{" "}
                      <span className="text-[#FF3C00]">
                        smart security
                        <br />
                        technology
                      </span>
                    </h2>
                    <p className="text-xl text-gray-400">
                      Zafeguard Vault uses MPC technology to split your private keys across multiple devices. Think of
                      it like having multiple locks on your safe - even if someone breaks one, your crypto stays
                      protected.
                    </p>
                  </div>

                  <div className="space-y-6">
                    {[
                      {
                        title: "Split Key Protection",
                        description:
                          "Your crypto keys are split across your devices, so no single device can access your funds alone",
                      },
                      {
                        title: "Always Accessible",
                        description:
                          "Even if you lose a device, you can still access your crypto from your other connected devices",
                      },
                      {
                        title: "Extra Approval Required",
                        description:
                          "Every transaction needs approval from multiple devices, making unauthorized transfers nearly impossible",
                      },
                      {
                        title: "Easy Recovery",
                        description:
                          "Create backup phrases in Vault to restore access if needed, without compromising your security",
                      },
                    ].map((item, i) => (
                      <div key={i} className="flex gap-4 scroll-animate">
                        <div className="w-2 h-2 bg-[#FF3C00] rounded-full mt-3 flex-shrink-0 pulse-glow"></div>
                        <div>
                          <h4 className="font-semibold text-white mb-1">{item.title}</h4>
                          <p className="text-gray-400">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <Button className="bg-[#FF3C00] hover:bg-[#CC3000] text-white rounded-full px-6 py-3 hover-lift">
                    Learn more about MPC
                  </Button>
                </div>

                <div className="relative scroll-animate">
                  <div
                    className="bg-[#121212] rounded-3xl p-8 shadow-lg border border-[#2A2A2A] parallax-element"
                    data-speed="0.03"
                  >
                    <Image
                      src="/images/mpc-diagram.png"
                      alt="MPC Technology Diagram"
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

        {/* MPC Beyond Crypto */}
        <section className="py-20 bg-[#121212]">
          <div className="container px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16 scroll-animate">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  MPC technology <span className="text-[#FF3C00]">beyond crypto</span>
                </h2>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                  Discover how Multi-Party Computation is transforming digital security across industries and use cases.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    icon: <FileText className="w-8 h-8 text-[#FF3C00]" />,
                    title: "Digital Identity",
                    description: "Protect your digital identity with distributed authentication",
                  },
                  {
                    icon: <MessageSquare className="w-8 h-8 text-[#FF3C00]" />,
                    title: "Secure Messaging",
                    description: "Private communications with distributed encryption keys",
                  },
                  {
                    icon: <Cloud className="w-8 h-8 text-[#FF3C00]" />,
                    title: "Cloud Security",
                    description: "Store files with encryption keys you control",
                  },
                  {
                    icon: <Users className="w-8 h-8 text-[#FF3C00]" />,
                    title: "Team Collaboration",
                    description: "Share sensitive documents with distributed access",
                  },
                ].map((item, i) => (
                  <div key={i} className="text-center p-6 scroll-animate">
                    <div className="w-16 h-16 bg-[#FF3C00]/20 rounded-2xl flex items-center justify-center mx-auto mb-4 float-on-scroll">
                      {item.icon}
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-gray-400 text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="py-20 bg-[#1A1A1A]">
          <div className="container px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16 scroll-animate">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  Get started in <span className="text-[#FF3C00]">3 simple steps</span>
                </h2>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                  Setting up both Zafeguard Wallet and Vault takes less than 5 minutes.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    step: 1,
                    title: "Download Both Apps",
                    description:
                      "Install Zafeguard Wallet and Vault from your app store. Both are required for maximum security.",
                    image: "/images/step-1.png",
                  },
                  {
                    step: 2,
                    title: "Set Up Vault First",
                    description: "Create your MPC key in Vault and add your devices to build your security network.",
                    image: "/images/step-2.png",
                  },
                  {
                    step: 3,
                    title: "Connect Wallet to Vault",
                    description: "Link your Wallet to Vault, and you're ready to securely manage your crypto assets.",
                    image: "/images/step-3.png",
                  },
                ].map((step, i) => (
                  <div key={i} className="text-center scroll-animate">
                    <div className="w-16 h-16 bg-[#FF3C00] text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold pulse-glow">
                      {step.step}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                    <p className="text-gray-400 mb-6">{step.description}</p>
                    <div className="bg-[#121212] rounded-2xl p-6 h-32 flex items-center justify-center border border-[#2A2A2A] card-hover">
                      <Image
                        src={step.image || "/placeholder.svg"}
                        alt={`Step ${step.step}`}
                        width={100}
                        height={80}
                        className="object-contain"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-[#121212]">
          <div className="container px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16 scroll-animate">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  What people are <span className="text-[#FF3C00]">saying</span>
                </h2>
                <p className="text-xl text-gray-400">Real stories from our community</p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    quote:
                      "The dual-app approach is genius. I love how Vault handles all the security while Wallet gives me a beautiful interface for managing my crypto.",
                    author: "Alex",
                    role: "Crypto Enthusiast",
                  },
                  {
                    quote:
                      "After my friend lost $10,000 in a hack, I switched to Zafeguard. The MPC technology gives me peace of mind that my keys are truly secure.",
                    author: "Sarah",
                    role: "Long-term Investor",
                  },
                  {
                    quote:
                      "I'm not tech-savvy, but Zafeguard made crypto security simple. The recovery phrase feature in Vault saved me when I lost my phone!",
                    author: "Michael",
                    role: "New to Crypto",
                  },
                ].map((testimonial, i) => (
                  <div
                    key={i}
                    className="bg-[#1E1E1E] rounded-3xl p-8 border border-[#2A2A2A] card-hover scroll-animate"
                  >
                    <div className="flex mb-4">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg
                          key={star}
                          className="w-5 h-5 text-[#FF9D00] fill-current"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-gray-300 mb-6">"{testimonial.quote}"</p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-[#FF3C00] text-white rounded-full flex items-center justify-center font-bold">
                        {testimonial.author[0]}
                      </div>
                      <div>
                        <p className="font-semibold text-white">{testimonial.author}</p>
                        <p className="text-sm text-gray-400">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Enterprise Section */}
        <section className="py-20 bg-[#1A1A1A]">
          <div className="container px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-8 scroll-animate">
                  <div className="space-y-4">
                    <h2 className="text-4xl md:text-5xl font-bold text-white">
                      Enterprise-grade <span className="text-[#FF3C00]">MPC solutions</span>
                    </h2>
                    <p className="text-xl text-gray-400">
                      Custom security solutions for businesses requiring enhanced protection and compliance.
                    </p>
                  </div>

                  <div className="space-y-4">
                    {[
                      "Private MPC nodes for your organization",
                      "Custom security policies and compliance",
                      "Integration with existing systems",
                      "24/7 dedicated support team",
                      "Advanced audit and reporting tools",
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3 scroll-animate">
                        <div className="w-2 h-2 bg-[#FF3C00] rounded-full flex-shrink-0"></div>
                        <span className="text-gray-300">{item}</span>
                      </div>
                    ))}
                  </div>

                  <Button
                    onClick={() => setIsContactModalOpen(true)}
                    className="bg-[#FF3C00] hover:bg-[#CC3000] text-white rounded-full px-6 py-3 hover-lift"
                  >
                    Contact our team
                  </Button>
                </div>

                <div className="relative scroll-animate">
                  <div
                    className="bg-[#121212] rounded-3xl p-8 shadow-lg border border-[#2A2A2A] parallax-element"
                    data-speed="0.02"
                  >
                    <Image
                      src="/images/enterprise-dashboard.png"
                      alt="Enterprise Dashboard"
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

        {/* FAQ */}
        <section id="faq" className="py-20 bg-[#121212]">
          <div className="container px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16 scroll-animate">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  Questions? We've got <span className="text-[#FF3C00]">answers</span>
                </h2>
                <p className="text-xl text-gray-400">Everything you need to know about Zafeguard</p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    question: "Why do I need both Zafeguard Wallet and Vault?",
                    answer:
                      "Zafeguard Wallet and Vault work together to provide maximum security. Wallet manages your assets and transactions, while Vault securely stores your private keys using MPC technology and authorizes transactions. This separation creates an additional security layer that protects against attacks.",
                  },
                  {
                    question: "What happens if I lose my phone?",
                    answer:
                      "If you lose your phone, your assets remain secure. Since your private key is split across multiple devices with MPC technology, you can still access your wallet from your other devices. Simply remove the lost device from your Vault to prevent unauthorized access.",
                  },
                  {
                    question: "Can I create recovery phrases with Zafeguard?",
                    answer:
                      "Yes! Zafeguard Vault allows you to create recovery phrases that can be used to restore access to your private keys if needed. This provides a secure backup method without compromising the security benefits of MPC technology.",
                  },
                  {
                    question: "Which cryptocurrencies are supported?",
                    answer:
                      "Zafeguard Wallet supports Bitcoin, Ethereum, and hundreds of other cryptocurrencies across multiple blockchains. Our team regularly adds support for new tokens and chains.",
                  },
                  {
                    question: "Are Zafeguard Wallet and Vault free to use?",
                    answer:
                      "Both Zafeguard Wallet and Vault are free to download and use for personal purposes. We offer premium features for advanced users and custom enterprise solutions for businesses.",
                  },
                ].map((faq, i) => (
                  <div
                    key={i}
                    className="bg-[#1E1E1E] rounded-2xl p-6 hover:bg-[#252525] transition-colors border border-[#2A2A2A] card-hover scroll-animate"
                  >
                    <h3 className="text-lg font-bold text-white mb-3">{faq.question}</h3>
                    <p className="text-gray-400">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-[#1A1A1A]">
          <div className="container px-6">
            <div className="max-w-4xl mx-auto text-center space-y-8 scroll-animate">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold text-white">
                  Ready for better <span className="text-[#FF3C00]">crypto security</span>?
                </h2>
                <p className="text-xl text-gray-400">
                  Download both Zafeguard Wallet and Vault to experience next-generation security for your digital
                  assets.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  onClick={() => setIsDownloadModalOpen(true)}
                  className="bg-[#FF3C00] hover:bg-[#CC3000] text-white rounded-full px-8 py-3 text-lg font-medium flex items-center gap-2 hover-lift"
                >
                  <Download className="w-5 h-5" />
                  Download Apps
                </Button>
                <Button
                  onClick={() => setIsContactModalOpen(true)}
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

        {/* Comparison Table */}
        <section className="py-20 bg-[#121212]">
          <div className="container px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16 scroll-animate">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  How <span className="text-[#FF3C00]">Zafeguard</span> Compares
                </h2>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                  See how our dual-app approach with MPC technology stacks up against traditional wallets.
                </p>
              </div>

              <div className="overflow-x-auto scroll-animate">
                <table className="w-full border-collapse">
                  <thead>
                    <tr>
                      <th className="p-4 text-left text-gray-400 font-normal border-b border-[#2A2A2A]">Feature</th>
                      <th className="p-4 text-center border-b border-[#2A2A2A]">
                        <div className="flex flex-col items-center">
                          <Image
                            src="/images/zafeguard-logo.png"
                            alt="Zafeguard"
                            width={32}
                            height={32}
                            className="h-8 w-8 mb-2"
                          />
                          <span className="text-white font-bold">Zafeguard</span>
                        </div>
                      </th>
                      <th className="p-4 text-center text-gray-400 border-b border-[#2A2A2A]">
                        <span className="font-normal">Traditional Wallets</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        feature: "Private Key Storage",
                        zafeguard: "Split across multiple devices (MPC)",
                        traditional: "Stored on a single device",
                      },
                      {
                        feature: "Security Architecture",
                        zafeguard: "Dual-app separation (Wallet + Vault)",
                        traditional: "Single app handles everything",
                      },
                      {
                        feature: "If Device is Lost/Stolen",
                        zafeguard: "Funds remain secure and accessible",
                        traditional: "Funds at risk if seed phrase is lost",
                      },
                      {
                        feature: "Transaction Authorization",
                        zafeguard: "Requires Vault approval for security",
                        traditional: "Single device can authorize",
                      },
                      {
                        feature: "Recovery Options",
                        zafeguard: "MPC key shares + optional recovery phrase",
                        traditional: "Seed phrase only",
                      },
                    ].map((row, i) => (
                      <tr key={i} className="border-b border-[#2A2A2A]">
                        <td className="p-4 text-left text-white">{row.feature}</td>
                        <td className="p-4 text-center text-white">
                          <div className="flex items-center justify-center">
                            <CheckCircle2 className="w-5 h-5 text-[#FF3C00] mr-2" />
                            {row.zafeguard}
                          </div>
                        </td>
                        <td className="p-4 text-center text-gray-400">{row.traditional}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#1E1E1E] bg-[#121212]">
        <div className="container px-6 py-12">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Image
                  src="/images/zafeguard-logo.png"
                  alt="Zafeguard Logo"
                  width={32}
                  height={32}
                  className="h-8 w-8"
                />
                <span className="text-xl font-bold text-white">Zafeguard</span>
              </div>
              <p className="text-gray-400 max-w-md">
                Protecting your digital assets with next-generation MPC technology. Our dual-app approach with Wallet
                and Vault provides unmatched security.
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
      <DownloadModal isOpen={isDownloadModalOpen} onClose={() => setIsDownloadModalOpen(false)} />
      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
    </div>
  )
}
