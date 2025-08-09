import BookingForm from '@/components/booking-form'
import Image from 'next/image'

export default function BookAppointmentPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-160px)] py-12 px-4 bg-fitable-green-50">
      <div className="max-w-3xl w-full space-y-8 text-center">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-fitable-green-800">
          Book Your Appointment
        </h1>
        <p className="text-lg md:text-xl text-fitable-green-600">
          Schedule your visit to Fitables Beauty Bar and experience our premium spa, salon, and skincare services.
        </p>
      </div>
      <div className="mt-10 w-full max-w-2xl">
        <BookingForm />
      </div>
    </div>
  )
}
