"use client"
import { Button } from "@/components/ui/button"
import type React from "react"

import { X, Mail, Phone, MapPin, Send } from "lucide-react"
import { useState } from "react"
import { sendContactEmail } from "@/app/actions/contact"

// Update the component to handle form submission with the server action
interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  })
  const [status, setStatus] = useState<{
    submitting: boolean
    submitted: boolean
    success?: boolean
    message?: string
    errors?: Record<string, string[]>
  }>({
    submitting: false,
    submitted: false,
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    setStatus({ submitting: true, submitted: false })

    try {
      // Perform basic client-side validation before sending to server
      if (formData.message.length < 10) {
        setStatus({
          submitting: false,
          submitted: true,
          success: false,
          errors: {
            message: ["Message must be at least 10 characters"],
          },
          message: "Please check the form for errors",
        })
        return
      }

      const result = await sendContactEmail(formData)

      setStatus({
        submitting: false,
        submitted: true,
        success: result.success,
        message: result.message,
        errors: result.errors,
      })

      if (result.success) {
        // Reset form on success
        setFormData({
          name: "",
          email: "",
          company: "",
          subject: "",
          message: "",
        })

        // Close modal after a delay
        setTimeout(() => {
          onClose()
        }, 3000)
      }
    } catch (error) {
      console.error("Form submission error:", error)
      setStatus({
        submitting: false,
        submitted: true,
        success: false,
        message: "An unexpected error occurred. Please try again.",
      })
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })

    // Clear error state when user starts typing
    if (status.submitted) {
      setStatus({
        ...status,
        submitted: false,
      })
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <div className="relative bg-[#1E1E1E] rounded-3xl p-8 max-w-4xl w-full mx-4 border border-[#2A2A2A] shadow-2xl max-h-[90vh] overflow-y-auto">
        {/* Close button */}
        <button onClick={onClose} className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors">
          <X className="w-6 h-6" />
        </button>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">Get in Touch</h2>
              <p className="text-gray-400">
                Ready to secure your digital assets with Zafeguard? Our team is here to help you get started.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#FF3C00]/20 rounded-xl flex items-center justify-center">
                  <Mail className="w-6 h-6 text-[#FF3C00]" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Email</h3>
                  <p className="text-gray-400">support@zafeguard.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#FF3C00]/20 rounded-xl flex items-center justify-center">
                  <Phone className="w-6 h-6 text-[#FF3C00]" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Phone</h3>
                  <p className="text-gray-400">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#FF3C00]/20 rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-[#FF3C00]" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Office</h3>
                  <p className="text-gray-400">San Francisco, CA</p>
                </div>
              </div>
            </div>

            <div className="bg-[#121212] rounded-2xl p-6 border border-[#2A2A2A]">
              <h3 className="text-white font-semibold mb-3">Enterprise Solutions</h3>
              <p className="text-gray-400 text-sm mb-4">
                Looking for custom MPC solutions for your business? Our enterprise team can help with:
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Custom security implementations</li>
                <li>• Private MPC node deployment</li>
                <li>• Integration support</li>
                <li>• Compliance consulting</li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-[#121212] border ${
                      status.errors?.name ? "border-red-500" : "border-[#2A2A2A]"
                    } rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#FF3C00] transition-colors`}
                    placeholder="Your name"
                  />
                  {status.errors?.name && <p className="mt-1 text-sm text-red-500">{status.errors.name[0]}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-[#121212] border ${
                      status.errors?.email ? "border-red-500" : "border-[#2A2A2A]"
                    } rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#FF3C00] transition-colors`}
                    placeholder="your@email.com"
                  />
                  {status.errors?.email && <p className="mt-1 text-sm text-red-500">{status.errors.email[0]}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-white mb-2">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#121212] border border-[#2A2A2A] rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#FF3C00] transition-colors"
                  placeholder="Your company"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-white mb-2">
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-[#121212] border ${
                    status.errors?.subject ? "border-red-500" : "border-[#2A2A2A]"
                  } rounded-xl text-white focus:outline-none focus:border-[#FF3C00] transition-colors`}
                >
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="support">Technical Support</option>
                  <option value="enterprise">Enterprise Solutions</option>
                  <option value="partnership">Partnership</option>
                  <option value="media">Media & Press</option>
                </select>
                {status.errors?.subject && <p className="mt-1 text-sm text-red-500">{status.errors.subject[0]}</p>}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                  Message * <span className="text-xs text-gray-400">(minimum 10 characters)</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-[#121212] border ${
                    status.errors?.message ? "border-red-500" : "border-[#2A2A2A]"
                  } rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#FF3C00] transition-colors resize-none`}
                  placeholder="Tell us how we can help you..."
                />
                <div className="flex justify-between mt-1">
                  <div>
                    {status.errors?.message && <p className="text-sm text-red-500">{status.errors.message[0]}</p>}
                  </div>
                  <div className={`text-xs ${formData.message.length < 10 ? "text-red-400" : "text-gray-400"}`}>
                    {formData.message.length}/10+ characters
                  </div>
                </div>
              </div>

              {status.submitted && (
                <div
                  className={`p-4 rounded-xl ${status.success ? "bg-green-500/20 text-green-400" : "bg-red-500/20 text-red-400"}`}
                >
                  <div className="flex items-start gap-2">
                    {status.success && status.message?.includes("Demo:") && (
                      <div className="flex-shrink-0 w-5 h-5 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold mt-0.5">
                        ℹ
                      </div>
                    )}
                    <div>
                      {status.message}
                      {status.success && status.message?.includes("Demo:") && (
                        <p className="text-xs text-green-300 mt-1">
                          This is a preview environment. In production, emails will be sent via your configured SMTP
                          server.
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              )}

              <Button
                type="submit"
                disabled={status.submitting}
                className="w-full bg-[#FF3C00] hover:bg-[#CC3000] text-white rounded-xl py-3 flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {status.submitting ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-2 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
