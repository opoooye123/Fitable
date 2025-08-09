import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const { name, email, phone, service, date, time, message } = await request.json()

    // Send email using Resend's default domain
    const { data, error } = await resend.emails.send({
      from: 'Fitables Beauty Bar <onboarding@resend.dev>', // No domain verification needed
      to: 'amnotpissed@gmail.com', // Replace with your real email
      subject: `New Booking Request from ${name}`,
      html: `
        <div style="font-family: sans-serif; line-height: 1.6;">
          <h2 style="color: #228B22;">New Appointment Booking!</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
          <p><strong>Service:</strong> ${service}</p>
          <p><strong>Date:</strong> ${date}</p>
          <p><strong>Time:</strong> ${time}</p>
          <p><strong>Message:</strong> ${message || 'N/A'}</p>
          <br/>
          <p>Please reply to confirm the booking.</p>
        </div>
      `,
    })

    if (error) {
      console.error('Resend email error:', error)
      return NextResponse.json({ message: 'Failed to send booking email.', error: error.message }, { status: 500 })
    }

    console.log('Resend email sent:', data)
    return NextResponse.json({ message: 'Booking request sent successfully!' }, { status: 200 })
  } catch (error) {
    console.error('Error:', error)
    return NextResponse.json({ message: 'Error processing booking request.' }, { status: 500 })
  }
}
