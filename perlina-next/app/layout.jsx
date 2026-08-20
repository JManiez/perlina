import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SmoothScroll from "../components/SmoothScroll";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://perlinabyl.fr";

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Perlina By L — Institut de beauté · La Grande-Motte",
    template: "%s · Perlina By L",
  },
  description:
    "Perlina By L, institut de beauté à La Grande-Motte. Technologie INDIBA® Deep Beauty, onglerie et soins. 15 rue Frédéric Mistral — sur rendez-vous au 06 72 56 74 89.",
  openGraph: {
    title: "Perlina By L — Institut de beauté · La Grande-Motte",
    description: "Venez découvrir la technologie INDIBA® Deep Beauty et révéler votre beauté naturelle.",
    type: "website",
    locale: "fr_FR",
    url: siteUrl,
    siteName: "Perlina By L",
    images: [{ url: "/images/salon-1.jpg", width: 1200, height: 1600, alt: "Perlina By L" }],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Great+Vibes&family=Cormorant+Garamond:ital,wght@0,400;0,500;1,400&family=Jost:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <SmoothScroll>
          <Header />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
