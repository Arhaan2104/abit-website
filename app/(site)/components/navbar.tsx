"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { MobileNav } from "./mobile-nav"
import { cn } from "@/lib/utils"

const NAV_ITEMS = [
  { name: "Publications", href: "/publications" },
  { name: "Events", href: "/events" },
  { name: "Consulting", href: "/consulting" },
  { name: "Research", href: "/research" },
]

export function Navbar() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b-2" style={{backgroundColor: '#EFE9CE', borderBottomColor: '#FABC0D'}}>
      <div className="container flex h-16 items-center">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--abit-yellow)] focus-visible:rounded-md group"
        >
          <Image
            src="/images/abit-logo.png"
            alt="ABIT - Ashoka Behavioral Insights Team"
            width={120}
            height={48}
            className="h-12 w-auto object-contain rounded-[25%] transition-all duration-300 ease-out group-hover:scale-105 group-hover:rotate-1"
            priority
          />
        </Link>

        {/* Spacer to push navigation to the right */}
        <div className="flex-1" />

        {/* Desktop Navigation & Mobile Nav - Right aligned */}
        <div className="flex items-center space-x-6">
          <nav className="hidden lg:flex lg:items-center lg:space-x-8">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-all duration-200 ease-out hover:text-[var(--abit-blue)] hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--abit-yellow)] focus-visible:rounded-md px-3 py-2",
                  pathname === item.href
                    ? "text-[var(--abit-blue)] border-b-2 border-[var(--abit-blue)]"
                    : "text-[var(--abit-ink)]"
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>
          <MobileNav />
        </div>
      </div>
    </header>
  )
}