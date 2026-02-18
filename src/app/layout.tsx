import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Footer from "./components/Footer";

config.autoAddCss = false;

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Recuperación de Cartera en Salud | PRAVICE Abogados",
    template: "%s | PRAVICE Abogados",
  },
  description:
    "Firma especializada en recuperación de cartera en salud en Colombia. Cobro jurídico a EPS, procesos ejecutivos y declarativos para IPS, clínicas y hospitales.",
  keywords: [
    "recuperación de cartera en salud Colombia",
    "cobro jurídico a EPS",
    "demanda contra EPS",
    "reclamaciones ADRES",
    "abogados sector salud Colombia",
    "recuperación cartera IPS",
  ],
  openGraph: {
    title: "Recuperación de Cartera en Salud | PRAVICE Abogados",
    description:
      "Recuperación estratégica de cartera hospitalaria. Demandas contra EPS y procesos ejecutivos en Colombia.",
    url: "https://pravice-recaudocarteraipsyeps.com",
    siteName: "PRAVICE Abogados",
    locale: "es_CO",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-CO">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
