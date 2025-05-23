"use client"

import { useState } from "react"
import { ParallaxEffect } from "@/components/parallax-effect"
import { DownloadModal } from "@/components/download-modal"
import { ContactModal } from "@/components/contact-modal"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { ProductsSection } from "@/components/products-section"
import { CryptoCurvesSection } from "@/components/crypto-curves-section"
import { FeaturesSection } from "@/components/features-section"
import { MpcTechnologySection } from "@/components/mpc-technology-section"
import { MpcBeyondSection } from "@/components/mpc-beyond-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { EnterpriseSection } from "@/components/enterprise-section"
import { FaqSection } from "@/components/faq-section"
import { FinalCtaSection } from "@/components/final-cta-section"
import { ComparisonTableSection } from "@/components/comparison-table-section"

export default function LandingPage() {
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false)
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  return (
    <div className="flex min-h-screen flex-col bg-[#121212] text-white">
      <ParallaxEffect />
      <Header onOpenDownloadModal={() => setIsDownloadModalOpen(true)} />

      <main className="flex-1">
        <HeroSection onOpenDownloadModal={() => setIsDownloadModalOpen(true)} />
        <ProductsSection onOpenDownloadModal={() => setIsDownloadModalOpen(true)} />
        <CryptoCurvesSection />
        <FeaturesSection />
        <MpcTechnologySection />
        <MpcBeyondSection />
        <HowItWorksSection />
        <TestimonialsSection />
        <EnterpriseSection onOpenContactModal={() => setIsContactModalOpen(true)} />
        <FaqSection />
        <FinalCtaSection
          onOpenDownloadModal={() => setIsDownloadModalOpen(true)}
          onOpenContactModal={() => setIsContactModalOpen(true)}
        />
        <ComparisonTableSection />
      </main>

      <Footer />
      <DownloadModal isOpen={isDownloadModalOpen} onClose={() => setIsDownloadModalOpen(false)} />
      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
    </div>
  )
}
