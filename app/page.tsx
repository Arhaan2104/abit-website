import { generateSEO } from "@/lib/seo"
import { Hero } from "@/app/(site)/components/hero"
import Partners from "@/app/(site)/components/partners"
import BehaviouralSciencesSection from "@/app/(site)/components/behavioural-sciences"
import WhatWeDo from "@/app/(site)/components/what-we-do"

export const metadata = generateSEO({
  title: "Home",
  description: "Student-led research, design, and experiments at Ashoka University. India's first student-led behavioral insights team.",
})

const partnersData = [
  { 
    src: "/partners/csbc.png", 
    alt: "Centre for Social and Behaviour Change",
    width: 240,
    height: 80
  },
  { 
    src: "/partners/iben.jpg", 
    alt: "India Behavioural Economics Network",
    width: 200,
    height: 100
  },
  { 
    src: "/partners/consuma.webp", 
    alt: "Consuma",
    width: 180,
    height: 60
  },
  { 
    src: "/partners/infoedge.png", 
    alt: "InfoEdge Centre for Entrepreneurship - Ashoka University",
    width: 280,
    height: 90
  },
  { 
    src: "/partners/1001stories.jpeg", 
    alt: "1001 Stories",
    width: 120,
    height: 80
  },
  { 
    src: "/partners/rocket-health.png", 
    alt: "Rocket Health",
    width: 200,
    height: 80
  },
]

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <Hero />
      
      {/* Partners Section */}
      <Partners items={partnersData} />
      
      {/* Behavioural Sciences Section */}
      <BehaviouralSciencesSection />
      
      {/* What We Do Section */}
      <WhatWeDo />
    </div>
  )
}