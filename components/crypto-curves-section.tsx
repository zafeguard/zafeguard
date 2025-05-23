import { Code, Zap, Shield, Globe, Lock, Key } from "lucide-react"

export function CryptoCurvesSection() {
  return (
    <section className="py-20 bg-[#1A1A1A]">
      <div className="container px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Supported <span className="text-[#FF3C00]">Cryptographic Curves</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Zafeguard Vault supports multiple elliptic curves for maximum compatibility and security across different
              blockchain networks.
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
  )
}
