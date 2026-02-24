import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

const categories = [
  {
    name: "Wiring & Cables",
    description: "Copper, aluminum, fiber optic and specialty cables for every application.",
    image: "/images/category-wiring.jpg",
    count: "12,000+ SKUs",
  },
  {
    name: "Panels & Breakers",
    description: "Distribution panels, circuit breakers, and switchgear from top brands.",
    image: "/images/category-panels.jpg",
    count: "8,500+ SKUs",
  },
  {
    name: "Lighting",
    description: "Commercial and industrial LED fixtures, controls, and emergency lighting.",
    image: "/images/category-lighting.jpg",
    count: "6,200+ SKUs",
  },
  {
    name: "Tools & Equipment",
    description: "Professional-grade tools, testing equipment, and safety gear.",
    image: "/images/category-tools.jpg",
    count: "4,800+ SKUs",
  },
]

export function CategoriesSection() {
  return (
    <section id="categories" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-xl">
          <p className="text-sm font-medium uppercase tracking-widest text-accent">
            Product Categories
          </p>
          <h2
            className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Everything you need, one source
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Browse our comprehensive catalog of electrical supplies across all major categories.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {categories.map((category) => (
            <Link
              key={category.name}
              href="#"
              className="group relative overflow-hidden rounded-lg border border-border bg-card transition-all hover:border-foreground/20"
            >
              <div className="flex flex-col sm:flex-row">
                <div className="relative h-56 sm:h-auto sm:w-2/5">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between p-6">
                  <div>
                    <div className="flex items-start justify-between">
                      <h3
                        className="text-xl font-bold text-card-foreground"
                        style={{ fontFamily: 'var(--font-heading)' }}
                      >
                        {category.name}
                      </h3>
                      <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground" />
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {category.description}
                    </p>
                  </div>
                  <p className="mt-4 text-xs font-medium uppercase tracking-wider text-accent">
                    {category.count}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
