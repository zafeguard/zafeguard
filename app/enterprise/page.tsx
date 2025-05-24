"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Shield, Users, Settings, Clock, CheckCircle2, Building, Lock, Zap } from "lucide-react"
import { ContactModal } from "@/components/contact-modal"

export default function Enterprise() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  return (
    <div className="min-h-screen bg-[#121212] text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <Link href="/">
              <Button variant="ghost" className="text-gray-400 hover:text-white mb-4">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Enterprise <span className="text-[#FF3C00]">Solutions</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl">
              Scale your business with enterprise-grade MPC security. Custom solutions for organizations that demand the
              highest level of digital asset protection.
            </p>
          </div>

          <div className="space-y-16">
            {/* Hero Section */}
            <section className="bg-[#1E1E1E] rounded-3xl p-8 md:p-12 border border-[#2A2A2A]">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold text-white mb-6">
                    Built for <span className="text-[#FF3C00]">Enterprise Scale</span>
                  </h2>
                  <p className="text-gray-300 text-lg mb-8">
                    Zafeguard Enterprise provides institutional-grade security with the flexibility to integrate into
                    your existing infrastructure. Our MPC technology scales from small teams to global organizations.
                  </p>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-[#FF3C00] mb-2">99.9%</div>
                      <div className="text-sm text-gray-400">Uptime SLA</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-[#FF3C00] mb-2">24/7</div>
                      <div className="text-sm text-gray-400">Support</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-[#FF3C00] mb-2">SOC 2</div>
                      <div className="text-sm text-gray-400">Compliant</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-[#FF3C00] mb-2">FIPS</div>
                      <div className="text-sm text-gray-400">Certified</div>
                    </div>
                  </div>
                </div>
                <div className="bg-[#121212] rounded-2xl p-8 border border-[#2A2A2A]">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-[#FF3C00]/20 rounded-xl flex items-center justify-center">
                        <Building className="w-6 h-6 text-[#FF3C00]" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white">Custom Deployment</h3>
                        <p className="text-gray-400 text-sm">Private cloud or on-premises</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-[#FF3C00]/20 rounded-xl flex items-center justify-center">
                        <Lock className="w-6 h-6 text-[#FF3C00]" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white">Advanced Security</h3>
                        <p className="text-gray-400 text-sm">Hardware security modules</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-[#FF3C00]/20 rounded-xl flex items-center justify-center">
                        <Zap className="w-6 h-6 text-[#FF3C00]" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white">High Performance</h3>
                        <p className="text-gray-400 text-sm">1000+ transactions per second</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-[#FF3C00]/20 rounded-xl flex items-center justify-center">
                        <Shield className="w-6 h-6 text-[#FF3C00]" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white">Fully Offline</h3>
                        <p className="text-gray-400 text-sm">No 3rd-party API dependencies</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Features */}
            <section>
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Enterprise Features</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    icon: <Shield className="w-8 h-8" />,
                    title: "Private MPC Nodes",
                    description:
                      "Dedicated infrastructure with your own MPC nodes for maximum security and performance.",
                  },
                  {
                    icon: <Users className="w-8 h-8" />,
                    title: "Role-Based Access",
                    description:
                      "Granular permissions and multi-signature policies tailored to your organizational structure.",
                  },
                  {
                    icon: <Settings className="w-8 h-8" />,
                    title: "Custom Integration",
                    description: "APIs and SDKs for seamless integration with your existing systems and workflows.",
                  },
                  {
                    icon: <Clock className="w-8 h-8" />,
                    title: "Real-time Monitoring",
                    description: "Advanced analytics and monitoring tools with custom alerts and reporting.",
                  },
                  {
                    icon: <Building className="w-8 h-8" />,
                    title: "Compliance Ready",
                    description:
                      "Built-in compliance tools for regulatory requirements including SOX, PCI DSS, and more.",
                  },
                  {
                    icon: <Lock className="w-8 h-8" />,
                    title: "Audit Trails",
                    description:
                      "Comprehensive logging and audit trails for all transactions and administrative actions.",
                  },
                ].map((feature, i) => (
                  <div
                    key={i}
                    className="bg-[#1E1E1E] rounded-2xl p-6 border border-[#2A2A2A] hover:border-[#FF3C00]/50 transition-all duration-300"
                  >
                    <div className="w-16 h-16 bg-[#FF3C00]/20 rounded-2xl flex items-center justify-center mb-6 text-[#FF3C00]">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-400">{feature.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Use Cases */}
            <section className="bg-[#1E1E1E] rounded-3xl p-8 md:p-12 border border-[#2A2A2A]">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Enterprise Use Cases</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="bg-[#121212] rounded-2xl p-6 border border-[#2A2A2A]">
                    <h3 className="text-xl font-bold text-white mb-3">Financial Institutions</h3>
                    <p className="text-gray-400 mb-4">
                      Banks and financial services companies use Zafeguard Enterprise to secure digital assets, enable
                      crypto trading desks, and provide custody services to clients.
                    </p>
                    <ul className="space-y-2">
                      {[
                        "Institutional custody",
                        "Trading desk security",
                        "Client asset management",
                        "Regulatory compliance",
                      ].map((item, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
                          <CheckCircle2 className="w-4 h-4 text-[#FF3C00] flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-[#121212] rounded-2xl p-6 border border-[#2A2A2A]">
                    <h3 className="text-xl font-bold text-white mb-3">Crypto Exchanges</h3>
                    <p className="text-gray-400 mb-4">
                      Cryptocurrency exchanges leverage our MPC technology to secure hot wallets, cold storage, and
                      provide enhanced security for high-value transactions.
                    </p>
                    <ul className="space-y-2">
                      {[
                        "Hot wallet security",
                        "Cold storage management",
                        "Multi-sig treasury",
                        "Instant settlements",
                      ].map((item, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
                          <CheckCircle2 className="w-4 h-4 text-[#FF3C00] flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="bg-[#121212] rounded-2xl p-6 border border-[#2A2A2A]">
                    <h3 className="text-xl font-bold text-white mb-3">Corporate Treasury</h3>
                    <p className="text-gray-400 mb-4">
                      Large corporations use Zafeguard Enterprise to manage digital asset treasuries, execute large
                      transactions, and maintain security across global operations.
                    </p>
                    <ul className="space-y-2">
                      {["Treasury management", "Large transactions", "Global operations", "Risk management"].map(
                        (item, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
                            <CheckCircle2 className="w-4 h-4 text-[#FF3C00] flex-shrink-0" />
                            {item}
                          </li>
                        ),
                      )}
                    </ul>
                  </div>
                  <div className="bg-[#121212] rounded-2xl p-6 border border-[#2A2A2A]">
                    <h3 className="text-xl font-bold text-white mb-3">DeFi Protocols</h3>
                    <p className="text-gray-400 mb-4">
                      DeFi protocols integrate Zafeguard Enterprise to secure protocol treasuries, manage governance
                      tokens, and protect user funds.
                    </p>
                    <ul className="space-y-2">
                      {[
                        "Protocol security",
                        "Governance tokens",
                        "User fund protection",
                        "Smart contract integration",
                      ].map((item, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
                          <CheckCircle2 className="w-4 h-4 text-[#FF3C00] flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Pricing */}
            <section>
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Enterprise Pricing</h2>
              <div className="max-w-4xl mx-auto">
                <div className="bg-[#1E1E1E] rounded-2xl p-8 md:p-12 border border-[#FF3C00] relative text-center">
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#FF3C00] text-white px-4 py-1 rounded-full text-sm font-medium">
                    Enterprise Solution
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Custom Enterprise Package</h3>
                  <p className="text-gray-400 mb-6">Tailored solutions for your organization</p>
                  <div className="text-3xl font-bold text-white mb-8">
                    Starting from $1,000<span className="text-lg text-gray-400">/month</span>
                  </div>

                  <div className="space-y-6 mb-8">
                    {/* First row - 2 columns */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-[#121212] rounded-xl p-4 border border-[#2A2A2A]">
                        <h4 className="text-lg font-bold text-[#FF3C00] mb-3">Custom SDK</h4>
                        <p className="text-gray-400 text-sm">
                          Integrate MPC technology directly into your applications with our comprehensive SDK
                        </p>
                      </div>
                      <div className="bg-[#121212] rounded-xl p-4 border border-[#2A2A2A]">
                        <h4 className="text-lg font-bold text-[#FF3C00] mb-3">Fully Offline</h4>
                        <p className="text-gray-400 text-sm">
                          Air-gapped deployment options for maximum security in isolated environments
                        </p>
                      </div>
                    </div>

                    {/* Second row - 2 columns */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-[#121212] rounded-xl p-4 border border-[#2A2A2A]">
                        <h4 className="text-lg font-bold text-[#FF3C00] mb-3">MPC Nodes & API</h4>
                        <p className="text-gray-400 text-sm">
                          Easy to integrate with an API to your existing application. Dynamic nodes configuration with
                          dedicated MPC infrastructure
                        </p>
                      </div>
                      <div className="bg-[#121212] rounded-xl p-4 border border-[#2A2A2A]">
                        <h4 className="text-lg font-bold text-[#FF3C00] mb-3">Key Backup</h4>
                        <p className="text-gray-400 text-sm">
                          Secure key backup and recovery solutions with enterprise-grade redundancy and disaster
                          recovery
                        </p>
                      </div>
                    </div>

                    {/* Third row - 1 column */}
                    <div className="grid grid-cols-1 gap-6">
                      <div className="bg-[#121212] rounded-xl p-4 border border-[#2A2A2A]">
                        <h4 className="text-lg font-bold text-[#FF3C00] mb-3">Software & Library Updates</h4>
                        <p className="text-gray-400 text-sm">
                          Regular software and library updates with enhanced security options, new cryptographic
                          features, and cutting-edge MPC protocol improvements
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button
                      onClick={() => setIsContactModalOpen(true)}
                      className="bg-[#FF3C00] hover:bg-[#CC3000] text-white rounded-full px-8 py-3 text-lg font-medium"
                    >
                      Schedule Demo
                    </Button>
                    <Button
                      variant="outline"
                      className="border-[#FF3C00] text-[#FF3C00] hover:bg-[#FF3C00]/10 rounded-full px-8 py-3"
                    >
                      Contact Sales
                    </Button>
                  </div>

                  <p className="text-gray-500 text-sm mt-6">
                    Pricing varies based on usage, number of nodes, and custom requirements
                  </p>
                </div>
              </div>
            </section>

            {/* CTA */}
            <section className="text-center bg-[#1E1E1E] rounded-3xl p-8 md:p-12 border border-[#2A2A2A]">
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Secure Your Enterprise?</h2>
              <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                Join leading financial institutions, exchanges, and corporations who trust Zafeguard Enterprise to
                protect their digital assets. Schedule a demo to see how our MPC technology can transform your security
                infrastructure.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={() => setIsContactModalOpen(true)}
                  className="bg-[#FF3C00] hover:bg-[#CC3000] text-white rounded-full px-8 py-3 text-lg font-medium"
                >
                  Schedule Demo
                </Button>
                <Link href="/support">
                  <Button
                    variant="outline"
                    className="border-gray-700 text-gray-300 hover:bg-[#1E1E1E] rounded-full px-8 py-3 text-lg font-medium"
                  >
                    Contact Sales
                  </Button>
                </Link>
              </div>
              <p className="text-gray-500 text-sm mt-6">
                ✅ Free consultation • ✅ Custom demo • ✅ Sandbox nodes access
              </p>
            </section>
          </div>
        </div>
      </div>
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        defaultSubject="enterprise"
        defaultMessage="I'm interested in learning more about Zafeguard Enterprise solutions for my organization. Please schedule a demo to discuss our specific requirements."
      />
    </div>
  )
}
