const stats = [
  { value: "50,000+", label: "Products in Stock" },
  { value: "12", label: "Distribution Centers" },
  { value: "37+", label: "Years in Business" },
  { value: "98%", label: "Same-Day Ship Rate" },
]

export function StatsBar() {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p
                className="text-3xl font-bold tracking-tight lg:text-4xl"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-primary-foreground/70">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
