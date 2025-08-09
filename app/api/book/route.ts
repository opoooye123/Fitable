import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const { name, email, phone, service, date, time, message } = await request.json()

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'Fitables Beauty Bar <onboarding@resend.dev>', // Replace with your verified Resend domain email
      to: 'your-salon-email@example.com', // Replace with the actual email address where you want to receive bookings
      subject: `New Booking Request from ${name} - Fitables Beauty Bar`,
      html: `
        <div style="font-family: sans-serif; line-height: 1.6;">
          <h2 style="color: #228B22;">New Appointment Booking!</h2>
          <p>You have received a new booking request from your website.</p>
          <p><strong>Client Name:</strong> ${name}</p>
          <p><strong>Client Email:</strong> ${email}</p>
          <p><strong>Client Phone:</strong> ${phone || 'N/A'}</p>
          <p><strong>Requested Service:</strong> ${service}</p>
          <p><strong>Preferred Date:</strong> ${date}</p>
          <p><strong>Preferred Time:</strong> ${time}</p>
          <p><strong>Additional Message:</strong> ${message || 'N/A'}</p>
          <br/>
          <p>Please contact the client to confirm the booking.</p>
        </div>
      `,
    })

    if (error) {
      console.error('Resend email error:', error)
      return NextResponse.json({ message: 'Failed to send booking confirmation email.', error: error.message }, { status: 500 })
    }

    console.log('Resend email sent successfully:', data)
    return NextResponse.json({ message: 'Booking request received and email sent successfully!' }, { status: 200 })
  } catch (error) {
    console.error('Error processing booking:', error)
    return NextResponse.json({ message: 'Failed to process booking request.' }, { status: 500 })
  }
}
