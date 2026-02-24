import Link from "next/link"
import { Zap } from "lucide-react"

const footerLinks = {
  Products: [
    { name: "Wiring & Cables", href: "#" },
    { name: "Panels & Breakers", href: "#" },
    { name: "Lighting", href: "#" },
    { name: "Tools & Equipment", href: "#" },
    { name: "Safety & PPE", href: "#" },
  ],
  Company: [
    { name: "About Us", href: "#about" },
    { name: "Locations", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Press", href: "#" },
  ],
  Support: [
    { name: "Contact Us", href: "#contact" },
    { name: "Track Order", href: "#" },
    { name: "Returns", href: "#" },
    { name: "FAQ", href: "#" },
  ],
  Account: [
    { name: "Sign In", href: "#" },
    { name: "Open Account", href: "#" },
    { name: "Credit Application", href: "#" },
    { name: "Order History", href: "#" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center w-8 h-8 bg-background rounded-md">
                <Zap className="h-4 w-4 text-foreground" />
              </div>
              <span className="text-lg font-bold text-background" style={{ fontFamily: 'var(--font-heading)' }}>
                Voltline
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-background/50">
              Your trusted source for electrical supplies since 1987.
            </p>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-sm font-semibold text-background">{category}</h3>
              <ul className="mt-4 flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-background/50 hover:text-background transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-background/10 pt-8 sm:flex-row">
          <p className="text-xs text-background/40">
            &copy; 2026 Voltline Electric Supply Co. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-xs text-background/40 hover:text-background/60 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-xs text-background/40 hover:text-background/60 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
