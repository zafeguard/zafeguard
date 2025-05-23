interface ContactFormEmailProps {
  name: string
  email: string
  company?: string
  subject: string
  message: string
  timestamp: string
}

export function ContactFormEmailTemplate({ name, email, company, subject, message, timestamp }: ContactFormEmailProps) {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        maxWidth: "600px",
        margin: "0 auto",
        padding: "20px",
        backgroundColor: "#f9f9f9",
      }}
    >
      <div style={{ backgroundColor: "#1E1E1E", padding: "30px", borderRadius: "12px", color: "white" }}>
        <div style={{ textAlign: "center", marginBottom: "30px" }}>
          <h1 style={{ color: "#FF3C00", margin: "0", fontSize: "24px" }}>New Contact Form Submission</h1>
        </div>

        <div style={{ backgroundColor: "#121212", padding: "20px", borderRadius: "8px", marginBottom: "20px" }}>
          <h2 style={{ color: "#FF3C00", marginTop: "0", fontSize: "18px" }}>Contact Information</h2>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <tr>
              <td style={{ padding: "8px 0", color: "#ccc", fontWeight: "bold", width: "100px" }}>Name:</td>
              <td style={{ padding: "8px 0", color: "white" }}>{name}</td>
            </tr>
            <tr>
              <td style={{ padding: "8px 0", color: "#ccc", fontWeight: "bold" }}>Email:</td>
              <td style={{ padding: "8px 0", color: "white" }}>{email}</td>
            </tr>
            <tr>
              <td style={{ padding: "8px 0", color: "#ccc", fontWeight: "bold" }}>Company:</td>
              <td style={{ padding: "8px 0", color: "white" }}>{company || "Not provided"}</td>
            </tr>
            <tr>
              <td style={{ padding: "8px 0", color: "#ccc", fontWeight: "bold" }}>Subject:</td>
              <td style={{ padding: "8px 0", color: "white" }}>{subject}</td>
            </tr>
          </table>
        </div>

        <div style={{ backgroundColor: "#121212", padding: "20px", borderRadius: "8px" }}>
          <h2 style={{ color: "#FF3C00", marginTop: "0", fontSize: "18px" }}>Message</h2>
          <div style={{ color: "white", lineHeight: "1.6", whiteSpace: "pre-wrap" }}>{message}</div>
        </div>

        <div style={{ marginTop: "30px", paddingTop: "20px", borderTop: "1px solid #2A2A2A", textAlign: "center" }}>
          <p style={{ color: "#888", fontSize: "12px", margin: "0" }}>
            This email was sent from the Zafeguard contact form at {timestamp}
          </p>
        </div>
      </div>
    </div>
  )
}
