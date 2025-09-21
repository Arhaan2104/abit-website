import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Calendar, Clock } from "lucide-react"

interface Event {
  title: string
  date: string
  time?: string
  summary: string
  href: string
  featured?: boolean
}

interface EventListProps {
  title?: string
  subtitle?: string
  events: Event[]
  className?: string
}

export function EventList({ title, subtitle, events, className = "" }: EventListProps) {
  return (
    <section className={`py-16 lg:py-24 bg-[var(--abit-bg-soft-2)] ${className}`}>
      <div className="container">
        {(title || subtitle) && (
          <div className="text-center mb-12">
            {title && (
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--abit-ink)] mb-4">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-lg text-[var(--abit-ink)]/70 max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>
        )}

        <div className="max-w-4xl mx-auto space-y-6">
          {events.map((event, index) => (
            <Card 
              key={index}
              className="group bg-[var(--abit-surface)] border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <CardContent className="p-6">
                <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                  {/* Date Badge */}
                  <div className="flex-shrink-0">
                    <div className="bg-[var(--abit-yellow)] text-[var(--abit-ink)] rounded-2xl p-4 text-center min-w-[120px]">
                      <div className="flex items-center justify-center mb-2">
                        <Calendar className="h-4 w-4" />
                      </div>
                      <div className="font-heading font-bold text-lg leading-tight">
                        {event.date}
                      </div>
                      {event.time && (
                        <div className="flex items-center justify-center mt-2 text-sm">
                          <Clock className="h-3 w-3 mr-1" />
                          {event.time}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Event Details */}
                  <div className="flex-1 space-y-3">
                    <div className="flex items-start justify-between">
                      <h3 className="font-heading text-xl lg:text-2xl font-bold text-[var(--abit-ink)] group-hover:text-[var(--abit-blue)] transition-colors">
                        {event.title}
                      </h3>
                      {event.featured && (
                        <Badge className="bg-[var(--abit-orange)] text-white hover:bg-[var(--abit-orange)]/80 ml-4">
                          Featured
                        </Badge>
                      )}
                    </div>
                    
                    <p className="text-[var(--abit-ink)]/70 leading-relaxed">
                      {event.summary}
                    </p>

                    <Button 
                      asChild 
                      variant="ghost" 
                      className="p-0 h-auto text-[var(--abit-blue)] hover:text-[var(--abit-blue)]/80 hover:bg-transparent group/button"
                    >
                      <Link href={event.href} className="inline-flex items-center">
                        Learn more
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/button:translate-x-1" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Events Link */}
        <div className="text-center mt-12">
          <Button asChild className="btn-primary">
            <Link href="/events">
              View All Events
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}