import { generateSEO } from "@/lib/seo"
import { Hero } from "@/app/(site)/components/hero"

export const metadata = generateSEO({
  title: "Home",
  description: "Student-led research, design, and experiments at Ashoka University. India's first student-led behavioral insights team.",
})


export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <Hero />
    </div>
  )
}