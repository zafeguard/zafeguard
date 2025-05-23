// Email service utility for better organization
export interface EmailData {
  to: string
  from: string
  replyTo: string
  subject: string
  text: string
  html: string
}

export async function sendEmail(emailData: EmailData): Promise<{ success: boolean; error?: string }> {
  try {
    // Check if we're in a preview environment
    const isPreview =
      process.env.NODE_ENV !== "production" || process.env.VERCEL_ENV === "preview" || !process.env.SMTP_HOST

    if (isPreview) {
      // Mock email sending for preview
      console.log("📧 Mock Email Service:")
      console.log("To:", emailData.to)
      console.log("From:", emailData.from)
      console.log("Subject:", emailData.subject)
      console.log("Text:", emailData.text)

      // Simulate delay
      await new Promise((resolve) => setTimeout(resolve, 1000))

      return { success: true }
    }

    // Real email sending for production
    const nodemailer = await import("nodemailer")

    const transporter = nodemailer.default.createTransporter({
      host: process.env.SMTP_HOST!,
      port: Number.parseInt(process.env.SMTP_PORT || "587"),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER!,
        pass: process.env.SMTP_PASSWORD!,
      },
    })

    await transporter.sendMail(emailData)
    return { success: true }
  } catch (error) {
    console.error("Email service error:", error)
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error",
    }
  }
}
