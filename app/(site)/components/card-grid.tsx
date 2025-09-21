import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { LucideIcon } from "lucide-react"

interface CardItem {
  title: string
  description: string
  icon: LucideIcon
  badge?: string
  badgeVariant?: "default" | "secondary" | "destructive" | "outline"
}

interface CardGridProps {
  title?: string
  subtitle?: string
  items: CardItem[]
  className?: string
}

export function CardGrid({ title, subtitle, items, className = "" }: CardGridProps) {
  return (
    <section className={`py-16 lg:py-24 ${className}`}>
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
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {items.map((item, index) => (
            <Card 
              key={index} 
              className="group bg-[var(--abit-surface)] border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="p-3 rounded-xl bg-[var(--abit-bg-soft-1)] text-[var(--abit-blue)]">
                    <item.icon className="h-6 w-6" />
                  </div>
                  {item.badge && (
                    <Badge 
                      variant={item.badgeVariant || "secondary"}
                      className="bg-[var(--abit-yellow)] text-[var(--abit-ink)] hover:bg-[var(--abit-yellow)]/80"
                    >
                      {item.badge}
                    </Badge>
                  )}
                </div>
                <CardTitle className="text-xl font-heading font-bold text-[var(--abit-ink)] group-hover:text-[var(--abit-blue)] transition-colors">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-[var(--abit-ink)]/70 leading-relaxed">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}