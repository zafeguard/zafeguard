import { Shield, Lock, Smartphone, Key, Wallet } from "lucide-react"

export function FeaturesSection() {
  return (
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
  )
}
