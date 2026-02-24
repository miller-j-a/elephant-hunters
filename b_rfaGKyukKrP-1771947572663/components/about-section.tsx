import Image from "next/image"
import { Truck, ShieldCheck, Headset, Clock } from "lucide-react"

const features = [
  {
    icon: Truck,
    title: "Same-Day Shipping",
    description: "Orders placed before 2 PM ship the same day from any of our 12 distribution centers.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Guaranteed",
    description: "Every product is sourced directly from manufacturers and backed by our satisfaction guarantee.",
  },
  {
    icon: Headset,
    title: "Expert Support",
    description: "Our team of licensed electricians is available to help with product selection and technical questions.",
  },
  {
    icon: Clock,
    title: "Net 30 Terms",
    description: "Qualified contractors and businesses enjoy flexible payment terms and volume pricing.",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
              <Image
                src="/images/warehouse.jpg"
                alt="Voltline Electric warehouse and distribution center"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 hidden lg:block bg-primary text-primary-foreground rounded-lg p-6">
              <p
                className="text-3xl font-bold"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                37+
              </p>
              <p className="text-sm text-primary-foreground/70">Years of trusted service</p>
            </div>
          </div>

          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-accent">
              Why Voltline
            </p>
            <h2
              className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Built for the pros who build everything else
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Since 1987, Voltline Electric has been the distributor contractors and facility managers count on for reliable supply, competitive pricing, and unmatched expertise.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {features.map((feature) => (
                <div key={feature.title} className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-secondary">
                    <feature.icon className="h-5 w-5 text-foreground" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-foreground">{feature.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
