import Image from "next/image"

export function HowItWorksSection() {
  return (
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
  )
}
