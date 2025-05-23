"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"

interface EnterpriseSectionProps {
  onOpenContactModal: () => void
}

export function EnterpriseSection({ onOpenContactModal }: EnterpriseSectionProps) {
  return (
    <section className="py-20 bg-[#1A1A1A]">
      <div className="container px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 scroll-animate">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold text-white">
                  Enterprise-grade <span className="text-[#FF3C00]">MPC solutions</span>
                </h2>
                <p className="text-xl text-gray-400">
                  Custom security solutions for businesses requiring enhanced protection and compliance.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  "Private MPC nodes for your organization",
                  "Custom security policies and compliance",
                  "Integration with existing systems",
                  "24/7 dedicated support team",
                  "Advanced audit and reporting tools",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 scroll-animate">
                    <div className="w-2 h-2 bg-[#FF3C00] rounded-full flex-shrink-0"></div>
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>

              <Button
                onClick={onOpenContactModal}
                className="bg-[#FF3C00] hover:bg-[#CC3000] text-white rounded-full px-6 py-3 hover-lift"
              >
                Contact our team
              </Button>
            </div>

            <div className="relative scroll-animate">
              <div
                className="bg-[#121212] rounded-3xl p-8 shadow-lg border border-[#2A2A2A] parallax-element"
                data-speed="0.02"
              >
                <Image
                  src="/images/enterprise-dashboard.png"
                  alt="Enterprise Dashboard"
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
