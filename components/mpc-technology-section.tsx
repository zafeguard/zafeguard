import Image from "next/image"
import { Button } from "@/components/ui/button"

export function MpcTechnologySection() {
  return (
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
                  Zafeguard Vault uses MPC technology to split your private keys across multiple devices. Think of it
                  like having multiple locks on your safe - even if someone breaks one, your crypto stays protected.
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
  )
}
