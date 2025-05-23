"use client"

import { useEffect } from "react"

export function ParallaxEffect() {
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY

      // Apply parallax effect to backgrounds
      document.querySelectorAll(".parallax-bg").forEach((element) => {
        const speed = Number.parseFloat(element.getAttribute("data-speed") || "0.15")
        const yPos = -(scrollY * speed)
        element.setAttribute("style", `transform: translateY(${yPos}px)`)
      })

      // Apply parallax effect to elements
      document.querySelectorAll(".parallax-element").forEach((element) => {
        const rect = element.getBoundingClientRect()
        const elementCenter = rect.top + rect.height / 2
        const windowCenter = window.innerHeight / 2
        const distanceFromCenter = elementCenter - windowCenter
        const speed = Number.parseFloat(element.getAttribute("data-speed") || "0.1")

        const yPos = -(distanceFromCenter * speed)
        element.setAttribute("style", `transform: translateY(${yPos}px)`)
      })

      // Scroll-triggered animations
      document.querySelectorAll(".scroll-animate").forEach((element) => {
        const rect = element.getBoundingClientRect()
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0

        if (isVisible) {
          element.classList.add("animate-in")
        }
      })

      // Floating animations based on scroll
      document.querySelectorAll(".float-on-scroll").forEach((element) => {
        const rect = element.getBoundingClientRect()
        const scrollProgress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / window.innerHeight))
        const floatAmount = Math.sin(scrollProgress * Math.PI * 2) * 10
        element.setAttribute("style", `transform: translateY(${floatAmount}px)`)
      })
    }

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll)

    // Initial call to set positions
    handleScroll()

    // Clean up
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return null
}
