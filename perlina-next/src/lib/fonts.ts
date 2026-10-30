import { Cormorant_Garamond, Great_Vibes, Jost } from "next/font/google";

export const fontSans = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-sans-next",
  display: "swap",
});

export const fontSerif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  variable: "--font-serif-next",
  display: "swap",
});

export const fontScript = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-script-next",
  display: "swap",
});

export const fontClassNames = `${fontSans.variable} ${fontSerif.variable} ${fontScript.variable}`;
