'use client'

import { useState, useEffect } from 'react'
import { useActionState } from 'react'
import { submitBooking } from '@/app/actions'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { DatePicker } from '@/components/date-picker'
import { motion } from 'framer-motion'
import { CheckCircle, XCircle, Loader2 } from 'lucide-react'
import { useSearchParams } from 'next/navigation' // Import useSearchParams

export default function BookingForm() {
  const searchParams = useSearchParams() // Get search params from URL
  const initialServiceFromUrl = searchParams.get('service') || '' // Read 'service' param

  const [state, formAction, isPending] = useActionState(submitBooking, null)
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined)
  const [selectedService, setSelectedService] = useState<string>(initialServiceFromUrl) // Initialize with URL param

  // List of all services (should match names used in servicesData on the services page)
  const services = [
    "Swedish Massage", "Deep Tissue Massage", "Aromatherapy Massage", "Reflexology",
    "Back Massage", "Soap Massage", "Head Massage", "Thai Foot Massage",
    "Full Body Massage", "Soapy Massage", "Hot Stone Massage", "Double-Handed Massage",
    "Wood Therapy", "Cavitation Treatment", "Basic Facial", "Acne Facial",
    "Fruit Facial", "Brightening Facial", "Derma Planing", "Skin Tag Removal",
    "Microdermabrasion", "Chemical Peel", "Body Exfoliation", "Whitening Exfoliation",
    "Kamila Whitening Polish", "Intensive Coffee Scrub", "Moroccan Bath", "Steam Bath",
    "Body Wrap", "Turmeric Body Polish", "Traditional Hammam Bath", "Basic Pedicure",
    "Manicure", "Jelly Pedicure", "Fruit Pedicure", "Gel Polish", "Fixing of Extension",
    "Fixing of Closure", "Fixing of Frontal", "Fixing of Customized Frontal",
    "Dark Root Coloring", "Relaxing", "Relaxing with Client Kit", "Steaming"
  ]

  const formVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, staggerChildren: 0.1 } },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <motion.form
      action={formAction}
      initial="hidden"
      animate="visible"
      variants={formVariants}
      className="space-y-6 p-6 bg-fitable-white rounded-lg shadow-xl border border-fitable-green-100"
    >
      <motion.div variants={itemVariants}>
        <Label htmlFor="name" className="text-fitable-green-700">Full Name <span className="text-red-500">*</span></Label>
        <Input id="name" name="name" placeholder="John Doe" required disabled={isPending} />
      </motion.div>

      <motion.div variants={itemVariants}>
        <Label htmlFor="email" className="text-fitable-green-700">Email <span className="text-red-500">*</span></Label>
        <Input id="email" name="email" type="email" placeholder="john.doe@example.com" required disabled={isPending} />
      </motion.div>

      <motion.div variants={itemVariants}>
        <Label htmlFor="phone" className="text-fitable-green-700">Phone Number</Label>
        <Input id="phone" name="phone" type="tel" placeholder="+123 456 7890" disabled={isPending} />
      </motion.div>

      <motion.div variants={itemVariants}>
        <Label htmlFor="service" className="text-fitable-green-700">Desired Service <span className="text-red-500">*</span></Label>
        <Select name="service" onValueChange={setSelectedService} value={selectedService} required disabled={isPending}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select a service" />
          </SelectTrigger>
          <SelectContent>
            {services.map((service) => (
              <SelectItem key={service} value={service}>
                {service}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {/* Hidden input to ensure the value is passed if Select doesn't directly map to name */}
        <input type="hidden" name="service" value={selectedService} />
      </motion.div>

      <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="date" className="text-fitable-green-700">Preferred Date <span className="text-red-500">*</span></Label>
          <DatePicker selectedDate={selectedDate} onSelectDate={setSelectedDate} name="date" disabled={isPending} />
        </div>
        <div>
          <Label htmlFor="time" className="text-fitable-green-700">Preferred Time <span className="text-red-500">*</span></Label>
          <Input id="time" name="time" type="time" required disabled={isPending} />
        </div>
      </motion.div>

      <motion.div variants={itemVariants}>
        <Label htmlFor="message" className="text-fitable-green-700">Additional Message</Label>
        <Textarea id="message" name="message" placeholder="Any specific requests or notes?" className="min-h-[100px]" disabled={isPending} />
      </motion.div>

      <motion.div variants={itemVariants}>
        <Button type="submit" className="w-full bg-fitable-green text-fitable-white hover:bg-fitable-green-600 transition-all duration-300 ease-in-out" disabled={isPending}>
          {isPending ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Submitting...
            </>
          ) : (
            'Book Appointment'
          )}
        </Button>
      </motion.div>

      {state && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`mt-4 p-3 rounded-md flex items-center gap-2 ${
            state.success ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
          }`}
        >
          {state.success ? <CheckCircle className="h-5 w-5" /> : <XCircle className="h-5 w-5" />}
          <p className="text-sm">{state.message}</p>
        </motion.div>
      )}
    </motion.form>
  )
}
