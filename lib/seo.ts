import type { Metadata } from "next"

interface SEOProps {
  title?: string
  description?: string
  image?: string
  url?: string
}

export function generateSEO({
  title,
  description = "Student-led research, design, and experiments at Ashoka University. India's first student-led behavioral insights team.",
  image = "/images/og-image.png",
  url = "https://abit.ashoka.edu.in",
}: SEOProps = {}): Metadata {
  const formattedTitle = title ? `${title} | ABIT` : "ABIT - Ashoka Behavioral Insights Team"

  return {
    title: formattedTitle,
    description,
    openGraph: {
      title: formattedTitle,
      description,
      url,
      siteName: "ABIT",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title || "ABIT - Ashoka Behavioral Insights Team",
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: formattedTitle,
      description,
      images: [image],
    },
    metadataBase: new URL(url),
  }
}