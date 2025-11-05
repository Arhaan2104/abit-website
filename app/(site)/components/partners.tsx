import Image from "next/image"

type Partner = {
  src: string
  alt: string
  href?: string
  width?: number
  height?: number
}

interface PartnersProps {
  items: Partner[]
}

export default function Partners({ items }: PartnersProps) {
  return (
    <section
      aria-labelledby="partners-title"
      className="py-16 md:py-24"
    >
      <div className="container">
        {/* Partners Heading */}
        <div className="text-center mb-12">
          <h2 id="partners-title" className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--abit-blue)] mb-4">
            Partners
          </h2>
        </div>

        <div className="rounded-3xl border border-black/5 bg-[var(--abit-surface)] shadow-sm p-8 md:p-12">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 items-center gap-8 md:gap-10">
            {items.map((partner, index) => {
              const imageElement = (
                <Image
                  src={partner.src}
                  alt={partner.alt}
                  width={partner.width ?? 200}
                  height={partner.height ?? 80}
                  sizes="(min-width: 768px) 16vw, 33vw"
                  className="mx-auto h-12 sm:h-14 md:h-16 w-auto object-contain opacity-80 transition-all duration-300 hover:opacity-100 hover:scale-105"
                  priority={index < 3}
                />
              )

              return partner.href ? (
                <a
                  key={`${partner.src}-${index}`}
                  href={partner.href}
                  aria-label={`Visit ${partner.alt} website`}
                  target={partner.href.startsWith("http") ? "_blank" : undefined}
                  rel={partner.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="block group transition-transform duration-200 hover:scale-105"
                >
                  {imageElement}
                </a>
              ) : (
                <div 
                  key={`${partner.src}-${index}`} 
                  className="block group transition-transform duration-200 hover:scale-105"
                >
                  {imageElement}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}