"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const NAV_ITEMS = [
  { name: "Publications", href: "/publications" },
  { name: "Events", href: "/events" },
  { name: "Consulting", href: "/consulting" },
  { name: "Research", href: "/research" },
]

export function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="px-2 text-[var(--abit-ink)] hover:bg-[var(--abit-bg-soft-1)] focus-visible:ring-[var(--abit-yellow)] lg:hidden"
          aria-label="Open menu"
        >
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent 
        side="right" 
        className="w-[300px] bg-[var(--abit-surface)] border-l border-[var(--abit-bg-soft-1)]"
      >
        <SheetHeader>
          <SheetTitle className="text-left font-heading text-xl text-[var(--abit-ink)]">
            Menu
          </SheetTitle>
        </SheetHeader>
        <nav className="mt-8">
          <ul className="space-y-4">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-2 text-lg text-[var(--abit-ink)] hover:text-[var(--abit-blue)] hover:translate-x-2 transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--abit-yellow)] focus-visible:rounded-md"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </SheetContent>
    </Sheet>
  )
}