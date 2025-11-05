import Link from "next/link"
import Image from "next/image"
import { Twitter, Instagram, Linkedin, Mail, ExternalLink } from "lucide-react"

type FooterLink = {
  name: string
  href: string
  external?: boolean
}

const footerLinks: Record<string, FooterLink[]> = {
  "Quick Links": [
    { name: "About", href: "/about" },
    { name: "Research Lab", href: "/research-lab" },
    { name: "The Nudgelet", href: "/nudgelet" },
    { name: "Events", href: "/events" },
  ],
  "Resources": [
    { name: "Toolkits", href: "/toolkits" },
    { name: "Newsletter", href: "/newsletter" },
    { name: "Consulting", href: "/consulting" },
    { name: "Shop", href: "/shop" },
  ],
  "Connect": [
    { name: "Contact", href: "/contact" },
    { name: "Join ABIT", href: "/join" },
    { name: "Ashoka University", href: "https://ashoka.edu.in", external: true },
    { name: "CSBC", href: "/csbc" },
  ],
}

const socialLinks = [
  { name: "Twitter", href: "#", icon: Twitter },
  { name: "Instagram", href: "#", icon: Instagram },
  { name: "LinkedIn", href: "#", icon: Linkedin },
  { name: "Email", href: "mailto:hello@abit.ashoka.edu.in", icon: Mail },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-[var(--abit-bg-soft-1)]">
      <div className="container py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="space-y-4">
              <Link href="/" className="inline-block group">
                <Image
                  src="/images/abit-logo.png"
                  alt="ABIT - Ashoka Behavioral Insights Team"
                  width={100}
                  height={40}
                  className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </Link>
              <p className="text-sm text-[var(--abit-ink)]/70 leading-relaxed">
                India&apos;s first student-led behavioral insights team at Ashoka University. 
                Striving to drive impactful change through research and experimentation.
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <Link
                    key={social.name}
                    href={social.href}
                    className="p-2 rounded-lg bg-[var(--abit-bg-soft-1)] text-[var(--abit-ink)] hover:bg-[var(--abit-blue)] hover:text-white hover:scale-110 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--abit-yellow)] focus-visible:ring-offset-2"
                    aria-label={social.name}
                  >
                    <social.icon className="h-4 w-4" />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-heading font-bold text-[var(--abit-ink)] mb-4">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-[var(--abit-ink)]/70 hover:text-[var(--abit-blue)] hover:translate-x-1 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--abit-yellow)] focus-visible:rounded-md inline-flex items-center"
                    >
                      {link.name}
                      {link.external && (
                        <ExternalLink className="ml-1 h-3 w-3" />
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-[var(--abit-bg-soft-1)]">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-sm text-[var(--abit-ink)]/60">
              © {currentYear} ABIT - Ashoka Behavioral Insights Team. All rights reserved.
            </p>
            
            <div className="flex space-x-6 text-sm">
              <Link
                href="/privacy"
                className="text-[var(--abit-ink)]/60 hover:text-[var(--abit-blue)] hover:translate-y-[-2px] transition-all duration-200 focus-ring"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-[var(--abit-ink)]/60 hover:text-[var(--abit-blue)] hover:translate-y-[-2px] transition-all duration-200 focus-ring"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}