"use client"

import React, { useId } from "react"
import { cn } from "@/lib/utils"

type Card = {
  title: string
  icon: React.ReactNode
  onClickHref?: string
}

const cards: Card[] = [
  {
    title: "What is it?",
    icon: (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path d="M18 8c6 4 6 16-2 22-6-4-6-16 2-22Z" fill="#F80641"/>
        <path d="M30 11c5 3 5 12-2 17-5-3-5-12 2-17Z" fill="#0916F8"/>
      </svg>
    ),
  },
  {
    title: "Why do we need it?",
    icon: (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <circle cx="24" cy="24" r="14" fill="none" stroke="#F7750B" strokeWidth="4"/>
      </svg>
    ),
  },
  {
    title: "What is the scope for the future?",
    icon: (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <g stroke="#0916F8" strokeWidth="4" strokeLinecap="round">
          <path d="M24 8v32"/><path d="M8 24h32"/><path d="M12 12l24 24"/><path d="M36 12L12 36"/>
        </g>
      </svg>
    ),
  },
  {
    title: "How does ABIT contribute to this study?",
    icon: (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path d="M8 30c0-8 7-14 16-14s16 6 16 14" fill="none" stroke="#FABC0D" strokeWidth="4" strokeLinecap="round"/>
      </svg>
    ),
  },
]

export default function BehaviouralSciencesSection() {
  const id = useId()
  
  return (
    <section aria-labelledby={`${id}-title`} className="relative py-8 md:py-12">
      <div className="container max-w-7xl">
        {/* Section Heading */}
        <div className="text-center mb-6 md:mb-8">
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--abit-blue)] mb-2">
            About Us
          </h2>
        </div>

        <div className="grid grid-cols-12 gap-4 md:gap-6 items-stretch">
          {/* Left vertical rail - narrower with equal padding */}
          <div className="col-span-12 md:col-span-2 lg:col-span-2">
            <div className="h-full rounded-xl bg-[#2B2B2B] text-white flex items-center justify-center p-4 md:p-6 transition-all duration-300 hover:bg-[#373737]">
              <span
                id={`${id}-title`}
                className={cn(
                  "font-zuume select-none text-lg md:text-xl lg:text-2xl tracking-tight font-bold text-center",
                  "md:[writing-mode:vertical-rl] md:rotate-180"
                )}
                aria-hidden="false"
              >
                BEHAVIOURAL SCIENCES
              </span>
            </div>
          </div>

          {/* Right content: cards + logo */}
          <div className="relative col-span-12 md:col-span-10 lg:col-span-10">
            {/* Glow backdrop */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 -z-10"
              style={{
                background:
                  "radial-gradient(100px 100px at 30% 30%, rgba(248,6,65,0.35), transparent 55%), radial-gradient(130px 130px at 30% 70%, rgba(9,22,248,0.35), transparent 55%)",
                filter: "blur(10px)",
              }}
            />
            
            <div className="flex items-center gap-16 min-h-[400px]">
              {/* About ABIT Text Content - properly centered */}
              <div className="flex-1 flex items-center justify-center h-full">
                <div className="max-w-2xl text-center flex flex-col justify-center mx-auto animate-fade-in">
                  <p className="text-lg md:text-xl leading-relaxed text-[var(--abit-ink)] mb-6 transition-all duration-300 hover:text-[var(--abit-blue)]">
                    The <strong>Ashoka Students Behavioural Insights Team (ABIT)</strong> is India's first student-led behavioural insights team, operating out of Ashoka University, affiliated and funded by the Centre for Social and Behaviour Change (CSBC).
                  </p>

                  <p className="text-lg md:text-xl leading-relaxed text-[var(--abit-ink)] mb-6 transition-all duration-300 hover:text-[var(--abit-blue)]">
                    We study all things B-Sci — policy, well-being, pop culture, consumer behaviour, organisational structures, business design and pretty much anything else under the sun.
                  </p>

                  <p className="text-lg md:text-xl leading-relaxed text-[var(--abit-ink)] transition-all duration-300 hover:text-[var(--abit-blue)]">
                    As a student-led organisation, we aim to explore and apply the many facets of behavioural science and interdisciplinary research to our every-day surroundings, and drive impactful change!
                  </p>
                </div>
              </div>

              {/* ABIT Logo on the right - vertical and properly positioned */}
              <div className="flex-shrink-0 flex items-center justify-end w-48">
                <div className="relative transform rotate-90 transition-transform duration-500 hover:scale-110">
                  <img
                    src="/images/abit-logo.png"
                    alt="ABIT Logo"
                    className="h-48 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}