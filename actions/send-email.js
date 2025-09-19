"use server"

import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendContactEmail(formData) {
  try {
    const firstName = formData.get("firstName")
    const lastName = formData.get("lastName")
    const email = formData.get("email")
    const subject = formData.get("subject")
    const message = formData.get("message")

    const { data, error } = await resend.emails.send({
      from: "Event Door Contact <help@eventdoor.in>",
      to: ["glbhadane25@gmail.com"],
      subject: `EventDoor Contact Form: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb;">New Contact Form Submission</h2>
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${firstName} ${lastName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Message:</strong></p>
            <p style="background-color: white; padding: 15px; border-radius: 4px; border-left: 4px solid #2563eb;">${message}</p>
          </div>
          <p style="color: #64748b; font-size: 14px;">This email was sent from the Event Door contact form.</p>
        </div>
      `,
    })

    if (error) {
      console.error("Email error:", error)
      return { success: false, message: "Failed to send email. Please try again." }
    }

    return { success: true, message: "Thank you for your message! We'll get back to you within 24 hours." }
  } catch (error) {
    console.error("Server error:", error)
    return { success: false, message: "Something went wrong. Please try again later." }
  }
}
