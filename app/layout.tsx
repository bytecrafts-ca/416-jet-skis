import { Bricolage_Grotesque, Plus_Jakarta_Sans } from "next/font/google";
import { CalendlyProvider } from "@/components/CalendlyProvider";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { MobileStickyCTA } from "@/components/MobileStickyCTA";
import { globalJsonLd, rootMetadata } from "@/lib/seo";
import "./globals.css";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
});

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = rootMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-CA" className={`${display.variable} ${sans.variable}`}>
      <body className="font-sans">
        <JsonLd data={globalJsonLd()} />
        <CalendlyProvider />
        <Header />
        <main>{children}</main>
        <Footer />
        <MobileStickyCTA />
      </body>
    </html>
  );
}
