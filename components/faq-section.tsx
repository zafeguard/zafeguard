export function FaqSection() {
  return (
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
  )
}
