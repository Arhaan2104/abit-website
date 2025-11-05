import Image from "next/image"

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Gradient overlay */}
      <div className="absolute inset-0 gradient-yellow-orange opacity-10" />
      
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 py-16 lg:py-24 items-center">
          {/* Left content */}
          <div className="space-y-8">
            {/* Main heading */}
            <div className="space-y-4 animate-fade-in">
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-[var(--abit-red)]">
                ASHOKA
                <br />
                <span className="text-[var(--abit-blue)]">BEHAVIOURAL</span>
                <br />
                INSIGHTS TEAM
              </h1>

              <p className="text-lg lg:text-xl text-[var(--abit-blue)] font-medium">
                Striving to drive impactful change
              </p>
            </div>

            {/* India's first badge */}
            <div className="inline-block animate-slide-up" style={{animationDelay: '0.2s', opacity: 0, animationFillMode: 'forwards'}}>
              <div className="bg-[var(--abit-surface)] border-2 border-[var(--abit-blue)] rounded-2xl px-6 py-4 transition-all duration-300 hover:shadow-lg hover:scale-105">
                <h2 className="font-heading text-lg sm:text-xl font-bold text-[var(--abit-blue)]">
                  INDIA&apos;S FIRST STUDENT-LED
                  <br />
                  BEHAVIOURAL INSIGHTS TEAM
                </h2>
                <p className="text-sm text-[var(--abit-ink)]/70 mt-2">
                  Affiliated and funded by the Centre for Social
                  <br />
                  and Behaviour Change (CSBC)
                </p>
              </div>
            </div>

          </div>

          {/* Right content - Campus Images */}
          <div className="relative lg:block">
            <div className="grid grid-cols-1 gap-4 lg:gap-6">
              {/* Main featured image - Library */}
              <div className="relative h-56 lg:h-72 rounded-3xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
                <Image 
                  src="/images/ashoka-library.webp"
                  alt="Ashoka University Library - Modern Architecture"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              
              {/* Two smaller images in a row */}
              <div className="grid grid-cols-2 gap-3 lg:gap-4">
                {/* Campus aerial view */}
                <div className="relative h-32 lg:h-40 rounded-2xl overflow-hidden shadow-xl transform hover:scale-[1.02] transition-transform duration-500">
                  <Image 
                    src="/images/ashoka-campus.webp"
                    alt="Ashoka University Campus Aerial View"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
                
                {/* Main building */}
                <div className="relative h-32 lg:h-40 rounded-2xl overflow-hidden shadow-xl transform hover:scale-[1.02] transition-transform duration-500">
                  <Image 
                    src="/images/ashoka-main.jpg"
                    alt="Ashoka University Main Building"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
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