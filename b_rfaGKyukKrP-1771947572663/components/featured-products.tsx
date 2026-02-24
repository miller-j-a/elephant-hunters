"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ShoppingCart, Star } from "lucide-react"

const products = [
  {
    name: "200A Main Breaker Panel",
    brand: "Siemens",
    sku: "SIE-200MB-42",
    price: "$489.99",
    rating: 4.8,
    reviews: 124,
    badge: "Best Seller",
    inStock: true,
  },
  {
    name: "12/2 NM-B Romex Wire (250ft)",
    brand: "Southwire",
    sku: "SW-122NMB-250",
    price: "$128.50",
    rating: 4.9,
    reviews: 312,
    badge: null,
    inStock: true,
  },
  {
    name: "4ft LED High Bay 150W",
    brand: "Lithonia",
    sku: "LIT-HB150-4",
    price: "$189.00",
    rating: 4.7,
    reviews: 89,
    badge: "New",
    inStock: true,
  },
  {
    name: "Digital Multimeter Cat IV",
    brand: "Fluke",
    sku: "FLK-117-CAT4",
    price: "$269.99",
    rating: 4.9,
    reviews: 456,
    badge: null,
    inStock: true,
  },
  {
    name: "30A Disconnect Switch",
    brand: "Eaton",
    sku: "EAT-30A-DS",
    price: "$67.25",
    rating: 4.6,
    reviews: 78,
    badge: null,
    inStock: true,
  },
  {
    name: "PVC Conduit 1\" x 10ft",
    brand: "Carlon",
    sku: "CAR-PVC1-10",
    price: "$8.99",
    rating: 4.5,
    reviews: 203,
    badge: "Bulk Deal",
    inStock: true,
  },
]

export function FeaturedProducts() {
  return (
    <section id="products" className="py-24 bg-secondary">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <p className="text-sm font-medium uppercase tracking-widest text-accent">
              Featured Products
            </p>
            <h2
              className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Most popular this month
            </h2>
          </div>
          <Button variant="outline" className="self-start sm:self-auto">
            View All Products
          </Button>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <article
              key={product.sku}
              className="group flex flex-col rounded-lg border border-border bg-card p-5 transition-all hover:border-foreground/20 hover:shadow-sm"
            >
              <div className="flex items-start justify-between gap-2">
                <div className="flex-1">
                  <p className="text-xs font-medium text-muted-foreground">{product.brand}</p>
                  <h3
                    className="mt-1 text-base font-semibold text-card-foreground leading-snug"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {product.name}
                  </h3>
                </div>
                {product.badge && (
                  <Badge variant="secondary" className="shrink-0 text-xs bg-accent text-accent-foreground">
                    {product.badge}
                  </Badge>
                )}
              </div>

              <p className="mt-2 text-xs text-muted-foreground">SKU: {product.sku}</p>

              <div className="mt-3 flex items-center gap-1.5">
                <Star className="h-3.5 w-3.5 fill-accent text-accent" />
                <span className="text-sm font-medium text-foreground">{product.rating}</span>
                <span className="text-xs text-muted-foreground">({product.reviews})</span>
              </div>

              <div className="mt-auto flex items-center justify-between pt-5 border-t border-border mt-5">
                <p
                  className="text-xl font-bold text-foreground"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {product.price}
                </p>
                <Button size="sm">
                  <ShoppingCart className="mr-1.5 h-3.5 w-3.5" />
                  Add to Cart
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
