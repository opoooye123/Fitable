"use client"

import { useState } from "react"
import { useSearchParams } from "next/navigation"
import { useActionState } from "react-dom"

export default function BookingForm() {
  const searchParams = useSearchParams()
  const selectedService = searchParams.get("service") || ""
  const [formState, formAction, isPending] = useActionState(
    async (prevState: any, formData: FormData) => {
      // Here you would send form data to your API route
      const res = await fetch("/api/book", {
        method: "POST",
        body: formData,
      })
      if (!res.ok) {
        return { error: "Something went wrong. Please try again." }
      }
      return { success: "Your appointment is booked!" }
    },
    { success: "", error: "" } // initial state
  )

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

  return (
    <form action={formAction} className="space-y-4">
      {formState.success && (
        <p className="text-green-600">{formState.success}</p>
      )}
      {formState.error && (
        <p className="text-red-600">{formState.error}</p>
      )}

      <div>
        <label className="block text-sm font-medium mb-1">Name</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border rounded px-3 py-2 w-full"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Email</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border rounded px-3 py-2 w-full"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Service</label>
        <input
          type="text"
          name="service"
          defaultValue={selectedService}
          className="border rounded px-3 py-2 w-full"
        />
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="bg-fitable-green-600 text-white px-4 py-2 rounded hover:bg-fitable-green-700"
      >
        {isPending ? "Booking..." : "Book Appointment"}
      </button>
    </form>
  )
}
