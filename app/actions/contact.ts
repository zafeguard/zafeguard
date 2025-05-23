"use server"

import { Resend } from "resend"
import { z } from "zod"

// Form validation schema
const contactFormSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email({ message: "Valid email is required" }),
  company: z.string().optional(),
  subject: z.string().min(1, { message: "Subject is required" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
})

type ContactFormData = z.infer<typeof contactFormSchema>

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY)

// Mock email service for preview/development
async function mockEmailService(formData: ContactFormData) {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1500))

  // Log the email data (in a real app, this would be sent to your email service)
  console.log("📧 Mock Email Sent via Resend:")
  console.log("To: support@zafeguard.com")
  console.log("From:", formData.email)
  console.log("Subject:", `Contact Form: ${formData.subject}`)
  console.log("Message:", formData.message)

  return { success: true }
}

// Real email service using Resend
async function sendEmailWithResend(formData: ContactFormData) {
  try {
    const { data, error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || "Zafeguard <noreply@zafeguard.com>",
      to: ["support@zafeguard.com"],
      replyTo: formData.email,
      subject: `Contact Form: ${formData.subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
          <div style="background-color: #1E1E1E; padding: 30px; border-radius: 12px; color: white;">
            <div style="text-align: center; margin-bottom: 30px;">
              <h1 style="color: #FF3C00; margin: 0; font-size: 24px;">New Contact Form Submission</h1>
            </div>
            
            <div style="background-color: #121212; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <h2 style="color: #FF3C00; margin-top: 0; font-size: 18px;">Contact Information</h2>
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px 0; color: #ccc; font-weight: bold; width: 100px;">Name:</td>
                  <td style="padding: 8px 0; color: white;">${formData.name}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #ccc; font-weight: bold;">Email:</td>
                  <td style="padding: 8px 0; color: white;">${formData.email}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #ccc; font-weight: bold;">Company:</td>
                  <td style="padding: 8px 0; color: white;">${formData.company || "Not provided"}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #ccc; font-weight: bold;">Subject:</td>
                  <td style="padding: 8px 0; color: white;">${formData.subject}</td>
                </tr>
              </table>
            </div>
            
            <div style="background-color: #121212; padding: 20px; border-radius: 8px;">
              <h2 style="color: #FF3C00; margin-top: 0; font-size: 18px;">Message</h2>
              <div style="color: white; line-height: 1.6; white-space: pre-wrap;">${formData.message}</div>
            </div>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #2A2A2A; text-align: center;">
              <p style="color: #888; font-size: 12px; margin: 0;">
                This email was sent from the Zafeguard contact form at ${new Date().toLocaleString()}
              </p>
            </div>
          </div>
        </div>
      `,
      text: `
New Contact Form Submission

Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company || "Not provided"}
Subject: ${formData.subject}

Message:
${formData.message}

---
Sent from Zafeguard contact form at ${new Date().toLocaleString()}
      `,
    })

    if (error) {
      console.error("Resend error:", error)
      throw new Error(error.message || "Failed to send email")
    }

    console.log("Email sent successfully:", data)
    return { success: true, data }
  } catch (error) {
    console.error("Resend email service error:", error)
    throw error
  }
}

export async function sendContactEmail(formData: ContactFormData) {
  try {
    // Validate form data
    const validatedData = contactFormSchema.parse(formData)

    // Detect if we're in a preview/development environment or if Resend is not configured
    const isPreview = !process.env.RESEND_API_KEY || process.env.NODE_ENV !== "production"

    let emailResult
    if (isPreview) {
      // Use mock service in preview/development
      emailResult = await mockEmailService(validatedData)
    } else {
      // Use Resend in production
      emailResult = await sendEmailWithResend(validatedData)
    }

    if (emailResult.success) {
      return {
        success: true,
        message: isPreview
          ? "Demo: Your message would be sent to support@zafeguard.com using Resend in production!"
          : "Your message has been sent successfully!",
      }
    } else {
      throw new Error("Email service failed")
    }
  } catch (error) {
    console.error("Error sending contact email:", error)

    if (error instanceof z.ZodError) {
      // Format validation errors in a more structured way
      const fieldErrors: Record<string, string[]> = {}

      error.errors.forEach((err) => {
        const field = err.path[0] as string
        if (!fieldErrors[field]) {
          fieldErrors[field] = []
        }
        fieldErrors[field].push(err.message)
      })

      return {
        success: false,
        message: "Please check the form for errors",
        errors: fieldErrors,
      }
    }

    return {
      success: false,
      message: "Failed to send your message. Please try again later.",
    }
  }
}
