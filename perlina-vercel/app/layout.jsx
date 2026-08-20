import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Perlina By L — Institut de beauté · La Grande-Motte",
  description:
    "Perlina By L, votre institut de beauté à La Grande-Motte. Technologie INDIBA® Deep Beauty, onglerie, massages, épilations. 15 rue Frédéric Mistral — sur rendez-vous au 07 72 56 74 89.",
  openGraph: {
    title: "Perlina By L — Institut de beauté · La Grande-Motte",
    description: "Venez découvrir la technologie INDIBA® Deep Beauty et révéler votre beauté naturelle.",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Great+Vibes&family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400&family=Jost:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
