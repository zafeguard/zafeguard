import Image from "next/image"
import { CheckCircle2 } from "lucide-react"

export function ComparisonTableSection() {
  return (
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
  )
}
