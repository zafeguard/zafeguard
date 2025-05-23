"use client"

import { useState, useEffect } from "react"

export function TestimonialsSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const testimonials = [
    {
      quote:
        "The dual-app approach is genius. I love how Vault handles all the security while Wallet gives me a beautiful interface for managing my crypto.",
      author: "Alex",
      role: "Crypto Enthusiast",
    },
    {
      quote:
        "After my friend lost $10,000 in a hack, I switched to Zafeguard. The MPC technology gives me peace of mind that my keys are truly secure.",
      author: "Sarah",
      role: "Long-term Investor",
    },
    {
      quote:
        "I'm not tech-savvy, but Zafeguard made crypto security simple. The recovery phrase feature in Vault saved me when I lost my phone!",
      author: "Michael",
      role: "New to Crypto",
    },
    {
      quote:
        "As a DeFi trader, I need fast and secure transactions. Zafeguard's MPC signing is lightning fast and I never worry about my private keys being compromised.",
      author: "Emma",
      role: "DeFi Trader",
    },
    {
      quote:
        "Our company chose Zafeguard for treasury management. The enterprise features and multi-device authorization give us the security we need for large transactions.",
      author: "David",
      role: "CFO, Tech Startup",
    },
    {
      quote:
        "I've tried many wallets, but Zafeguard's user experience is unmatched. The seamless integration between Wallet and Vault makes managing my portfolio effortless.",
      author: "Lisa",
      role: "Portfolio Manager",
    },
  ]

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % Math.ceil(testimonials.length / 3))
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(interval)
  }, [testimonials.length])

  // Calculate which testimonials to show based on current slide
  const getVisibleTestimonials = () => {
    const startIndex = currentSlide * 3
    return testimonials.slice(startIndex, startIndex + 3)
  }

  const totalSlides = Math.ceil(testimonials.length / 3)

  return (
    <section className="py-20 bg-[#121212] overflow-hidden">
      <div className="container px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              What people are <span className="text-[#FF3C00]">saying</span>
            </h2>
            <p className="text-xl text-gray-400">Real stories from our community</p>
          </div>

          <div className="relative">
            {/* Testimonials Container */}
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{
                  transform: `translateX(-${currentSlide * 100}%)`,
                }}
              >
                {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                  <div key={slideIndex} className="w-full flex-shrink-0">
                    <div className="grid md:grid-cols-3 gap-8">
                      {testimonials.slice(slideIndex * 3, slideIndex * 3 + 3).map((testimonial, i) => (
                        <div
                          key={`${slideIndex}-${i}`}
                          className="bg-[#1E1E1E] rounded-3xl p-8 border border-[#2A2A2A] card-hover scroll-animate"
                        >
                          <div className="flex mb-4">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <svg
                                key={star}
                                className="w-5 h-5 text-[#FF9D00] fill-current"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                          </div>
                          <p className="text-gray-300 mb-6">"{testimonial.quote}"</p>
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-[#FF3C00] text-white rounded-full flex items-center justify-center font-bold">
                              {testimonial.author[0]}
                            </div>
                            <div>
                              <p className="font-semibold text-white">{testimonial.author}</p>
                              <p className="text-sm text-gray-400">{testimonial.role}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center mt-8 gap-2">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide ? "bg-[#FF3C00] scale-110" : "bg-gray-600 hover:bg-gray-500"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={() => setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-[#1E1E1E] border border-[#2A2A2A] rounded-full flex items-center justify-center text-white hover:bg-[#FF3C00] hover:border-[#FF3C00] transition-all duration-300 opacity-0 md:opacity-100"
              aria-label="Previous testimonials"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => setCurrentSlide((prev) => (prev + 1) % totalSlides)}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-[#1E1E1E] border border-[#2A2A2A] rounded-full flex items-center justify-center text-white hover:bg-[#FF3C00] hover:border-[#FF3C00] transition-all duration-300 opacity-0 md:opacity-100"
              aria-label="Next testimonials"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Auto-slide indicator */}
          <div className="text-center mt-6">
            <p className="text-xs text-gray-500">
              Auto-advancing every 5 seconds • Click dots or arrows to navigate manually
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
