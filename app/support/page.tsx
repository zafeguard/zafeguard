"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Mail, Book } from "lucide-react"
import { ContactModal } from "@/components/contact-modal"

export default function Support() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

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
            <h1 className="text-4xl font-bold text-white mb-4">Support Center</h1>
            <p className="text-gray-400">Get help with Zafeguard Wallet and Vault</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-[#1E1E1E] rounded-2xl p-6 border border-[#2A2A2A]">
              <Mail className="w-8 h-8 text-[#FF3C00] mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">Email Support</h3>
              <p className="text-gray-400 text-sm mb-4">Get help via email within 24 hours</p>
              <Button onClick={() => setIsContactModalOpen(true)} className="w-full bg-[#FF3C00] hover:bg-[#CC3000]">
                Contact Support
              </Button>
            </div>

            <div className="bg-[#1E1E1E] rounded-2xl p-6 border border-[#2A2A2A]">
              <Book className="w-8 h-8 text-[#FF3C00] mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">Documentation</h3>
              <p className="text-gray-400 text-sm mb-4">Browse our help articles</p>
              <Button variant="outline" className="w-full border-gray-600 text-gray-500 cursor-not-allowed" disabled>
                Coming Soon
              </Button>
            </div>
          </div>

          <div className="space-y-8 text-gray-300">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {[
                  {
                    question: "How do I set up my first wallet?",
                    answer:
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Download both Zafeguard Wallet and Vault from your app store, then follow the setup wizard.",
                  },
                  {
                    question: "What should I do if I forgot my password?",
                    answer:
                      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Use the recovery phrase feature in Zafeguard Vault to restore access.",
                  },
                  {
                    question: "How do I add a new device to my MPC network?",
                    answer:
                      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Open Zafeguard Vault and navigate to device management settings.",
                  },
                ].map((faq, i) => (
                  <div key={i} className="bg-[#1E1E1E] rounded-xl p-4 border border-[#2A2A2A]">
                    <h3 className="text-white font-semibold mb-2">{faq.question}</h3>
                    <p className="text-gray-400 text-sm">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Contact Information</h2>
              <p className="mb-4">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Our support team is available Monday through Friday, 9 AM to 6 PM PST.
              </p>
              <p>
                Email:{" "}
                <a href="mailto:support@zafeguard.com" className="text-[#FF3C00] hover:underline">
                  support@zafeguard.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>
      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
    </div>
  )
}
