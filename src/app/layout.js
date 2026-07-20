import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://livfitgym.in";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "LIV FIT GYM Kalkaji | Best Gym in Kalkaji, New Delhi",
    template: "%s | LIV FIT GYM Kalkaji",
  },
  description:
    "LIV FIT GYM in Kalkaji, New Delhi offers premium gym equipment, expert trainers, and flexible membership plans. Visit the top-rated gym near Kalkaji today.",
  keywords: [
    "gym in Kalkaji",
    "gym near Kalkaji",
    "best gym in Kalkaji",
    "gym New Delhi",
    "fitness center Kalkaji",
    "LIV FIT GYM",
    "personal training Kalkaji",
    "gym membership Delhi",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "LIV FIT GYM Kalkaji | Best Gym in Kalkaji, New Delhi",
    description:
      "Premium fitness facility in Kalkaji, New Delhi with top-tier equipment, expert coaching, and flexible membership plans.",
    url: siteUrl,
    siteName: "LIV FIT GYM",
    images: [
      {
        url: "/assets/gymGallery/DSC_0052.jpeg",
        width: 1200,
        height: 900,
        alt: "LIV FIT GYM Kalkaji interior",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LIV FIT GYM Kalkaji | Best Gym in Kalkaji, New Delhi",
    description:
      "Premium fitness facility in Kalkaji, New Delhi with top-tier equipment, expert coaching, and flexible membership plans.",
    images: ["/assets/gymGallery/DSC_0052.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "ExerciseGym",
  name: "LIV FIT GYM",
  image: `${siteUrl}/assets/gymGallery/DSC_0052.jpeg`,
  url: siteUrl,
  telephone: "+91-9873500250",
  email: "livfitwithnomyths@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "59/2 Guru Ravidas Marg, Opp HDFC Bank",
    addressLocality: "Kalkaji, New Delhi",
    postalCode: "110019",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 28.5516001,
    longitude: 77.2587784,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    opens: "06:00",
    closes: "22:00",
  },
  priceRange: "₹₹",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
