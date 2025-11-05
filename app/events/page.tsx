import { generateSEO } from "@/lib/seo"

export const metadata = generateSEO({
  title: "Events",
  description: "Discover ABIT's events, workshops, speaker series, and student engagement initiatives. From BREW conferences to behavioral science competitions.",
})

export default function EventsPage() {
  return (
    <div className="flex flex-col min-h-screen" style={{ backgroundColor: '#F2EFEB' }}>
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-16">
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--abit-blue)] mb-6">
              Events
            </h1>
            <div className="h-1 w-48 bg-gradient-to-r from-[var(--abit-blue)] to-[var(--abit-red)] mx-auto rounded-full mb-6"></div>
            <p className="text-xl md:text-2xl text-[var(--abit-ink)] max-w-3xl mx-auto leading-relaxed">
              Explore our workshops, speaker series, competitions, and student engagement initiatives that bring behavioral science to life.
            </p>
          </div>
        </div>
      </section>

      {/* Recent Events Header */}
      <section className="py-8">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[var(--abit-red)] mb-4">
              Recent Events
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-[var(--abit-red)] to-[var(--abit-orange)] mx-auto rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Monsoon 2025 Section */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-16">
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-[var(--abit-orange)] mb-4">
              Monsoon 2025
            </h3>
          </div>

          <div className="max-w-6xl mx-auto space-y-12">
            
            {/* BREW Workshop */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl border border-black/5 shadow-[0_16px_48px_rgba(0,0,0,0.1)] overflow-hidden">
              <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
                <div>
                  <h4 className="font-heading text-2xl md:text-3xl font-bold text-[var(--abit-blue)] mb-6">
                    Behavioural Research in Economics Workshop
                  </h4>
                  <p className="text-lg leading-relaxed text-[var(--abit-ink)] mb-6">
                    <strong>BREW</strong>, hosted by Ashoka University and Centre for Social and Behaviour Change, was a 3-day conference with <strong>84 behavioural scientists and presenters</strong> from around the world, making it the largest BREW yet!
                  </p>
                  <p className="text-lg leading-relaxed text-[var(--abit-ink)]">
                    ABIT helped with event logistics, student poster presentations alongside a fantastic team of student volunteers. <strong>11 students</strong> from Psychology and Economics showcased their research ranging from topics like common pool resources and substance use among Tibetan youth.
                  </p>
                </div>
                <div className="flex items-center justify-center">
                  <div className="w-full h-64 bg-gradient-to-br from-[var(--abit-bg-soft-1)] to-[var(--abit-bg-soft-2)] rounded-xl border-2 border-dashed border-[var(--abit-blue)]/30 flex items-center justify-center">
                    <div className="text-center text-[var(--abit-ink)]/60">
                      <div className="w-16 h-16 mx-auto mb-4 bg-[var(--abit-blue)]/10 rounded-full flex items-center justify-center">
                        <svg className="w-8 h-8 text-[var(--abit-blue)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <p className="text-sm font-medium">Event Photo Placeholder</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Speaker Series: 1001 Stories */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl border border-black/5 shadow-[0_16px_48px_rgba(0,0,0,0.1)] overflow-hidden">
              <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
                <div className="flex items-center justify-center">
                  <div className="w-full h-64 bg-gradient-to-br from-[var(--abit-bg-soft-1)] to-[var(--abit-bg-soft-2)] rounded-xl border-2 border-dashed border-[var(--abit-red)]/30 flex items-center justify-center">
                    <div className="text-center text-[var(--abit-ink)]/60">
                      <div className="w-16 h-16 mx-auto mb-4 bg-[var(--abit-red)]/10 rounded-full flex items-center justify-center">
                        <svg className="w-8 h-8 text-[var(--abit-red)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 3v10a2 2 0 002 2h6a2 2 0 002-2V7H7z" />
                        </svg>
                      </div>
                      <p className="text-sm font-medium">Speaker Event Photo</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-heading text-2xl md:text-3xl font-bold text-[var(--abit-red)] mb-6">
                    Speaker Series: 1001 Stories
                  </h4>
                  <p className="text-lg leading-relaxed text-[var(--abit-ink)] mb-6">
                    The Ashoka Business Club, in collaboration with ABIT, hosted a Marquee Speaker Session featuring experts from <strong>1001 Stories</strong>, a leading consultancy specializing in human behavior and applied behavioral science.
                  </p>
                  <ul className="text-lg leading-relaxed text-[var(--abit-ink)] mb-6 space-y-2">
                    <li>• A detailed breakdown of a real-world case study showcasing behavioral science in both business and social impact consulting</li>
                    <li>• Insights into Context Architecture™️ and how it's applied to solve real-world challenges</li>
                  </ul>
                  <div className="space-y-3">
                    <p className="font-semibold text-[var(--abit-ink)]">Meet the Speakers:</p>
                    <div className="space-y-2 text-[var(--abit-ink)]">
                      <p><strong>🔸 Rishima Shetty</strong> – Expert in social psychology, led a 55% engagement boost for a BFSI unicorn.</p>
                      <p><strong>🔸 Poorni S</strong> – Specialist in social norms and market strategies, with experience across lifestyle, retail, and ed-tech.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Speaker Series: Consuma AI */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl border border-black/5 shadow-[0_16px_48px_rgba(0,0,0,0.1)] overflow-hidden">
              <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
                <div>
                  <h4 className="font-heading text-2xl md:text-3xl font-bold text-[var(--abit-orange)] mb-6">
                    Speaker Series: Consuma AI
                  </h4>
                  <p className="text-lg leading-relaxed text-[var(--abit-ink)] mb-6">
                    <strong>Consuma</strong>, an AI-powered market research startup joined us for a chat with founder <strong>Abhilash Madubhashi</strong> to discover how their AI tool is reshaping market analysis.
                  </p>
                  <p className="text-lg leading-relaxed text-[var(--abit-ink)]">
                    This event explored how Consuma's rapid, AI-driven tools are transforming data insights in today's fast-paced world. Consuma has worked with industry leaders like <strong>Airtel, Wiekfield and Foxtale</strong>.
                  </p>
                </div>
                <div className="flex items-center justify-center">
                  <div className="w-full h-64 bg-gradient-to-br from-[var(--abit-bg-soft-1)] to-[var(--abit-bg-soft-2)] rounded-xl border-2 border-dashed border-[var(--abit-orange)]/30 flex items-center justify-center">
                    <div className="text-center text-[var(--abit-ink)]/60">
                      <div className="w-16 h-16 mx-auto mb-4 bg-[var(--abit-orange)]/10 rounded-full flex items-center justify-center">
                        <svg className="w-8 h-8 text-[var(--abit-orange)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <p className="text-sm font-medium">AI Event Photo</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Other Student Engagement */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl border border-black/5 shadow-[0_16px_48px_rgba(0,0,0,0.1)] overflow-hidden">
              <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
                <div className="flex items-center justify-center">
                  <div className="w-full h-64 bg-gradient-to-br from-[var(--abit-bg-soft-1)] to-[var(--abit-bg-soft-2)] rounded-xl border-2 border-dashed border-[var(--abit-yellow)]/30 flex items-center justify-center">
                    <div className="text-center text-[var(--abit-ink)]/60">
                      <div className="w-16 h-16 mx-auto mb-4 bg-[var(--abit-yellow)]/10 rounded-full flex items-center justify-center">
                        <svg className="w-8 h-8 text-[var(--abit-yellow)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                      <p className="text-sm font-medium">Student Engagement Photos</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-heading text-2xl md:text-3xl font-bold text-[var(--abit-yellow)] mb-6" style={{ color: '#FABC0D' }}>
                    Other Student Engagement
                  </h4>
                  <p className="text-lg leading-relaxed text-[var(--abit-ink)] mb-6">
                    ABIT engages with the student body by conducting frequent events outside Ashoka's beloved mess building! Events aim to engage students with behavioural science through <strong>games, discussion and help desks</strong>.
                  </p>
                  <div className="bg-[var(--abit-bg-soft-1)]/50 rounded-xl p-6 border border-[var(--abit-yellow)]/20">
                    <h5 className="font-semibold text-lg text-[var(--abit-ink)] mb-3">
                      Ashoka Behavioural Case Competition
                    </h5>
                    <p className="text-[var(--abit-ink)]/80 italic">
                      Competition details coming soon...
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Bottom Spacing */}
      <div className="py-8"></div>
    </div>
  )
}