import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, Clock } from 'lucide-react'

export default function ContactPage() {
  const locations = [
    {
      name: "Surulere",
      address: "53/55 Akerele Street, Surulere, Lagos",
      phone: "0809 031 0029",
    },
    {
      name: "Gbagada",
      address: "56, Diya Street, Opp. Deeper Life Car Park",
      phone: "0912 404 0626",
    },
    {
      name: "Lekki",
      address: "8A, Onikepo Akande, Off Admiralty Way, By Access Bank, Lekki Phase I, Lagos, Nigeria",
      phone: "0912 409 5638",
    },
  ]

  const workingHours = [
    "Mon – Sat: 8:30 AM – 8:00 PM",
    "Sunday: 1:00 PM – 7:00 PM",
  ]

  return (
    <div className="container py-12 md:py-16 lg:py-20 bg-fitable-white">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-fitable-green-800">
          Locations & Contact
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          Find us at one of our convenient locations or reach out to us directly.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {locations.map((location, index) => (
          <Card key={index} className="bg-fitable-green-50 border-fitable-green-200 shadow-lg">
            <CardHeader>
              <CardTitle className="text-fitable-green-700 text-2xl font-semibold">{location.name}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-fitable-green-600 flex-shrink-0 mt-1" />
                <p className="text-muted-foreground">{location.address}</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-fitable-green-600 flex-shrink-0" />
                <p className="text-muted-foreground">{location.phone}</p>
              </div>
            </CardContent>
          </Card>
        ))}

        <Card className="bg-fitable-green-50 border-fitable-green-200 shadow-lg lg:col-span-1 md:col-span-2">
          <CardHeader>
            <CardTitle className="text-fitable-green-700 text-2xl font-semibold">Working Hours</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {workingHours.map((hour, index) => (
              <div key={index} className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-fitable-green-600 flex-shrink-0" />
                <p className="text-muted-foreground">{hour}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
