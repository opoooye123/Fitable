'use server'

import { revalidatePath } from 'next/cache'

export async function submitBooking(prevState: any, formData: FormData) {
  const name = formData.get('name') as string
  const email = formData.get('email') as string
  const phone = formData.get('phone') as string
  const service = formData.get('service') as string
  const date = formData.get('date') as string
  const time = formData.get('time') as string
  const message = formData.get('message') as string

  // Basic validation
  if (!name || !email || !service || !date || !time) {
    return { success: false, message: 'Please fill in all required fields.' }
  }

  try {
    // In a real application, you would send this data to your backend
    // or directly to an email service like Resend.
    // For this example, we'll call a local API route.

    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/book`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, phone, service, date, time, message }),
    })

    const result = await response.json()

    if (!response.ok) {
      throw new Error(result.message || 'Failed to submit booking.')
    }

    revalidatePath('/book') // Revalidate the booking page if needed

    return { success: true, message: result.message || 'Booking submitted successfully! We will contact you shortly.' }
  } catch (error: any) {
    console.error('Booking submission error:', error)
    return { success: false, message: error.message || 'An unexpected error occurred during booking.' }
  }
}
