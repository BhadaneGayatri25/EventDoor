import nodemailer from "nodemailer"

export async function POST(req) {
  try {
    console.log("[v0] Contact form submission received")
    const body = await req.json()
    const { firstName, lastName, email, subject, message } = body

    console.log("[v0] Form data:", { firstName, lastName, email, subject })

    // Check if environment variables are set
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error("[v0] Missing email environment variables")
      return new Response(
        JSON.stringify({
          success: false,
          message: "Email configuration is missing. Please contact the administrator.",
        }),
        {
          status: 500,
          headers: { "Content-Type": "application/json" },
        },
      )
    }

    console.log("[v0] Creating email transporter")
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, // This should be an App Password, not your regular Gmail password
      },
    })

    console.log("[v0] Sending email...")
    await transporter.sendMail({
      from: `"${firstName} ${lastName}" <${process.env.EMAIL_USER}>`, // Use your email as sender
      replyTo: email, // Set reply-to as the form submitter's email
      to: "help@eventdoor.in",
      subject: `Contact Form: ${subject}`,
      text: `
Name: ${firstName} ${lastName}
Email: ${email}
Subject: ${subject}

Message:
${message}
      `,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <h4>Message:</h4>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    })

    console.log("[v0] Email sent successfully")
    return new Response(
      JSON.stringify({
        success: true,
        message: "Thank you for your message! We'll get back to you within 24 hours.",
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      },
    )
  } catch (error) {
    console.error("[v0] Error sending email:", error)
    return new Response(
      JSON.stringify({
        success: false,
        message: `Failed to send message: ${error.message}. Please try again or contact us directly.`,
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      },
    )
  }
}
