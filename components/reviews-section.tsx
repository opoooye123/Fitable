"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Star } from 'lucide-react'
import { motion } from 'framer-motion'

export function ReviewsSection() {
  const reviews = [
    {
      name: "Aisha M.",
      rating: 5,
      review: "Fitables Beauty Bar is my go-to for relaxation. The Swedish massage was heavenly, and the staff are incredibly professional. Highly recommend!",
    },
    {
      name: "Chidi O.",
      rating: 5,
      review: "I had a brightening facial, and my skin has never looked better! They truly use natural ingredients that make a difference. Fantastic service!",
    },
    {
      name: "Funke A.",
      rating: 4,
      review: "The manicure and pedicure were meticulously done. Great attention to detail and a very clean environment. Will definitely be back!",
    },
    {
      name: "Tunde B.",
      rating: 5,
      review: "Tried the Deep Tissue Massage for my back pain, and it worked wonders. The therapist was skilled and attentive. A truly therapeutic experience.",
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
    <section className="w-full py-12 md:py-24 lg:py-32 bg-fitable-green-50">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-fitable-green-800">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear from our happy customers about their Fitables Beauty Bar experience.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {reviews.map((review, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="bg-fitable-white border-fitable-green-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-fitable-green text-fitable-green" />
                    ))}
                    {[...Array(5 - review.rating)].map((_, i) => (
                      <Star key={i + review.rating} className="h-5 w-5 text-gray-300" />
                    ))}
                  </div>
                  <CardTitle className="text-fitable-green-700 text-xl mt-2">{review.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {review.review}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
