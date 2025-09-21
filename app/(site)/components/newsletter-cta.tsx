"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, ArrowRight } from "lucide-react"

// TODO: Wire Substack RSS + embed later
function SubstackEmbed() {
  return (
    <div className="text-center p-8 bg-[var(--abit-bg-soft-1)]/50 rounded-2xl border-2 border-dashed border-[var(--abit-yellow)]/50">
      <Mail className="h-12 w-12 mx-auto mb-4 text-[var(--abit-blue)]" />
      <p className="text-[var(--abit-ink)]/60 font-medium">
        Substack embed placeholder
        <br />
        <span className="text-sm">To be wired later</span>
      </p>
    </div>
  )
}

interface NewsletterCtaProps {
  className?: string
}

export function NewsletterCta({ className = "" }: NewsletterCtaProps) {
  const [email, setEmail] = useState("")
  const [isSubscribing, setIsSubscribing] = useState(false)

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubscribing(true)
    
    // TODO: Integrate with actual newsletter service
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsSubscribing(false)
    setEmail("")
    
    // Placeholder success handling
    alert("Thank you for subscribing! (This is a placeholder)")
  }

  return (
    <section className={`py-16 lg:py-24 bg-[var(--abit-bg-soft-1)] ${className}`}>
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-[var(--abit-surface)] shadow-lg border-0">
            <CardContent className="p-8 lg:p-12">
              <div className="text-center space-y-8">
                {/* Header */}
                <div className="space-y-4">
                  <div className="inline-flex items-center justify-center p-3 bg-[var(--abit-yellow)]/20 rounded-2xl">
                    <Mail className="h-8 w-8 text-[var(--abit-blue)]" />
                  </div>
                  
                  <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--abit-ink)]">
                    Stay Updated
                  </h2>
                  
                  <p className="text-lg text-[var(--abit-ink)]/70 max-w-2xl mx-auto">
                    Get the latest insights, research findings, and updates from the 
                    Ashoka Behavioral Insights Team delivered to your inbox.
                  </p>
                </div>

                {/* Newsletter Form */}
                <div className="max-w-md mx-auto">
                  <form onSubmit={handleSubscribe} className="space-y-4">
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Input
                        type="email"
                        placeholder="Enter your email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="flex-1 h-12 border-[var(--abit-bg-soft-1)] focus:border-[var(--abit-blue)] focus:ring-[var(--abit-yellow)]"
                      />
                      <Button 
                        type="submit" 
                        disabled={isSubscribing}
                        className="btn-primary h-12 px-6 whitespace-nowrap"
                      >
                        {isSubscribing ? (
                          "Subscribing..."
                        ) : (
                          <>
                            Subscribe
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </>
                        )}
                      </Button>
                    </div>
                    
                    <p className="text-sm text-[var(--abit-ink)]/60">
                      We respect your privacy. Unsubscribe at any time.
                    </p>
                  </form>
                </div>

                {/* Substack Embed Placeholder */}
                <div className="mt-12">
                  <SubstackEmbed />
                </div>

                {/* Newsletter Preview */}
                <div className="grid sm:grid-cols-3 gap-6 mt-12 pt-8 border-t border-[var(--abit-bg-soft-1)]">
                  <div className="text-center">
                    <div className="font-heading text-2xl font-bold text-[var(--abit-blue)] mb-2">
                      Weekly
                    </div>
                    <p className="text-sm text-[var(--abit-ink)]/70">
                      Research insights and findings
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="font-heading text-2xl font-bold text-[var(--abit-orange)] mb-2">
                      500+
                    </div>
                    <p className="text-sm text-[var(--abit-ink)]/70">
                      Subscribers and growing
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="font-heading text-2xl font-bold text-[var(--abit-yellow)] mb-2">
                      Free
                    </div>
                    <p className="text-sm text-[var(--abit-ink)]/70">
                      No cost, just insights
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}