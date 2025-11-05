import "./globals.css"
import type { Metadata } from "next"
import { Anton, Inter } from "next/font/google"
import { generateSEO } from "@/lib/seo"
import { Navbar } from "@/app/(site)/components/navbar"
import { Footer } from "@/app/(site)/components/footer"
import { CursorFollower } from "@/app/(site)/components/cursor-follower"

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-anton",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-tt-commons", // Using Inter as fallback for TT Commons Pro
  display: "swap",
})

export const metadata: Metadata = generateSEO({
  title: "ABIT - Ashoka Behavioral Insights Team",
  description: "Student-led research, design, and experiments at Ashoka University. India's first student-led behavioral insights team.",
})

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={`${anton.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col">
        <CursorFollower />
        <a href="#main" className="skip-link">
          Skip to main content
        </a>
        <Navbar />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}