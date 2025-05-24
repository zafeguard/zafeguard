import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Shield, Users, Key, Lock, CheckCircle2 } from "lucide-react"

export default function HowMpcWorks() {
  return (
    <div className="min-h-screen bg-[#121212] text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Link href="/">
              <Button variant="ghost" className="text-gray-400 hover:text-white mb-4">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              How <span className="text-[#FF3C00]">MPC</span> Works
            </h1>
            <p className="text-xl text-gray-400">
              Multi-Party Computation explained in simple terms - no technical jargon required
            </p>
          </div>

          <div className="space-y-12">
            {/* What is MPC */}
            <section className="bg-[#1E1E1E] rounded-3xl p-8 border border-[#2A2A2A]">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-[#FF3C00]/20 rounded-xl flex items-center justify-center">
                  <Shield className="w-6 h-6 text-[#FF3C00]" />
                </div>
                <h2 className="text-2xl font-bold text-white">What is MPC?</h2>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed mb-4">
                Think of MPC (Multi-Party Computation) like a secret recipe that's split into pieces. Instead of keeping
                your entire crypto private key in one place (like a traditional wallet), MPC splits it into multiple
                "key shares" and stores them across different devices.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Just like you need all the pieces of a recipe to cook the dish, you need multiple key shares to sign a
                transaction. This means even if someone steals one of your devices, they can't access your crypto
                because they only have part of the key.
              </p>
            </section>

            {/* Traditional vs MPC */}
            <section className="bg-[#1E1E1E] rounded-3xl p-8 border border-[#2A2A2A]">
              <h2 className="text-2xl font-bold text-white mb-6">Traditional Wallets vs. MPC Wallets</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-[#121212] rounded-2xl p-6 border border-red-500/30">
                  <h3 className="text-lg font-bold text-red-400 mb-4">Traditional Wallets</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-300">Private key stored in one place</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-300">If device is compromised, funds are at risk</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-300">Single point of failure</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-300">Lose device = potentially lose everything</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-[#121212] rounded-2xl p-6 border border-[#FF3C00]/30">
                  <h3 className="text-lg font-bold text-[#FF3C00] mb-4">MPC Wallets (Zafeguard)</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#FF3C00] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Private key split across multiple devices</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#FF3C00] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">No single device can access funds alone</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#FF3C00] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Multiple layers of security</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#FF3C00] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Lose device = funds still safe and accessible</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* How it works step by step */}
            <section className="bg-[#1E1E1E] rounded-3xl p-8 border border-[#2A2A2A]">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-[#FF3C00]/20 rounded-xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-[#FF3C00]" />
                </div>
                <h2 className="text-2xl font-bold text-white">How Zafeguard MPC Works</h2>
              </div>
              <div className="space-y-8">
                {[
                  {
                    step: 1,
                    title: "Key Generation",
                    description:
                      "When you create a wallet, Zafeguard Vault generates your private key and immediately splits it into multiple 'shares' using advanced mathematics.",
                    icon: <Key className="w-6 h-6" />,
                  },
                  {
                    step: 2,
                    title: "Distribution",
                    description:
                      "These key shares are distributed across your devices (phone, tablet, computer). Each device only knows its own piece - never the complete key.",
                    icon: <Users className="w-6 h-6" />,
                  },
                  {
                    step: 3,
                    title: "Transaction Signing",
                    description:
                      "When you want to send crypto, multiple devices work together to sign the transaction without ever revealing their individual key shares.",
                    icon: <Shield className="w-6 h-6" />,
                  },
                  {
                    step: 4,
                    title: "Secure Execution",
                    description:
                      "The transaction is signed and sent to the blockchain. Your private key was never assembled in one place, keeping it completely secure.",
                    icon: <Lock className="w-6 h-6" />,
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 bg-[#FF3C00] text-white rounded-full flex items-center justify-center font-bold text-lg">
                        {item.step}
                      </div>
                      {i < 3 && <div className="w-0.5 h-16 bg-[#2A2A2A] mt-4"></div>}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-8 h-8 bg-[#FF3C00]/20 rounded-lg flex items-center justify-center text-[#FF3C00]">
                          {item.icon}
                        </div>
                        <h3 className="text-xl font-bold text-white">{item.title}</h3>
                      </div>
                      <p className="text-gray-300 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Real-world analogy */}
            <section className="bg-[#1E1E1E] rounded-3xl p-8 border border-[#2A2A2A]">
              <h2 className="text-2xl font-bold text-white mb-6">Real-World Analogy</h2>
              <div className="bg-[#121212] rounded-2xl p-6 border border-[#2A2A2A]">
                <h3 className="text-lg font-bold text-[#FF3C00] mb-4">🏦 Think of it like a bank vault</h3>
                <p className="text-gray-300 text-lg leading-relaxed mb-4">
                  Imagine a bank vault that requires 3 different keys to open, and these keys are held by 3 different
                  people in 3 different locations. Even if a thief breaks into one location and steals one key, they
                  still can't open the vault because they need all 3 keys.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  That's exactly how MPC works with your crypto. Your private key is like the vault, and the key shares
                  are like the individual keys. No single device or person can access your funds alone - you need
                  multiple devices to "unlock" your crypto.
                </p>
              </div>
            </section>

            {/* Benefits */}
            <section className="bg-[#1E1E1E] rounded-3xl p-8 border border-[#2A2A2A]">
              <h2 className="text-2xl font-bold text-white mb-6">Why MPC is Better for You</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Peace of Mind",
                    description:
                      "Sleep better knowing that even if someone steals your phone, your crypto is still safe.",
                  },
                  {
                    title: "No Single Point of Failure",
                    description:
                      "Unlike traditional wallets, there's no single device or location that can compromise all your funds.",
                  },
                  {
                    title: "Always Accessible",
                    description:
                      "Even if you lose a device, you can still access your crypto from your other connected devices.",
                  },
                  {
                    title: "Future-Proof Security",
                    description:
                      "MPC technology is designed to be secure even against future quantum computing threats.",
                  },
                ].map((benefit, i) => (
                  <div key={i} className="bg-[#121212] rounded-2xl p-6 border border-[#2A2A2A]">
                    <h3 className="text-lg font-bold text-white mb-3">{benefit.title}</h3>
                    <p className="text-gray-300">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* CTA */}
            <section className="text-center bg-[#1E1E1E] rounded-3xl p-8 border border-[#2A2A2A]">
              <h2 className="text-2xl font-bold text-white mb-4">Ready to Experience MPC Security?</h2>
              <p className="text-gray-400 mb-6">
                Download Zafeguard Wallet and Vault to start protecting your crypto with cutting-edge MPC technology.
              </p>
              <Link href="/">
                <Button className="bg-[#FF3C00] hover:bg-[#CC3000] text-white rounded-full px-8 py-3 text-lg font-medium">
                  Get Started with Zafeguard
                </Button>
              </Link>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
