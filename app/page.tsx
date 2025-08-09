import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ReviewsSection } from "@/components/reviews-section"
import { FAQSection } from "@/components/faq-section"
import { CountdownTimer } from "@/components/countdown-timer"
import { MessageCircle } from 'lucide-react' // For WhatsApp icon

export default function HomePage() {
  const whatsappNumber = "2348012345678" // Replace with your actual WhatsApp number (without + or spaces)

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-fitable-green-50">
        <Image
          src="https://i.pinimg.com/736x/bd/ab/46/bdab46aa93a80f71d3ed41594e216298.jpg"
          width={1920}
          height={1080}
          alt="Hero Background"
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />
        <div className="container relative z-10 px-4 md:px-6 text-center">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none text-fitable-green-800 drop-shadow-md">
              FITABLES BEAUTY BAR
            </h1>
            <p className="mx-auto max-w-[800px] text-lg md:text-xl text-fitable-green-700 font-semibold">
              SPA • SALON • SKINCARE
            </p>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg text-fitable-green-600">
              Your authentic spa journey that fits your busy schedule. Experience healing, correction, and repair with natural ingredients.
            </p>
            <div className="flex flex-col gap-2 sm:flex-row justify-center">
              <Link href="/services">
                <Button className="bg-fitable-green text-fitable-white hover:bg-fitable-green-600 shadow-md hover:shadow-lg transition-all duration-300">
                  View Services
                </Button>
              </Link>
              <Link href="/book">
                <Button variant="outline" className="border-fitable-green text-fitable-green hover:bg-fitable-green-50 shadow-md hover:shadow-lg transition-all duration-300">
                  Book an Appointment
                </Button>
              </Link>
            </div>
            <div className="mt-6">
              <Link href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" className="text-fitable-green-700 hover:text-fitable-green-500 hover:bg-fitable-green-100 transition-colors duration-300">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Make Enquiries / Talk to a Therapist
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Countdown Timer Section */}
      <CountdownTimer initialMinutes={30} />

      {/* About Us Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-fitable-white">
        <div className="container px-4 md:px-6">
          <div className="grid items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-fitable-green-800">
                  About Fitables Beauty Bar
                </h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Fitables Beauty Bar brings together convenience and practicality to give our clients an authentic spa journey that does not consume too much time out of their busy schedule. We use herbs, plant extracts, and essential oils to heal, correct, and repair damaged skin — leaving you with healthy, glowing skin.
                </p>
              </div>
            </div>
            <Image
              src="https://i.pinimg.com/736x/21/f6/ab/21f6ab8003e3710d6b45879d95a09dab.jpg"
              width="600"
              height="400"
              alt="About Us Image"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <ReviewsSection />

      {/* Call to Action / Highlights Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-fitable-green-50">
        <div className="container px-4 md:px-6 text-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-fitable-green-800">
              Discover Your Perfect Treatment
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl text-fitable-green-600">
              From relaxing massages to rejuvenating facials and meticulous nail care, we offer a wide range of services tailored to your needs.
            </p>
            <Link href="/services">
              <Button className="bg-fitable-green text-fitable-white hover:bg-fitable-green-600 shadow-md hover:shadow-lg transition-all duration-300">
                Explore All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />
    </div>
  )
}
