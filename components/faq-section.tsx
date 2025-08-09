"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { motion } from 'framer-motion'

export function FAQSection() {
  const faqs = [
    {
      question: "How do I pay for your products?",
      answer: "We accept various payment methods including bank transfers, POS payments at our locations, and secure online payment options for product purchases. Details will be provided upon checkout or inquiry.",
    },
    {
      question: "Do you deliver abroad?",
      answer: "Currently, we primarily offer delivery within Nigeria. For international delivery inquiries, please contact us directly to discuss potential arrangements and shipping costs.",
    },
    {
      question: "Can I get skin glow products that won’t bleach me?",
      answer: "Our skincare products are formulated with natural herbs, plant extracts, and essential oils designed to heal, correct, and repair damaged skin, leaving you with a healthy, natural glow without any bleaching effects. We focus on enhancing your natural complexion.",
    },
    {
      question: "Do you do free consultation?",
      answer: "Yes, we offer free consultations for skincare and spa services. You can book a consultation through our website or by calling one of our branches.",
    },
    {
      question: "Do I need to book for a visit or you accept walk-ins?",
      answer: "While we do accept walk-ins, we highly recommend booking an appointment, especially for spa and salon services, to ensure availability and minimize your waiting time. Booking guarantees you a slot with your preferred therapist.",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-fitable-white">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-fitable-green-800">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about our services and products.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <motion.div key={index} variants={itemVariants}>
                <AccordionItem value={`item-${index}`} className="border-b border-fitable-green-200">
                  <AccordionTrigger className="text-lg font-medium text-fitable-green-700 hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
