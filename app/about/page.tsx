import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function About() {
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
            <h1 className="text-4xl font-bold text-white mb-4">About Zafeguard</h1>
            <p className="text-gray-400">Revolutionizing crypto security with next-generation MPC technology</p>
          </div>

          <div className="space-y-8 text-gray-300">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
              <p className="mb-4">
                At Zafeguard, we believe that everyone deserves access to secure, user-friendly cryptocurrency
                management. Our mission is to eliminate the trade-off between security and usability that has plagued
                the crypto industry for years. We're building the future of digital asset protection through innovative
                Multi-Party Computation (MPC) technology that keeps your crypto safe without sacrificing convenience.
              </p>
              <p>
                Founded by a team of cryptography experts and blockchain veterans, Zafeguard was born from the
                frustration of watching countless users lose their digital assets due to inadequate security measures.
                We set out to create a solution that would protect users from the most common causes of crypto loss:
                device theft, hacking, and human error.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Our Technology</h2>
              <p className="mb-4">
                Zafeguard's dual-app architecture represents a breakthrough in cryptocurrency security. Our system
                consists of two complementary applications: Zafeguard Wallet for everyday crypto management and
                Zafeguard Vault for secure key storage and transaction authorization.
              </p>
              <p className="mb-4">
                At the heart of our technology is Multi-Party Computation (MPC), a cryptographic protocol that allows
                multiple parties to jointly compute a function over their inputs while keeping those inputs private. In
                practical terms, this means your private keys are never stored in one place or reconstructed during
                transactions, making them virtually impossible to steal.
              </p>
              <p>
                Our MPC implementation supports multiple elliptic curves including SECP256k1 (Bitcoin/Ethereum), ED25519
                (Solana), and NIST curves (P-256, P-384, P-512), ensuring compatibility with virtually every blockchain
                network while maintaining the highest security standards.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Why We're Different</h2>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-[#1E1E1E] rounded-xl p-6 border border-[#2A2A2A]">
                  <h3 className="text-lg font-bold text-[#FF3C00] mb-3">No Single Point of Failure</h3>
                  <p className="text-sm">
                    Unlike traditional wallets that store your private key in one location, Zafeguard distributes key
                    shares across multiple devices, eliminating single points of failure.
                  </p>
                </div>
                <div className="bg-[#1E1E1E] rounded-xl p-6 border border-[#2A2A2A]">
                  <h3 className="text-lg font-bold text-[#FF3C00] mb-3">User-Friendly Security</h3>
                  <p className="text-sm">
                    We've made enterprise-grade security accessible to everyone. No technical expertise required – just
                    download both apps and follow our simple setup process.
                  </p>
                </div>
                <div className="bg-[#1E1E1E] rounded-xl p-6 border border-[#2A2A2A]">
                  <h3 className="text-lg font-bold text-[#FF3C00] mb-3">Always Recoverable</h3>
                  <p className="text-sm">
                    Even if you lose devices, your crypto remains accessible through our innovative recovery system that
                    combines MPC key shares with optional recovery phrases.
                  </p>
                </div>
                <div className="bg-[#1E1E1E] rounded-xl p-6 border border-[#2A2A2A]">
                  <h3 className="text-lg font-bold text-[#FF3C00] mb-3">Future-Proof</h3>
                  <p className="text-sm">
                    Our MPC technology is designed to be quantum-resistant and adaptable to future cryptographic
                    standards, protecting your assets for years to come.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Our Team</h2>
              <p className="mb-4">
                Zafeguard was founded by a diverse team of cryptographers, blockchain engineers, and security experts
                who have collectively spent decades working on some of the most challenging problems in digital
                security. Our team includes former researchers from leading universities, veterans from top-tier
                technology companies, and pioneers in the cryptocurrency space.
              </p>
              <p className="mb-4">
                What unites us is a shared vision: making cryptocurrency as secure and easy to use as traditional
                banking, while preserving the decentralized principles that make crypto revolutionary. We're backed by
                leading venture capital firms and advised by some of the most respected names in cryptography and
                blockchain technology.
              </p>
              <p>
                Our commitment to open-source development and transparency means that our security protocols are
                regularly audited by independent security firms, and we actively contribute to the broader cryptographic
                research community.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Our Values</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-[#FF3C00] rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">Security First</h3>
                    <p>
                      Every decision we make is evaluated through the lens of security. We never compromise on
                      protecting our users' assets.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-[#FF3C00] rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">User-Centric Design</h3>
                    <p>
                      Complex security shouldn't mean complex user experience. We make advanced cryptography accessible
                      to everyone.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-[#FF3C00] rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">Transparency</h3>
                    <p>
                      We believe in open development, regular security audits, and clear communication about how our
                      technology works.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-[#FF3C00] rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">Innovation</h3>
                    <p>
                      We're constantly pushing the boundaries of what's possible in cryptocurrency security and user
                      experience.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Join Our Mission</h2>
              <p className="mb-4">
                Whether you're a cryptocurrency newcomer or a seasoned trader, Zafeguard is designed to protect your
                digital assets while making crypto management effortless. Join thousands of users who have already made
                the switch to next-generation security.
              </p>
              <p>
                Ready to experience the future of cryptocurrency security? Download Zafeguard Wallet and Vault today and
                discover how MPC technology can transform the way you think about crypto safety.
              </p>
              <div className="mt-6 p-6 bg-[#1E1E1E] rounded-xl border border-[#2A2A2A]">
                <p className="text-center text-gray-400 mb-4">
                  Have questions about our technology or want to learn more about MPC?
                </p>
                <div className="flex flex-col md:flex-row gap-4 justify-center">
                  <Link href="/how-mpc-works" className="w-full">
                    <Button className="bg-[#FF3C00] hover:bg-[#CC3000] text-white rounded-full px-6 py-2 w-full transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg">
                      Learn About MPC
                    </Button>
                  </Link>
                  <Link href="/support" className="w-full">
                    <Button
                      variant="outline"
                      className="border-[#FF3C00] text-[#FF3C00] hover:bg-[#FF3C00]/10 rounded-full px-6 py-2 w-full transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg"
                    >
                      Contact Support
                    </Button>
                  </Link>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
