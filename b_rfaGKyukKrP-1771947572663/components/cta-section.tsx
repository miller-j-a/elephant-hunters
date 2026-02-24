import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CtaSection() {
  return (
    <section id="contact" className="py-24 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2
            className="text-3xl font-bold tracking-tight sm:text-5xl text-balance"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Ready to power your next project?
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-primary-foreground/70">
            Open a trade account today and get access to contractor pricing, net-30 terms, and dedicated account management.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button size="lg" className="bg-background text-foreground hover:bg-background/90" asChild>
              <Link href="#">
                Open an Account
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              asChild
            >
              <Link href="tel:1-800-555-0199">Call Us Now</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
