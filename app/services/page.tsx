'use client'

import Image from "next/image"
import Link from "next/link" // Import Link
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { motion } from 'framer-motion'

export default function ServicesPage() {
  const servicesData = {
    "MASSAGE THERAPIES": [
      { name: "Swedish Massage", price: "₦10,000–₦15,000", description: "Gentle to medium pressure for relaxation, tension relief, and improved blood flow.", imageQuery: "https://i.pinimg.com/1200x/04/6f/ef/046fef9c266282a5147a8453e712edf6.jpg" },
      { name: "Deep Tissue Massage", price: "₦20,000", description: "Targets deep muscles and connective tissue to relieve knots and body pain.", imageQuery: "https://i.pinimg.com/1200x/68/75/db/6875db8794fbd7643b6b1399108bbd03.jpg" },
      { name: "Aromatherapy Massage", price: "₦10,000–₦15,000", description: "Uses essential oils for psychological and physical wellness.", imageQuery: "https://i.pinimg.com/736x/fd/dd/c5/fdddc5e93dd707a9f63cc3ee7ec0b265.jpg" },
      { name: "Reflexology", price: "₦15,000", description: "Pressure applied to feet, hands, and ears to balance body, mind, and spirit.", imageQuery: "https://i.pinimg.com/1200x/1e/65/9b/1e659b3c004c65bac1b5ee6a1a6939a8.jpg" },
      { name: "Back Massage", price: "₦10,000–₦20,000", description: "Relieves tension, improves circulation, and boosts immunity.", imageQuery: "https://i.pinimg.com/1200x/a0/c6/dc/a0c6dc782238615d9d69f65eb89de606.jpg" },
      { name: "Soap Massage", price: "₦10,000", description: "Traditional foam massage for cleansing and relaxation.", imageQuery: "https://i.pinimg.com/736x/6a/9d/07/6a9d07145e5af92dcdd217b72c1eb784.jpg" },
      { name: "Head Massage", price: "₦7,000–₦10,000", imageQuery: "https://i.pinimg.com/736x/60/2e/00/602e00f0edc69c6320bbbab0d490ecab.jpg" },
 /*      { name: "Thai Foot Massage", price: "₦7,000–₦10,000", imageQuery: "thai foot massage" },
      { name: "Full Body Massage", price: "₦10,000–₦15,000", imageQuery: "full body massage" },
      { name: "Soapy Massage", price: "₦10,000–₦15,000", imageQuery: "soapy massage" },
      { name: "Hot Stone Massage (1 hr)", price: "₦22,000", imageQuery: "hot stone massage" },
      { name: "Double-Handed Massage (1 hr)", price: "₦25,000", imageQuery: "double handed massage" },
      { name: "Wood Therapy", price: "₦15,000 per session (4–5 sessions recommended)", imageQuery: "wood therapy for body contouring" },
      { name: "Cavitation Treatment", price: "₦15,000 per session (4–5 sessions recommended)", imageQuery: "cavitation treatment for fat reduction" }, */
    ],
    /* "FACIAL TREATMENTS": [
      { name: "Basic Facial", price: "₦7,000", imageQuery: "basic facial treatment" },
      { name: "Acne Facial", price: "₦10,000", imageQuery: "acne facial treatment" },
      { name: "Fruit Facial", price: "₦12,000", imageQuery: "fruit facial for glowing skin" },
      { name: "Brightening Facial", price: "₦10,000", imageQuery: "brightening facial" },
      { name: "Derma Planing", price: "₦10,000", imageQuery: "derma planing procedure" },
      { name: "Skin Tag Removal", price: "₦20,000", imageQuery: "skin tag removal" },
      { name: "Microdermabrasion", price: "₦15,000", imageQuery: "microdermabrasion facial" },
      { name: "Chemical Peel", price: "₦50,000", imageQuery: "chemical peel treatment" },
    ], */
    /* "BODY EXFOLIATION & HAMMAM SERVICES": [
      { name: "Body Exfoliation", price: "₦15,000", imageQuery: "https://i.pinimg.com/1200x/41/08/66/410866ae8d9fc96854ff6fb00b1d8956.jpg" },
      { name: "Whitening Exfoliation", price: "₦20,000", imageQuery: "https://i.pinimg.com/1200x/41/08/66/410866ae8d9fc96854ff6fb00b1d8956.jpg" },
      { name: "Kamila Whitening Polish", price: "₦25,000", imageQuery: "kamila whitening body polish" },
      { name: "Intensive Coffee Scrub", price: "₦15,000", imageQuery: "intensive coffee scrub" },
      { name: "Moroccan Bath", price: "₦20,000", imageQuery: "moroccan bath spa" },
      { name: "Steam Bath", price: "₦10,000", imageQuery: "https://i.pinimg.com/736x/c8/c7/9a/c8c79a53934c0cb3727bdc5e1cb46aca.jpg" },
      { name: "Body Wrap", price: "₦10,000", imageQuery: "body wrap treatment" },
      { name: "Turmeric Body Polish", price: "₦15,000", imageQuery: "turmeric body polish" },
      { name: "Traditional Hammam Bath", price: "₦30,000", imageQuery: "traditional hammam bath" },
    ], */
   /*  "NAIL CARE": [
      { name: "Basic Pedicure", price: "₦5,000", imageQuery: "https://i.pinimg.com/736x/8a/9f/24/8a9f2403cc708fca920718ace9026961.jpg" },
      { name: "Manicure", price: "₦2,500", imageQuery: "https://i.pinimg.com/1200x/f6/37/af/f637af817a0f39e0da85d7a57b9ab09a.jpg" },
      { name: "Jelly Pedicure", price: "₦10,000", imageQuery: "https://i.pinimg.com/1200x/de/c1/73/dec17307a013c1ae8681d33c9c6fcd89.jpg" },
      { name: "Fruit Pedicure", price: "₦7,000", imageQuery: "fruit pedicure" },
      { name: "Gel Polish", price: "₦2,000", imageQuery: "gel polish nails" },
    ], */
    /* "HAIR SERVICES": [
      { name: "Fixing of Extension", imageQuery: "hair extension fixing" },
      { name: "Fixing of Closure", imageQuery: "hair closure fixing" },
      { name: "Fixing of Frontal", imageQuery: "hair frontal fixing" },
      { name: "Fixing of Customized Frontal", imageQuery: "customized frontal hair fixing" },
      { name: "Dark Root Coloring", imageQuery: "dark root hair coloring" },
      { name: "Relaxing", imageQuery: "hair relaxing treatment" },
      { name: "Relaxing with Client Kit", imageQuery: "hair relaxing with client kit" },
      { name: "Steaming", imageQuery: "hair steaming treatment" },
    ], */
  }

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
    <div className="container py-12 md:py-16 lg:py-20 bg-fitable-white">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-10"
      >
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-fitable-green-800">
          Our Services & Prices
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          Explore our comprehensive range of spa, salon, and skincare treatments designed to rejuvenate your body and mind.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
      >
        {Object.entries(servicesData).map(([category, items]) => (
          <motion.div key={category} variants={itemVariants}>
            <Card className="bg-fitable-green-50 border-fitable-green-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-fitable-green-700 text-2xl font-semibold">{category}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-6">
                  {items.map((item, index) => (
                    <li key={index} className="flex flex-col">
                      <Link
                        href={`/book?service=${encodeURIComponent(item.name)}`}
                        className="block p-4 -m-4 rounded-lg hover:bg-fitable-green-100 transition-colors duration-200"
                      >
                        <div className="relative w-full h-40 rounded-md overflow-hidden mb-3">
                          <Image
  src={
    item.imageQuery?.startsWith("http")
      ? item.imageQuery // direct Pinterest or any image URL
      : `/placeholder.svg?height=160&width=320&query=${encodeURIComponent(item.imageQuery || item.name)}`
  }
  alt={item.name}
  fill
  style={{ objectFit: 'cover' }}
  className="transition-transform duration-300 hover:scale-105"
/>

                        </div>
                        <div className="flex justify-between items-baseline">
                          <span className="font-semibold text-fitable-green-800 text-lg">{item.name}</span>
                          {item.price && <span className="text-fitable-green-600 font-bold text-lg">{item.price}</span>}
                        </div>
                        {item.description && (
                          <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                        )}
                      </Link>
                      {index < items.length - 1 && <Separator className="mt-6 bg-fitable-green-100" />}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
