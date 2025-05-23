import { Resend } from "resend"

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY)

export interface EmailOptions {
  to: string | string[]
  from?: string
  replyTo?: string
  subject: string
  html: string
  text?: string
}

export async function sendEmail(options: EmailOptions) {
  try {
    const { data, error } = await resend.emails.send({
      from: options.from || process.env.RESEND_FROM_EMAIL || "Zafeguard <noreply@zafeguard.com>",
      to: Array.isArray(options.to) ? options.to : [options.to],
      replyTo: options.replyTo,
      subject: options.subject,
      html: options.html,
      text: options.text,
    })

    if (error) {
      console.error("Resend error:", error)
      throw new Error(error.message || "Failed to send email")
    }

    return { success: true, data }
  } catch (error) {
    console.error("Email sending error:", error)
    throw error
  }
}

export { resend }
