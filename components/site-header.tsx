"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, SpadeIcon as Spa } from 'lucide-react'

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-fitable-white">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 font-bold text-fitable-green-700">
          <Spa className="h-6 w-6" />
          <span>FITABLES BEAUTY BAR</span>
        </Link>
        <nav className="hidden space-x-4 md:flex">
          <Link href="/" className="text-sm font-medium text-fitable-green-700 hover:text-fitable-green-500">
            Home
          </Link>
          <Link href="/services" className="text-sm font-medium text-fitable-green-700 hover:text-fitable-green-500">
            Services & Prices
          </Link>
          <Link href="/contact" className="text-sm font-medium text-fitable-green-700 hover:text-fitable-green-500">
            Locations & Contact
          </Link>
          <Link href="/book" className="text-sm font-medium text-fitable-green-700 hover:text-fitable-green-500">
            Book Appointment
          </Link>
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6 text-fitable-green-700" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="bg-fitable-white">
            <Link href="/" className="flex items-center gap-2 font-bold text-fitable-green-700">
              <Spa className="h-6 w-6" />
              <span>FITABLES BEAUTY BAR</span>
            </Link>
            <div className="grid gap-4 py-6">
              <Link href="/" className="text-lg font-semibold text-fitable-green-700 hover:text-fitable-green-500">
                Home
              </Link>
              <Link href="/services" className="text-lg font-semibold text-fitable-green-700 hover:text-fitable-green-500">
                Services & Prices
              </Link>
              <Link href="/contact" className="text-lg font-semibold text-fitable-green-700 hover:text-fitable-green-500">
                Locations & Contact
              </Link>
              <Link href="/book" className="text-lg font-semibold text-fitable-green-700 hover:text-fitable-green-500">
                Book Appointment
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
