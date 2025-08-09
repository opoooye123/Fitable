import Link from "next/link"
import { SpadeIcon as Spa, Instagram, Facebook, Youtube } from 'lucide-react' // Using Youtube for TikTok placeholder

export function SiteFooter() {
  return (
    <footer className="border-t bg-fitable-white py-6 md:py-8">
      <div className="container flex flex-col items-center justify-between gap-4 px-4 md:flex-row md:px-6">
        <Link href="/" className="flex items-center gap-2 font-bold text-fitable-green-700">
          <Spa className="h-6 w-6" />
          <span>FITABLES BEAUTY BAR</span>
        </Link>
        <p className="text-center text-sm text-muted-foreground md:text-left">
          &copy; {new Date().getFullYear()} Fitables Beauty Bar. All rights reserved.
        </p>
        <nav className="flex gap-4 sm:gap-6 items-center">
          <Link href="/services" className="text-sm text-fitable-green-700 hover:underline underline-offset-4">
            Services
          </Link>
          <Link href="/contact" className="text-sm text-fitable-green-700 hover:underline underline-offset-4">
            Contact
          </Link>
          <div className="flex gap-3 ml-4">
            <Link href="https://instagram.com/fitablesbeautybar" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Instagram className="h-5 w-5 text-fitable-green-700 hover:text-fitable-green-500 transition-colors" />
            </Link>
            <Link href="https://facebook.com/fitablesbeautybar" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <Facebook className="h-5 w-5 text-fitable-green-700 hover:text-fitable-green-500 transition-colors" />
            </Link>
            <Link href="https://tiktok.com/@fitablesbeautybar" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
              {/* Using Youtube icon as a placeholder for TikTok, as Lucide doesn't have a direct TikTok icon */}
              <Youtube className="h-5 w-5 text-fitable-green-700 hover:text-fitable-green-500 transition-colors" />
            </Link>
          </div>
        </nav>
      </div>
    </footer>
  )
}
