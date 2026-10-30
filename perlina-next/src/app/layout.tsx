import type { ReactNode } from "react";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SmoothScroll from "../components/ui/SmoothScroll";
import { fontClassNames } from "@/lib/fonts";
import { CONTACT_PHONE_DISPLAY } from "../lib/contact";
import { buildLocalBusinessJsonLd } from "../lib/jsonLd";
import { SITE_URL } from "../lib/site";

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Perlina By L — Institut de beauté · La Grande-Motte",
    template: "%s · Perlina By L",
  },
  description: `Perlina By L, institut de beauté à La Grande-Motte. INDIBA® Deep Beauty, onglerie, soins, massages, épilations, browlift et lash lift. 15 rue Frédéric Mistral — sur rendez-vous au ${CONTACT_PHONE_DISPLAY}.`,
  openGraph: {
    title: "Perlina By L — Institut de beauté · La Grande-Motte",
    description: "Venez découvrir la technologie INDIBA® Deep Beauty et révéler votre beauté naturelle.",
    type: "website",
    locale: "fr_FR",
    url: SITE_URL,
    siteName: "Perlina By L",
    images: [{ url: "/images/salon-1.jpg", width: 1200, height: 1600, alt: "Perlina By L" }],
  },
};

const localBusinessJsonLd = buildLocalBusinessJsonLd(SITE_URL);

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr" className={fontClassNames}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <SmoothScroll>
          <Header />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
