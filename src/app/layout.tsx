import type { Metadata } from "next";
import { Istok_Web, Instrument_Sans } from "next/font/google";
import "./globals.css";

const istokWeb = Istok_Web({
  variable: "--font-istok-web",
  weight: ["400", "700"],
  subsets: ["latin"],
});

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vitalia Kumeska — Product Designer",
  description:
    "I research how people decide to choose a small business, then structure the site around that decision.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${istokWeb.variable} ${instrumentSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
