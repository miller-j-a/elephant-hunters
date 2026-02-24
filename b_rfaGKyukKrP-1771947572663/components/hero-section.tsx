import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <Image
        src="/images/hero-electrical.jpg"
        alt="Electrical infrastructure at dusk"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-foreground/70" />
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-32 lg:px-8 w-full">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-widest text-background/70 mb-4">
            Trusted Since 1987
          </p>
          <h1
            className="text-4xl font-bold tracking-tight text-background sm:text-6xl lg:text-7xl text-balance leading-tight"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Powering your projects from source to site
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-background/80 max-w-lg">
            Your single source for industrial and commercial electrical supplies. Over 50,000 products in stock with same-day shipping nationwide.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button size="lg" className="bg-background text-foreground hover:bg-background/90" asChild>
              <Link href="#products">
                Browse Products
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-background/30 text-background hover:bg-background/10 hover:text-background" asChild>
              <Link href="#contact">Open an Account</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
