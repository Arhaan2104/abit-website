import { generateSEO } from "@/lib/seo"

export const metadata = generateSEO({
  title: "Publications",
  description: "Explore ABIT's flagship publications - The Nudgelet and our newsletter Somewhat Rational. Stay updated with the latest in behavioural science research and insights.",
})

export default function PublicationsPage() {
  return (
    <div className="flex flex-col min-h-screen" style={{ backgroundColor: '#F2EFEB' }}>
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-16">
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--abit-blue)] mb-6">
              Publications
            </h1>
            <div className="h-1 w-48 bg-gradient-to-r from-[var(--abit-blue)] to-[var(--abit-orange)] mx-auto rounded-full mb-6"></div>
            <p className="text-xl md:text-2xl text-[var(--abit-ink)] max-w-3xl mx-auto leading-relaxed">
              Discover our flagship publications that make behavioural science accessible, engaging, and actionable for students and practitioners.
            </p>
          </div>
        </div>
      </section>

      {/* The Nudgelet Section */}
      <section className="py-16 md:py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl border border-black/5 shadow-[0_16px_48px_rgba(0,0,0,0.1)] p-8 md:p-12 mb-16">
              {/* Section Header */}
              <div className="text-center mb-8">
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-[var(--abit-blue)] mb-4">
                  The Nudgelet
                </h2>
                <div className="h-1 w-24 bg-gradient-to-r from-[var(--abit-blue)] to-[var(--abit-red)] mx-auto rounded-full"></div>
              </div>

              {/* Content */}
              <div className="prose prose-lg md:prose-xl max-w-none text-center">
                <p className="text-lg md:text-xl leading-relaxed text-[var(--abit-ink)] mb-8">
                  The Nudgelet is <strong>ABIT's flagship publication</strong> and the go-to platform for Ashokan students, alumni, and astute readers who want to stay on top of the latest research, insights and applications in the field of behavioural science.
                </p>
                
                <p className="text-lg md:text-xl leading-relaxed text-[var(--abit-ink)] mb-8">
                  We cover topics across disciplines including <strong>public policy, ethics, marketing, culture, behavioural economics, design and more</strong>. Our enthralling articles, informative interviews with experts and practitioners across various fields and disciplines, and captivating illustrations, graphics, and comics, make behavioural science relatable and accessible to our readers.
                </p>
                
                <p className="text-lg md:text-xl leading-relaxed text-[var(--abit-ink)] mb-10">
                  We focus on creating outcomes by designing content that inspires our readers to think deeper about everyday phenomena and make a difference. <strong>Read on to know more!</strong>
                </p>

                {/* CTA Button */}
                <div className="flex justify-center">
                  <a
                    href="#"
                    className="inline-flex items-center gap-3 bg-[var(--abit-blue)] text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-[var(--abit-blue)]/90 transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(9,22,248,0.3)] focus-visible:ring-2 focus-visible:ring-[var(--abit-yellow)] focus-visible:ring-offset-2"
                  >
                    <span>Explore The Nudgelet</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 md:py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl border border-black/5 shadow-[0_16px_48px_rgba(0,0,0,0.1)] p-8 md:p-12">
              {/* Section Header */}
              <div className="text-center mb-8">
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-[var(--abit-red)] mb-2">
                  Newsletter
                </h2>
                <h3 className="font-heading text-2xl md:text-3xl font-bold text-[var(--abit-orange)] mb-4">
                  Somewhat Rational
                </h3>
                <div className="h-1 w-24 bg-gradient-to-r from-[var(--abit-red)] to-[var(--abit-orange)] mx-auto rounded-full"></div>
              </div>

              {/* Content */}
              <div className="prose prose-lg md:prose-xl max-w-none text-center">
                <p className="text-lg md:text-xl leading-relaxed text-[var(--abit-ink)] mb-8">
                  Our newsletter, <strong>'Somewhat Rational'</strong> is carefully curated by students for students! The fortnightly publication is designed to bring behavioural science closer to everyday life by explaining the average Ashokan problem through the discipline.
                </p>
                
                <p className="text-lg md:text-xl leading-relaxed text-[var(--abit-ink)] mb-10">
                  The feline insights offered by our in-house mascots <strong>Bijli and Badal</strong> provide the perfect dose of BSci to navigate college euphoria, heartbreak, and everything in between — until the point where they ruthlessly roast you, of course. After all, they're only somewhat rational!
                </p>

                {/* CTA Button */}
                <div className="flex justify-center">
                  <a
                    href="https://somewhatrational.substack.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-[var(--abit-red)] text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-[var(--abit-red)]/90 transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(248,6,65,0.3)] focus-visible:ring-2 focus-visible:ring-[var(--abit-yellow)] focus-visible:ring-offset-2"
                  >
                    <span>Read All Editions on Substack</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
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