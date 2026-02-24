const brands = [
  "Siemens",
  "Eaton",
  "Schneider Electric",
  "Southwire",
  "Lithonia",
  "Fluke",
  "Hubbell",
  "Leviton",
]

export function BrandsSection() {
  return (
    <section className="py-16 bg-secondary border-y border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <p className="text-center text-sm font-medium uppercase tracking-widest text-muted-foreground mb-10">
          Authorized Distributor For
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {brands.map((brand) => (
            <span
              key={brand}
              className="text-lg font-bold text-foreground/20 hover:text-foreground/50 transition-colors cursor-default"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
